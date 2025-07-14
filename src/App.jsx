import { useState } from 'react'
import './App.css'
import ProductCard from './Components/ProductCard/ProductCard'
import PurchaseCart from './Components/PurchaseCart/PurchaseCart'

function App() {

  const [cart, setCart] = useState([]);

  const handlePurchaseCart = (product) =>{
    setCart([...cart, product]);
  }
  
  return (
    <>
      <div className='welcome-text'>
        <h1>Welcome to Our Shop</h1>
      </div>
      <div className="main-container">
        <ProductCard handlePurchaseCart={handlePurchaseCart}></ProductCard>
        <PurchaseCart cart={cart}></PurchaseCart>
      </div>
    </>
  )
}

export default App
