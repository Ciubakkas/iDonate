import { Language } from "src/types";

export const syncUrl: producer = ({
  setCurrentPath = update.routes.currentPath,
  setCurrentQuery = update.routes.currentQuery,
  setAutologin = update.routes.queryParams.autologin,
  setHidenNavbar = update.routes.queryParams.hiddenNavbar,
  setGoogleAuth = update.routes.queryParams.googleAuth,
  setTenantNumber = update.routes.queryParams.tenantNumber,
  changeLanguage = update.languages.triggers.change,
  logout = update.session.triggers.logout,
}) => {
  const pathname = window.location.pathname;
  if (pathname == "/logout") {
    logout.set(Date.now());
    return;
  }
  setCurrentPath.set(pathname);
  const currentQuery = window.location.search;
  if (currentQuery) {
    const queryObj = new URLSearchParams(currentQuery);
    const language = queryObj.get("language");
    const autologin = queryObj.get("autologin");
    const hiddenNavbar = queryObj.get("hiddenNavbar");
    const googleAuth = queryObj.get("googleAuth");
    const tenantNumber = queryObj.get("kundeNummer");
    if (language) changeLanguage.set(language == "en" ? Language.ENGLISH : Language.NORWEGIAN);
    if (autologin == "true") setAutologin.set(true);
    if (hiddenNavbar == "true") setHidenNavbar.set(true);
    if (googleAuth == "true") setGoogleAuth.set(true);
    if (tenantNumber) setTenantNumber.set(tenantNumber);
  }
  setCurrentQuery.set(currentQuery);
};
