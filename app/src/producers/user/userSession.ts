import { auth, db, functions } from "../firebase";
import { ApplicationError, ErrorLevel, Language } from "src/types";

export const userSession: producer = async ({
  isReady = observe.session.firebase.isReady,

  userObj = update.user,
  setIsAuth = update.user.isAuth,
  setUid = update.user.uid,
  updateTenantId = update.user.tenantId,

  error = update.errors[param.type],
}) => {
  if (!isReady) return;
  try {
    await auth.onAuthStateChanged(async (user) => {
      if (!user) {
        userObj.remove();
        setIsAuth.set(false);
        return;
      }

      setIsAuth.set(true);
      setUid.set(user.uid);
      const uid = user.uid;
      const doc = await db.collection("users").doc(uid).get();
      let userInfo: any;
      if (!doc.exists) {
        userInfo = {
          uid,
          data: {
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            language: Language.NORWEGIAN,
            photoURL: user.photoURL,
            isAnonymous: user.isAnonymous,
            role: "",
            providerData: JSON.parse(JSON.stringify(user.providerData)),
          },
        };
      } else {
        userInfo = doc.data();
      }
      const result = await user.getIdTokenResult();

      // KLP Auth
      if (
        result.signInProvider == "oidc.klp-dev" ||
        result.signInProvider == "oidc.klp-staging" ||
        result.signInProvider == "oidc.klp-prod"
      ) {
        const attributes = result.claims.firebase.sign_in_attributes;
        if (!Array.isArray(attributes.role)) attributes.role = [attributes.role];
        let roles = attributes.role
          .map((role: any) => {
            switch (role) {
              case "admin":
                return "manager";
              case "superuser":
                return "tenant";
              default:
                return "";
            }
          })
          .filter((role: string) => !!role);

        if (roles.indexOf("manager") >= 0) {
          userInfo.data.role = "manager";
          // const index = roles.indexOf("tenant");
          // if (index >= 0) {
          //   roles.splice(index, 1);
          // }
        } else {
          userInfo.data.role = "tenant";
        }

        const snapshot = await db.collection("SOUserData").where("email", "==", user.displayName).get();
        let userData: any = {};
        snapshot.forEach((snap) => {
          userData = snap.data();
        });
        userInfo.data.firstName = userData.firstName ?? "";
        userInfo.data.lastName = userData.lastName ?? "";
        userInfo.data.hasCustomerPortalInterest = userData.hasCustomerPortalInterest ?? false;
        userInfo.data.superOfficeId = userData.id ?? "";
        userInfo.data.displayName = `${userInfo.data.firstName} ${userInfo.data.lastName}`;
        let companies = attributes?.kunder || "";
        if (companies) {
          if (companies.includes(";")) {
            companies = companies.split(";");
          } else {
            companies = [companies];
          }
        }

        const syncSingleTenant = functions.httpsCallable("syncSingleTenant");
        userInfo.data.tenantId = [];
        for (let index = 0; index < companies.length; index++) {
          const tenantNumber = companies[index];
          const result = await syncSingleTenant({ tenantId: tenantNumber });
          const tenant = result.data;
          if (tenant.error) {
            error.set(
              {
                message: "error-so-sync-tenant",
                detailed: tenant.error,
                level: ErrorLevel.WARNING,
              } as ApplicationError,
              { type: "auth" }
            );
            console.error(tenant.error);
            break;
          }
          userInfo.data.tenantId.push(tenant.id);
        }
        userInfo.data.email = user.displayName;
      }

      // GOOGLE Auth
      if (result.signInProvider == "google.com") {
        if (!userInfo?.data?.role) userInfo.data.role = "tenant";
        if (userInfo?.data?.roles?.length < 1) userInfo.data.roles = [userInfo.data.role];
      }
      await db.collection("users").doc(uid).set(userInfo, { merge: true });
    });
  } catch (err) {
    console.log("Error on auth, ", err);
    error.set({ message: "error-sync-auth-user", level: ErrorLevel.BREAKING } as ApplicationError, { type: "auth" });
  }
};
