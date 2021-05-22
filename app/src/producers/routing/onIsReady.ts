import { RouteName } from "src/types";

export const onSessionIsReady: producer = ({
  isReady = observe.session.isReady,
  isUserReady = observe.user.isReady,
  isLanguageReady = observe.languages.isReady,
  isAuth = observe.user.isAuth,
  currentPath = observe.routes.currentPath,
  currentQuery = observe.routes.currentQuery,

  changeRoute = update.routes.triggers.changeRoute,
  setContractInitialState = update.contract,
}) => {
  if (!isReady || !isLanguageReady) {
    return;
  }
  if(!currentQuery) currentQuery = ''
  if (isUserReady) {
    const pathSplited = currentPath.split("/");
    const pathRoute = "/" + pathSplited[1];
    const pathParam = pathSplited[2];
    if (pathRoute === "/contract" && pathParam) {
      changeRoute.set({
        route: RouteName.CONTRACT,
        data: { contractId: pathParam, templateId: "template1" },
      });
      setContractInitialState.set({ id: pathParam, templateId: "template1" });
      window.history.pushState("", "", "/contract/" + pathParam + currentQuery);
    } else {
      changeRoute.set({ route: RouteName.DASHBOARD });
      window.history.replaceState("", "", "/" + currentQuery);
    }
  } else if (isAuth === false) {
    window.history.replaceState("", "", "/login" + currentQuery);
    changeRoute.set({
      route: RouteName.LOGIN,
    });
  }
};
