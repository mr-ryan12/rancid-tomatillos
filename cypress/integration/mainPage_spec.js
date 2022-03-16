describe('Main Page User Flow', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json'})
    cy.visit('http://localhost:3000')
  })

  it('Should be able to visit the main page and the user will see the application name & fun tagline', () => {
    cy.contains('Rancid Tomatillos')
      .get('.text-focus-in')
      .contains('Where your imagination comes to life on the big screen')
  });
  
  it('Should display the poster image', () => {
    cy.get('img')
      .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
  });
  
  it('Should display the movie title', () => {
    cy.get('.poster-movie-title')
      .contains('Money Plane')
  });

  it('Should have an alt text for the image', () => {
    cy.get('img')
      .should('have.attr', 'alt', 'Movie Poster for Money Plane')
  });
  
  it('Should display the release date', () => {
    cy.get('.poster-release-date')
      .contains('09-29-2020')
  });

  it('Should have a clickable poster image', () => {
    cy.contains('.movie-card', 'Money Plane')
      .find('img')
      .click()
  });

  it('Should display the average rating', () => {
    cy.get('.poster-average-rating')
      .contains('6.67')
  });

  
  it('Should not display the backdrop image', () => {
    cy.get('.image-container')
      .should('not.exist')
  });
  
  it('Should display 3 movie cards', () => {
    cy.get('.movie-card')
      .should('have.length', 3)
  });

  it('Should display the movies sorted by release date (newest to oldest)', () => {
    cy.get('.poster-release-date')
      .first()
      .contains('09-29-2020')
    cy.get('.poster-release-date')
      .eq(2)
      .contains('08-20-2020')
    cy.get('.poster-release-date')
      .eq(1)
      .contains('09-04-2020')
  });
});
