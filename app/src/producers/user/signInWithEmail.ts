import { auth } from "../firebase";

export const signInWithEmail: producer = ({
  trigger = observe.session.triggers.signInWithEmail,
  authData = get.session.auth,
}) => {
  if (!trigger) {
    return;
  }
  const { email, password } = authData.value();

  auth.signInWithEmailAndPassword(email, password);
};
