import checkForError from './util'

export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => checkForError(response))
}

export const submitOrder = (data) => {
  console.log('data in post', data)
  fetch('http://localhost:3001/api/v1/orders' , {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      name: data.name, 
      ingredients: data.ingredients
    })
  })
  .then(response => checkForError(response))
}