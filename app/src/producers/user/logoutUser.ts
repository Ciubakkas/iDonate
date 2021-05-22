import { ApplicationError, ErrorLevel } from "src/types";
import { auth } from "../firebase";

export const logoutUser: producer = ({
  trigger = observe.session.triggers.logout,
  error = update.errors[param.type],
}) => {
  if (!trigger) {
    return;
  }

  auth
    .signOut()
    .then((x: any) => {})
    .catch((e: any) => {
      error.set({ message: "error-logout", detailed: e, level: ErrorLevel.BREAKING } as ApplicationError, {
        type: "auth",
      });
    });
};
