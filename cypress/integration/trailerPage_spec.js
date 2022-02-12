describe('Trailer Page User Flow', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos', { fixture: 'individualHappyMovie.json' })
    cy.visit('http://localhost:3000')
      .contains('.movie-card', 'Cats & Dogs')
      .find('img')
      .click()
  });


});