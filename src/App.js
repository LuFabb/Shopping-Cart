import { Component } from 'react';
import Products from './components/Products'

class App extends Component {
  state = {
    products: [
      { name: 'Tomatoes', price: 1500, img: '/products/tomatoes.jpg' },
      { name: 'Peas', price: 2500, img: '/products/peas.jpg' },
      { name: 'Lettuce', price: 500, img: '/products/lettuce.jpg' },
    ]
  }
  render() {
    return(
      <div>
        <Products 
        addToCart={() => console.log('does nothing')}
        products={this.state.products}
        />
      </div>
    )
  }
}

export default App;
