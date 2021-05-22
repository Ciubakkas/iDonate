export const userIsReady: producer = ({
  isAuth = observe.user.isAuth,
  data = observe.user.data,
  setIsReady = update.user.isReady,
}) => {
  if (!isAuth || !data) {
    return;
  }

  setIsReady.set(true);
};
