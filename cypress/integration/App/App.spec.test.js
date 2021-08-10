describe('App', () => {
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

  it('Should contain a header', () => {
    cy.get('header')
    cy.get('h1').should('contain', 'Burrito Builder')
  })


  it('Should contain nothing selected upon load', () => {
    cy.get('p').should('contain', 'Order: Nothing selected')
  })

  it('Should contain three orders upon load', () => {
    cy.get('div')
      .find('div')
      .should(($div) => {
        expect($div).to.have.length(3)
      })
    cy.get('div').first()
      .should('contain', 'Shawn')
      .and('contain', "beans")
    cy.get('div')
      .should('contain', 'Patrick')
      .and('contain', 'steak')
      .and('contain', 'cilantro')
    cy.get('div').last()
      .should('contain', 'McMahon')
      .and('contain', 'carnitas')
      .and('contain', 'hot sauce')    
  })




})
