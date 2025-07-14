import React from 'react'
import './Purchase.css';

const PurchaseCart = ({cart}) => {
  return (
    <div className='cart-container'>
        <h1>Purchase Cart</h1>
        <hr />

        <div className='purchase-item-container'>
          {
            cart.map(item => (
            <div className='cart-title'>
              <h5>Name: {item.title.slice(0, 15)}</h5>
              <h5>Price: $ {item.price}</h5>
            </div>
            ))
          }
        </div>

    </div>
  )
}

export default PurchaseCart