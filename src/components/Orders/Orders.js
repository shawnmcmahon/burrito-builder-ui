import React from 'react';
import './Orders.css';

const Orders = props => {
  console.log('order props', props)
  const orderEls = props.orders.map((order, index) => {
    return (
      <div className="order" key={index}>
        <h3>{order.name}</h3>
        <ul className="ingredient-list" >
          {order.ingredients.map(ingredient => {
            return <li key={ingredient}>{ingredient}</li>
          })}
        </ul>
      </div>
    )
  });

  return (
    <section>
      { orderEls.length ? orderEls : <p>Something went wrong. Please try again later.</p> }
    </section>
  )
}

export default Orders;