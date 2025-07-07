import React from 'react'
import './ProductCard.css'

const ProductCard = () => {
  return (
    <div className='product-card-container'>
      <div className='single-card'> 
            {/* product card image */}
            <img src="https://i.ibb.co/j9kKTRjr/classic-t-shirt-men.jpg" alt="" />
            {/* Product Card body */}
            <div className='product-card-body'>
              <h2>Classic Cotton T-Shirt</h2>
              <p>Experience all-day comfort with our Classic Cotton T-Shirt, crafted from premium breathable cotton. 
              Designed with a relaxed fit, this versatile piece is perfect for layering or wearing solo in any casual setting. 
              Available in multiple colors to suit every style.</p>
             </div>

            {/* Product Card footer */}
            <div className='single-card-footer'>
            <h3>Price: $150</h3>
            <button>Add to Cart</button>
            </div>
      </div>
    </div>
  )
}

export default ProductCard