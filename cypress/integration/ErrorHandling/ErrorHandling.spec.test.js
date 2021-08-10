describe('Error handling', () => {

  it('Should notify the user if the app has an error 400', () => {
    cy.intercept({
      method: 'GET', 
      url: 'http://localhost:3001/api/v1/orders'
    }, 
    {
      fixture: 'orders.json',
      statusCode: 400 
    })
    cy.visit('http://localhost:3000/')
    cy.get('p').should('contain', 'Something went wrong. Please try again later.')
  })

  it('Should notify the user if the app has an error 401', () => {
    cy.intercept({
      method: 'GET', 
      url: 'http://localhost:3001/api/v1/orders'
    }, 
    {
      fixture: 'orders.json',
      statusCode: 401 
    })
    cy.visit('http://localhost:3000/')
    cy.get('p').should('contain', 'Something went wrong. Please try again later.')
  })
  it('Should notify the user if the app has an error 404', () => {
    cy.intercept({
      method: 'GET', 
      url: 'http://localhost:3001/api/v1/orders'
    }, 
    {
      fixture: 'orders.json',
      statusCode: 404 
    })
    cy.visit('http://localhost:3000/')
    cy.get('p').should('contain', 'Something went wrong. Please try again later.')
  })
  it('Should notify the user if the app has an error 500', () => {
    cy.intercept({
      method: 'GET', 
      url: 'http://localhost:3001/api/v1/orders'
    }, 
    {
      fixture: 'orders.json',
      statusCode: 500 
    })
    cy.visit('http://localhost:3000/')
    cy.get('p').should('contain', 'Something went wrong. Please try again later.')
  })
})