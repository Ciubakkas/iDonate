export const sessionIsReady: producer = ({
  firebaseIsReady = observe.session.firebase.isReady,
  setIsReady = update.session.isReady,
}) => {
  if (!firebaseIsReady) {
    return;
  }

  setIsReady.set(true);
};
