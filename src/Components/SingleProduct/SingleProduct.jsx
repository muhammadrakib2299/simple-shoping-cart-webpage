import React from 'react'
import './SingleProduct.css';

const SingleProduct = ({product}) => {
    console.log(product.title)
    const {title, price, description,image} = product;
  return (
        <div>
            <div className='single-card'> 
                {/* product card image */}
                <img src={image} alt="" />

                {/* Product Card body */}
                <div className='product-card-body'>
                <h2>{title}</h2>
                <p>{description}</p>
                </div>

                {/* Product Card footer */}
                <div className='single-card-footer'>
                    <h3>Price: $ {price}</h3>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
  )
}

export default SingleProduct