module.exports = {
  e2e: {
    // Your specs live under the nested `cypress/cypress/e2e` folder.
    // Make Cypress look there when opened from the repository root.
    specPattern: 'cypress/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    // Point to the nested support file as well.
    supportFile: 'cypress/cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
