import { Component } from 'react';
import Products from './components/Products'
import Layout from './components/Layout'
import Title from './components/Title'

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
        <Layout>
          <Title />
          <Products 
          addToCart={() => console.log('does nothing')}
          products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
