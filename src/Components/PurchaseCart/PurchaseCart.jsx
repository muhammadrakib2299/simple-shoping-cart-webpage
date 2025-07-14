import React from 'react'
import './Purchase.css';

const PurchaseCart = ({cart, handleDeleteFromPurchase}) => {
  return (
    <div className='cart-container'>
        <h1>Purchase Cart</h1>
        <hr />

        <div className='purchase-item-container'>
          <div className=''>
          {
            cart.map((item, index) => (
                <div className='cart-title'>
                  <p>{index+1}</p>
                  <h5>Name: {item.title.slice(0, 15)}</h5>
                  <h5>Price: $ {item.price}</h5>
                  <button onClick={() => handleDeleteFromPurchase(item.id)} className='cart-delete-btn'>Delete</button>
                </div>
            ))
          }
          </div>

        </div>
    </div>
  )
}

export default PurchaseCart