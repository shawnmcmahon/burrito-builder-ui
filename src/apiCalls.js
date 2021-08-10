import checkForError from './util'

export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => checkForError(response))
}

export const submitOrder = (data) => {
  fetch('http://localhost:3001/api/v1/orders' , {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => checkForError(response))
}