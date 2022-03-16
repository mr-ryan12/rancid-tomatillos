describe('Error Display User Flow', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { statusCode: 404 })
    cy.visit('http://localhost:3000/')
  });

  it('Should be able to visit the main page and the user will see the application name & fun tagline', () => {
    cy.contains('Rancid Tomatillos')
      .get('.text-focus-in')
      .contains('Where your imagination comes to life on the big screen')
  });

  it('Should display an error modal when there is an error', () => {
    cy.get('.error-message')
      .should('have.text', 'Something went wrong. Please try again later.')
  });

  it('Should display message for broken GET request', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { statusCode: 500 })
    cy.visit('http://localhost:3000/')

    cy.get('.error-message')
      .should('have.text', 'Something went wrong. Please try again later.')
  });
});