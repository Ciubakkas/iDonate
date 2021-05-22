import i18n from "./i18n";
import { db } from "src/producers/firebase";
import { Language } from "src/types";

export const changeLanguage: producer = async ({
  trigger = observe.languages.triggers.change,
  triggerUpdate = update.languages.triggers.change,
  uid = observe.user.uid,
  userLang = get.user.data.language,
}) => {
  if (!trigger || !uid) {
    return;
  }
  triggerUpdate.remove();
  try {
    const newLanguage = Object.values(Language).includes(trigger) ? trigger : Language.NORWEGIAN;
    await i18n.changeLanguage(newLanguage);
    if (newLanguage !== userLang.value()) {
      const usersCollection = db.collection("users");
      const user = await usersCollection.doc(uid).get();
      if (user.exists) {
        usersCollection.doc(uid).set(
          {
            data: {
              language: newLanguage,
            },
          },
          { merge: true }
        );
      }
    }
  } catch (e) {
    console.error("changeLanguage", e);
  }
};
