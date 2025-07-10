import React, { useEffect, useState } from 'react'
import './ProductCard.css'
import SingleProduct from '../SingleProduct/SingleProduct';

const ProductCard = () => {

  const [products, setProducts] = useState([]);

  // load data from API
  useEffect(()=>{
    fetch('../../../public/faceData.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])


  return (
    <div className='product-card-container'>
        {
          products.map(product => <SingleProduct  key={product.id} product={product}></SingleProduct>)
        }
    </div>
  )
}

export default ProductCard