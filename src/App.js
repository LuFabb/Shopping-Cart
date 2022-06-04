import { Component } from 'react';
import Products from './components/Products'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component {
  state = {
    products: [
      { name: 'Tomatoes', price: 1500, img: '/products/tomatoes.jpg' },
      { name: 'Peas', price: 2500, img: '/products/peas.jpg' },
      { name: 'Lettuce', price: 500, img: '/products/lettuce.jpg' },
    ],
    cart: [
      //{ name: 'Tomatoes', price: 1500, img: '/products/tomatoes.jpg', quantity: 1 },
    ],
  }

  addToCart = (product) => {
   const { cart } = this.state
   if (cart.find(x => x.name === product.name)) {
     const newCart = cart.map(x => x.name === product.name
     ? ({
       ...x,
       quantity: x.quantity + 1
     })
     : x)
     return  this.setState({ cart: newCart })
   }
   return this.setState({
     cart: this.state.cart.concat({
       ...product,
       quantity: 1,
     })
   })
  }

  render() {
    console.log(this.state.cart)
    return(
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Products 
          addToCart={this.addToCart}
          products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
