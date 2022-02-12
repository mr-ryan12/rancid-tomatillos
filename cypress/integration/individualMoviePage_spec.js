describe('Individual Movie Page User Flow', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/*', { fixture: 'individualHappyMovie.json' })
    cy.visit('http://localhost:3000')
      .contains('.movie-card', 'Cats & Dogs')
      .find('img')
      .click()
  });

  it('Should be able to visit the main page and the user will see the application name & fun tagline', () => {
    cy.contains('Rotten Tomatillos')
      .get('.text-focus-in')
      .contains('Where your imagination comes to life on the big screen')
  });

  it('Should display movie details for the individual movie selected', () => {
    cy.get('.individual-movie-container').contains('The New Mutants')
    cy.get('.individual-movie-container').contains('It\'s time to face your demons')
    cy.get('.individual-movie-container').contains('Overview: Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.')
    cy.get('.individual-movie-container').contains('Budget: $67,000,000')
    cy.get('.individual-movie-container').contains('Genre: Action, Science Fiction, Horror, Adventure')
    cy.get('.individual-movie-container').contains('Runtime: 94 minutes')
    cy.get('.individual-movie-container').contains('Revenue: $3,100,000')
    cy.get('.individual-movie-container').contains('Rating: 4.00')
    cy.get('.individual-movie-container').contains('Release Date: 08-26-2020')
    cy.get('.individual-movie-container').find('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//eCIvqa3QVCx6H09bdeOS8Al2Sqy.jpg')
    cy.get('.individual-movie-container').find('.home-button').contains('Home')
    cy.get('.individual-movie-container').find('.trailer-link').contains('Watch Trailer')
  });

  it('Should return to the home page by clicking the home button', () => {
    cy.get('.individual-movie-container').find('.home-button').click()
  });

    it('Should route to the trailer page by clicking the Watch Trailers button', () => {
    cy.get('.individual-movie-container').find('.trailer-link').click()
  });
});

describe('Sad path testing', () => {
  
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/*', { fixture: 'individualSadMovie.json' })
    cy.visit('http://localhost:3000')
      .contains('.movie-card', 'Cats & Dogs')
      .find('img')
      .click()
  });

  it('Should be able to visit the main page and the user will see the application name & fun tagline', () => {
    cy.contains('Rotten Tomatillos')
      .get('.text-focus-in')
      .contains('Where your imagination comes to life on the big screen')
  });

  it('Should display movie details for the individual movie selected', () => {
    cy.get('.individual-movie-container').contains('Maratón After')
    cy.get('.individual-movie-container').contains('Overview: No overview available at this time')
    cy.get('.individual-movie-container').contains('Budget: N/A')
    cy.get('.individual-movie-container').contains('Genre: It\'s a mystery...')
    cy.get('.individual-movie-container').contains('Runtime: N/A')
    cy.get('.individual-movie-container').contains('Revenue: N/A')
    cy.get('.individual-movie-container').contains('Rating: 4.33')
    cy.get('.individual-movie-container').contains('Release Date: 09-03-2020')
    cy.get('.individual-movie-container').find('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//opZKcgocttEOAUzqluX3bUbbDew.jpg')
    cy.get('.individual-movie-container').find('.home-button').contains('Home')
  });

  it('Should return to the home page by clicking the home button', () => {
    cy.get('.individual-movie-container').find('.home-button').click()
  });
});