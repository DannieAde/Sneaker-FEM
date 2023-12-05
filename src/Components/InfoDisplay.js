import React from 'react'

const InfoDisplay = ({ noOfProduct, increaseFn, decreaseFn, setCart }) => {

  const addToCart = () =>{
    setCart({
      itemName: 'Fall Limited Edition Sneakers',
      itemCount: noOfProduct,
      itemCost: 125,
      totalCost: '$' + (125 * noOfProduct)
    })
  }

  return (
    <div className='info-display'>
      <h4>SNEAKER COMPANY</h4>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber 
      outer sole, they'll withstand everything the weather can offer.</p>
      <div className='price-div'>
        <div className="price-tag">
          <h2>$125.00</h2>
          <p>50%</p>
        </div>
        <p className='former-price'>$250.00</p>
      </div>
      <div className="button-fns">
        <div className='toggle-amount'>
          <img className='decrease-button' onClick={decreaseFn} src='images/icon-minus.svg' alt=''/>
          <p>{noOfProduct}</p>
          <img className='increase-button' onClick={increaseFn} src='images/icon-plus.svg' alt=''/>
        </div>
        <div className="add-to-cart">
          <button disabled={noOfProduct > 0 ? false : true} onClick={addToCart}><img src='images/icon-cart.svg' alt=''></img>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default InfoDisplay