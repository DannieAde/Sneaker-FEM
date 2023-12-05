import React from 'react'
import CartDisplay from './CartDisplay'

const NavBar = ({ cartActive, toggleCart, cart, setCart, noOfProduct, toggleLeftNav }) => {
  return (
    <div className='navbar'>
      <div className='right-side'>
        <img onClick={toggleLeftNav} className='icon-menu' src='images/icon-menu.svg' alt=''/>
        <img className='logo' src="images/logo.svg" alt="" />
        <div className='navbar-links'>
          <a className='link' href="!#">Collections</a>
          <a className='link' href="!#">Men</a>
          <a className='link' href="!#">Women</a>
          <a className='link' href="!#">About</a>
          <a className='link' href="!#">Contact</a>
        </div>
      </div>
      <div className='left-side'>
        <div onClick={toggleCart} className='cart-icon-div'>
          <img className='cart-icon' src="images/icon-cart.svg" alt="" />
          {cart.itemName && <p className='cart-notification'>{noOfProduct}</p>}
        </div>
        <img className='avatar-image' src="images/image-avatar.png" alt="" />
      </div>

      <CartDisplay toggleCart={toggleCart} cartActive={cartActive} cart={cart} setCart={setCart} />
    </div>
  )
}

export default NavBar