describe('Order Form', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET', 
      url: 'http://localhost:3001/api/v1/orders'
    }, 
    {
      fixture: 'orders.json',
      statusCode: 200 
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should contain a text input for the name on the form', () => {
    cy.get('form')
    cy.get('input').should('have.length', 1)
  })

  it('Should contain 13 buttons on the form (12 for ingredients and 1 to sumbit)', () => {
    cy.get('form')
      .find('button')
      .should(($button) => {
        expect($button).to.have.length(13)
      })
  }) 

  it('Should have the proper button names for all ingredients and submit order', () => {
    cy.get('#beans')
      .should('contain', 'beans')
    cy.get('#steak')
      .should('contain', 'steak')
    cy.get('#carnitas')
      .should('contain', 'carnitas')
    cy.get('#sofritas')
      .should('contain', 'sofritas')
      cy.get('#lettuce')
      .should('contain', 'lettuce')
    cy.get('button')
      .should('contain', 'queso fresco')
    cy.get('button')
      .should('contain', 'pico de gallo')
    cy.get('button')
      .should('contain', 'hot sauce')
      cy.get('#guacamole')
      .should('contain', 'guacamole')
    cy.get('#jalapenos')
      .should('contain', 'jalapenos')
    cy.get('#cilantro')
      .should('contain', 'cilantro')
    cy.get('button')
      .should('contain', 'sour cream')
    cy.get('button')
      .should('contain', 'Submit Order')
  })

  it('Submitted order should appear on screen', () => {
    cy.get('form')
    cy.get('input').type('Mike')
    cy.get('#sofritas').click()
    cy.get('#cilantro').click()
    cy.get('p').should('contain', 'cilantro', 'sofritas')
    cy.get('#submit').click()
    cy.get('div').first()
      .should('contain', 'Mike')
      .and('contain', "cilantro")
      .and('contain', "sofritas")
  })
    


})