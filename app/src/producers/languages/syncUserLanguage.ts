export const syncUserLanguage: producer = ({
  userLang = observe.user.data.language,
  refCurrentLanguage = get.languages.current,
  changeLanguage = update.languages.triggers.change,
}) => {
  if (!userLang) {
    return;
  }

  if (userLang === refCurrentLanguage.value()) {
    return;
  }

  // changeLanguage.set(userLang);
};
