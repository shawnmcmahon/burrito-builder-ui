import React, { Component } from 'react';
import Orders from '../Orders/Orders'
import { submitOrder } from '../../apiCalls';

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ingredients: [],
      possibleIngredients: ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream']
    };
  }


  handleSubmit = e => {
    e.preventDefault();
    const order = <Orders 
                      name={this.state.name}
                      ingredients={this.state.ingredients}
                      />
    submitOrder(order)
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  createIngredientButtons = () => {
    const ingredientButtons = this.state.possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} id={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });
    return ingredientButtons;
  }

  handleIngredientChange = (event) => {
    event.preventDefault()
    let ingredient = event.target.id
    console.log('ingredient', ingredient)
    if (!this.state.ingredients.includes(event.target.id)) {
      this.setState({ingredients: [ingredient, ...this.state.ingredients]})
    } else {
    const burritoWithoutIngredient = this.state.ingredients.filter(currentIngredient => currentIngredient !== ingredient)
    console.log(burritoWithoutIngredient)
    this.setState({ingredients: burritoWithoutIngredient})
  }
}

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        {this.createIngredientButtons()}

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
