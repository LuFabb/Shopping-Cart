import { Component } from "react";
import Logo from './Logo'
import Cart from './Cart'

const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '0 50px',
    boxShadow: '0 2px 3px rgb(0, 0, 0, 0.1)'
  }
}

class Navbar extends Component {
  render() {
    const { cart } = this.props
    return(
      <nav style={styles.navbar}>
        <Logo />
        <Cart cart={cart}/>
      </nav>
    )
  }
}

export default Navbar