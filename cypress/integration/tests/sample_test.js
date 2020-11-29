describe('My First Test', () => {
  it('Visit site genshin V4', () => {
    cy.visit('http://localhost:3000/')

    cy.get('.logo').should('exist')
  })
})