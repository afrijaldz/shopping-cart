import React from 'react'
import Navbar from './Navbar'
import Product from './Product'
import ShoppingCart from './ShoppingCart'

class App extends React.Component {
  state = {
    isLoading: false,
    cartItems: [],
    products: [],
  }

  handleAddToCart = product => {
    let { cartItems } = this.state

    const alreadyExists = cartItems.some(item => item.product.slug === product.slug)

    if (alreadyExists) {
      cartItems = cartItems.map(item => {
        if (item.product.slug === product.slug) {
          item.quantity = item.quantity + 1
        }

        return item
      })
    } else {
      cartItems.push({
        product,
        quantity: 1,
      })
    }

    this.setState({ cartItems })
  }

  handleRemoveItemFromCart = currentItem => {
    let { cartItems } = this.state
    cartItems = cartItems
      .map(cartItem => {
        if (cartItem.product.id === currentItem.product.id) {
          cartItem.quantity = cartItem.quantity - 1
        }

        return cartItems
      })
      .filter(cartItem => cartItem.quantity > 0)

    this.setState({ cartItems })
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    fetch('https://product-list.glitch.me/')
      .then(res => res.json())
      .then(products => {
        this.setState({
          products: products,
          isLoading: false,
        })
      })
  }

  render() {
    const { isLoading, products, cartItems } = this.state

    return (
      <div className="container">
        <Navbar />
        <div className="columns">
          <div className="column is-two-thirds">
            <div>
              <h3 className="title is-4">Our Products</h3>
              <div className="columns">
                {isLoading
                  ? 'Loading...'
                  : products.map((product, i) => (
                    <Product
                      key={i}
                      product={product}
                      handleAddToCart={this.handleAddToCart}
                    />
                  ))
                }
              </div>
            </div>
          </div>
          <ShoppingCart
            cartItems={cartItems}
            handleRemoveItemFromCart={this.handleRemoveItemFromCart}
          />
        </div>
      </div>
    )
  }
}

export default App