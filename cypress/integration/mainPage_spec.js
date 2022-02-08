describe('Main Page User Flow', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Should be able to visit the main page and the user will see the application name & fun tagline', () => {
    cy.contains('Rotten Tomatillos')
      .get('.text-focus-in')
      .contains('Where your imagination comes to life on the big screen')
  });

  
  it('should display the poster image', () => {
    cy.get('img')
      .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg')
  });
  
  it('should display the movie title', () => {
    cy.get('.poster-movie-title')
      .contains('Cats & Dogs 3: Paws Unite')
  });

  it('should have an alt text for the image', () => {
    cy.get('img')
      .should('have.attr', 'alt', 'Movie Poster for Cats & Dogs 3: Paws Unite')
  });
  
  it('should display the release date', () => {
    cy.get('.poster-release-date')
      .contains('10-02-2020')
  });

  // Find out how to test for formatting
  // it('Should display the date in the correct format', () => {

  // });

  it('Should have a clickable poster image', () => {
    cy.contains('.movie-card', 'Cats & Dogs 3: Paws Unite')
      .find('img')
      .click()
  });

  it('Should display the average rating', () => {
    cy.get('.poster-average-rating')
      .contains('7.00')
  });

  // Ask to see if this is necessary
  // it('Should display the movies sorted by release date (newest to oldest)', () => {
    
  // });

  it('Should not display the backdrop image', () => {
    cy.get('.image-container')
      .should('not.exist')
  });

  // it('Should not display the movie id', () => {
  //   cy.get('')
  // });

  it('Should display 40 movie cards', () => {
    cy.get('.movie-card')
      .should('have.length', 40)
  });
});