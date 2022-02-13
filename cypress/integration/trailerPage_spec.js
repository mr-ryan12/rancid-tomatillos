describe('Trailer Page User Flow Happy Path', () => {
    beforeEach(() => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/726739/videos', { fixture: 'trailerHappyPath.json' })
        cy.visit('http://localhost:3000')
          .contains('.movie-card', 'Cats & Dogs')
          .find('img')
          .click().wait(45)
          .get('.button-container')
          .find('.trailer-link')
          .click()
    });

    it('Should be able to visit the trailer page and the user will see the application name & fun tagline', () => {
        cy.contains('Rotten Tomatillos')
          .get('.text-focus-in')
          .contains('Where your imagination comes to life on the big screen')
    });

    it('Should display all working trailers available for the movie', () => {
        cy.get('.video')
          .should('have.length', 11)
    });

    it('Should display 2 buttons at the bottom of the page', () => {
        cy.get('.trailer-container').find('.back-home-button').contains('Home')
        cy.get('.trailer-container').find('.back-to-movie-button').contains('Back to Movie Details')
    });

    it('Should route to the home page when home button is pressed', () => {
        cy.get('.trailer-container').find('.back-home-button').contains('Home').click()
        cy.url('http://localhost:3000')
    });

    it('Should route to the individual movie page when Back to Movie Details is pressed', () => {
        cy.get('.trailer-container').find('.back-to-movie-button').contains('Back to Movie Details').click()
        cy.url('http://localhost:3000/726739')
    });

    it('Should play a video if clicked', () => {
        cy.get('.video').first().trigger('click', 'center').click()
    });

    it('Should go back when pressing back button', () => {
        cy.go('back')
          .url().should('eq', 'http://localhost:3000/726739')
    });
    
    it('Should go forward when pressing forward button', () => {
        cy.go('forward')
          .url().should('eq', 'http://localhost:3000/726739/trailer')
    });
});

describe('Trailer Page User Flow Sad Path', () => {
    beforeEach(() => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/726739/videos', { fixture: 'trailerSadPath.json' })
        cy.visit('http://localhost:3000')
        .contains('.movie-card', 'Cats & Dogs')
        .find('img')
        .click().wait(45)
        .get('.button-container')
        .find('.trailer-link')
        .click()
    });

    it('Should be able to visit the trailer page and the user will see the application name & fun tagline', () => {
        cy.contains('Rotten Tomatillos')
          .get('.text-focus-in')
          .contains('Where your imagination comes to life on the big screen')
    });

    it('Should display all working trailers available for the movie', () => {
        cy.get('.video')
          .should('have.length', 0)
    });

    it('Should display 2 buttons at the bottom of the page', () => {
        cy.get('.trailer-container').find('.back-home-button').contains('Home')
        cy.get('.trailer-container').find('.back-to-movie-button').contains('Back to Movie Details')
    });

    it('Should route to the home page when home button is pressed', () => {
        cy.get('.trailer-container').find('.back-home-button').contains('Home').click()
        cy.url('http://localhost:3000')
    });

    it('Should route to the individual movie page when Back to Movie Details is pressed', () => {
        cy.get('.trailer-container').find('.back-to-movie-button').contains('Back to Movie Details').click()
        cy.url('http://localhost:3000/726739')
    });

    it('Should display Sad path messaging', () => {
        cy.get('.gif-container')
          .contains('Sorry, no trailers available for this movie at this time.')
    });

    it('Should display a crying cat', () => {
        cy.get('iframe')
          .should('have.attr', 'src', 'https://giphy.com/embed/qpCvOBBmBkble') 
    });

    it('Should go back when pressing back button', () => {
        cy.go('back')
          .url().should('eq', 'http://localhost:3000/726739')
    });
    
    it('Should go forward when pressing forward button', () => {
        cy.go('forward')
          .url().should('eq', 'http://localhost:3000/726739/trailer')
    });
});