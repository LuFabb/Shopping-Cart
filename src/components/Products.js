import { Component } from "react";
import Product from './Product'

class Products extends Component {
  render() {
    const { products, addToCart } = this.props

    return(
      <div>
        {products.map(product => 
          <Product
            addToCart={addToCart}
            key={product.name}
            product={product}
          />)}
      </div>
    )
  }
}

export default Products