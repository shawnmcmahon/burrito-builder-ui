import React, { Component } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor() {
    super() 
      this.state = {
        orders: []
      }
  }

  componentDidMount() {
    getOrders()
      .then(data => this.setState({orders: data.orders}))
      .catch(err => console.error('Error fetching:', err));
  }

    updateOrders = (order) => {
      this.setState({orders: [order, ...this.state.orders]})
    }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm updateOrders={this.updateOrders} />
        </header>

        <Orders orders={this.state.orders}/>
      </main>
    );
  }
}


export default App;
