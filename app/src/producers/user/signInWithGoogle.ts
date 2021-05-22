import { auth, GoogleAuthProvider } from "../firebase";
import firebase from "firebase";
import { ApplicationError, ErrorLevel } from "src/types";

export const signInWithGoogle: producer = ({
  trigger = observe.session.triggers.signInWithGoogle,
  error = update.errors[param.type],
}) => {
  if (!trigger) {
    return;
  }

  const provider = new GoogleAuthProvider();
  auth
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      auth.signInWithPopup(provider);
    })
    .catch((err) => {
      console.error("Error login with google");
      error.set({ message: "error-login", detailed: err, level: ErrorLevel.BREAKING } as ApplicationError, {
        type: "auth",
      });
    });
};
