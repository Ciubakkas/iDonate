import { db } from "../firebase";

export const syncUserData: producer = ({
  isAuth = observe.user.isAuth,
  uid = observe.user.uid,
  setData = update.user.data,
  setOnboarding = update.user.onboarded,
}) => {
  if (!isAuth || !uid) {
    return;
  }

  /*const unsubscribe = */ db.collection("users")
    .doc(uid)
    .onSnapshot((doc) => {
      const data = doc.data();
      if (!data) return;
      setData.set(data.data);
      setOnboarding.set(data.onboarded);
    });
};
