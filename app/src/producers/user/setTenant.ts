import { ApplicationError, UserType, ErrorLevel } from "src/types";
import { db } from "src/producers/firebase";

export const setTenant: producer = ({
  email = observe.user.data.email,
  role = get.user.data.role,
  userId = get.user.uid,
  updateUser = update.user.tenantId,
  error = update.errors[param.type],
}) => {
  role = role.value();
  if (role !== UserType.TENANT || !email) {
    return;
  }
  try {
    const tenantsDb = db.collection("tenants");
    tenantsDb
      .where("users", "array-contains", email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const tenant = doc.data();
          if (!tenant) return;
          const uid = userId.value();
          db.collection("users")
            .doc(uid)
            .set(
              {
                data: {
                  tenantId: doc.id,
                },
              },
              { merge: true }
            );
          // updateUser.set(doc.id)
        });
      });
  } catch (e) {
    console.error("Error setting tenant id, ", e);
    error.set({ message: "error-sync-tenant", detailed: e, level: ErrorLevel.WARNING } as ApplicationError, {type:"auth"});
  }
};
