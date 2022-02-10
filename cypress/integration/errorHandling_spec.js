describe('Error Display User Flow', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { statusCode: 404 })
    cy.visit('http://localhost:3000/')
  });

  it('Should be able to visit the main page and the user will see the application name & fun tagline', () => {
    cy.contains('Rotten Tomatillos')
      .get('.text-focus-in')
      .contains('Where your imagination comes to life on the big screen')
  });

  it('Should display an error modal when the URL is incorrect', () => {
    cy.get('.error-message')
      .should('have.text', 'Something went wrong. Please refresh the page or try again later.')
  });

  it('Should have a refresh button in the error modal', () => {
    cy.get('.refresh-button')
      .contains('Refresh')
  });

  it('Should display message for 500 error', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { statusCode: 500 })
    cy.visit('http://localhost:3000/')

    cy.get('.error-message')
      .should('have.text', 'Something went wrong. Please refresh the page or try again later.')
  });

  it('Should be able to click the refresh button', () => {
    cy.get('.refresh-button')
      .click()
  });
});