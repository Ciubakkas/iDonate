import { creationAuth, db } from "../firebase";
import { Language } from "src/types";

export const syncNewUser: producer = async () => {
  await creationAuth.onAuthStateChanged(async (user) => {
    if (user) {
      const uid = user.uid;

      const userDocument = await db.collection("users").doc(uid).get()
      if (!userDocument.exists) {
        await db.collection("users").doc(uid)
          .set({
            role: "tenant",
            uid,
            data: {
              displayName: user.displayName,
              email: user.email,
              emailVerified: user.emailVerified,
              language: Language.NORWEGIAN,
              photoURL: user.photoURL,
              isAnonymous: user.isAnonymous,
              providerData: JSON.parse(JSON.stringify(user.providerData)),
            },
          });
      }
    }
  });
};
