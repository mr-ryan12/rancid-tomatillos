describe.only('404 User Flow', () => {
  beforeEach(() => { 
    cy.visit('http://localhost:3000')
    cy.visit('http://localhost:3000/asdf')
  });

  it('Should be directed to a 404 page if incorrect URL entered', () => {
    cy.get('h2')
      .eq(1)
      .should('have.text', 'Page not found')
      .get('iframe')
      .should('have.attr', 'src', 'https://giphy.com/embed/Zf9oMBBf3eRTW')
      .get('.four-oh-four-home-button')
      .should('have.text', 'Back to Home')
      .click()
      .url().should('eq', 'http://localhost:3000/')
  });

  it('Should go back when pressing back button', () => {
    cy.go('back')
      .url().should('eq', 'http://localhost:3000/')
  });

  it('Should go forward when pressing forward button', () => {
    cy.go('forward')
      .url().should('eq', 'http://localhost:3000/asdf')
  });
});