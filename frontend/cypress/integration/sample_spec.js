/* eslint-disable no-undef */

describe(
  'Basic Navigation',
  {
    viewportWidth: 1400,
    viewportHeight: 700,
  },
  () => {
    it('can navigate to the login page', () => {
      cy.visit('/login');
    });

    it('can load the dashboard', () => {
      cy.visit('/');
    });

    it('can navigate to the settings page via the profile dropdown', () => {
      cy.get('#nav-toggle-icon').click();
      cy.get('#user-settings').click();
      cy.url().should('include', '/settings');
    });
  },
);
