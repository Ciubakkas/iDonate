module.exports = {
  root: true,
  plugins: ["cypress"],
  env: {
    "cypress/globals": true,
  },
  extends: ["plugin:cypress/recommended"],
};
