describe('Trailer Page User Flow', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/726739/videos', { fixture: 'trailerHappyPath.json' })
    cy.visit('http://localhost:3000')
      .contains('.movie-card', 'Cats & Dogs')
      .find('img')
      .click()
      .get('.button-container')
      .find('.trailer-link')
      .click().wait(45)
 
  });

  it('Should be able to visit the trailer page and the user will see the application name & fun tagline', () => {
    cy.contains('Rotten Tomatillos')
      .get('.text-focus-in')
      .contains('Where your imagination comes to life on the big screen')
  });

  it('should display all working trailers available for the movie', () => {
    cy.get('.video')
    .should('have.length', 11)
  })

   it('should display 2 buttons at the bottom of the page', () => {
    cy.get('.trailer-container').find('.back-home-button').contains('Home')
    cy.get('.trailer-container').find('.back-to-movie-button').contains('Back to Movie Details')
  })
  
});