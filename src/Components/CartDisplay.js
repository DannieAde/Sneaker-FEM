import React from 'react'

const CartDisplay = ({ cartActive, cart, setCart, toggleCart }) => {

  const clearCart = () => {
    setCart({})
  }

  return (
    <div style={{visibility: cartActive ? 'visible' : 'hidden'}} className='cart-display'>
      <h2>Cart</h2>
      <img onClick={toggleCart} className='cart-close-icon' src='images/icon-close.svg' alt=''/>
      <div className="cart-details">
        {!cart.itemName ? 
          (<p className='empty-alert'>Cart is empty</p>) : 
          <div className='cart'>
            <div className='cart-item'>
              <img className='item-img' src="images/image-product-1-thumbnail.jpg" alt="" />
              <div className='item-info'>
                <h3>{cart.itemName}</h3>
                <p>${cart.itemCost} x {cart.itemCount} <strong>{cart.totalCost}</strong></p> 
              </div>
              <img onClick={clearCart} src="images/icon-delete.svg" alt="" />
            </div>

            <button className='checkout'>Checkout</button>
          </div>
          
        }
      </div>
    </div>
  )
}

export default CartDisplay