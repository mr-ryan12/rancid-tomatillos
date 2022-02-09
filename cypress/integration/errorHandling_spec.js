describe('Error Display User Flow', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'brokenURL.json' })
    cy.visit('http://localhost:3000')
  });

  it('Should be able to visit the main page and the user will see the application name & fun tagline', () => {
    cy.contains('Rotten Tomatillos')
      .get('.text-focus-in')
      .contains('Where your imagination comes to life on the big screen')
  });
});