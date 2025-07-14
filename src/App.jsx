import { useState } from 'react'
import './App.css'
import ProductCard from './Components/ProductCard/ProductCard'
import PurchaseCart from './Components/PurchaseCart/PurchaseCart'

function App() {

  const [cart, setCart] = useState([]);

  // Handle Prucash button with this function
  const handlePurchaseCart = (product) =>{
    const isExist = cart.find(item => item.id === product.id);
    if(!isExist){
      setCart([...cart, product]);
    }
    else{
      alert("Item all ready Exist in Purchase Cart.")
    }
  }

  // Delete pruchase item from cart
  const handleDeleteFromPurchase = (pid) =>{
    const newCart = cart.filter(item => item.id != pid);
    setCart(newCart);
  }
  
  return (
    <>
      <div className='welcome-text'>
        <h1>Welcome to Our Shop</h1>
      </div>
      <div className="main-container">
        <ProductCard handlePurchaseCart={handlePurchaseCart}></ProductCard>
        <PurchaseCart cart={cart} handleDeleteFromPurchase={handleDeleteFromPurchase}></PurchaseCart>
      </div>
    </>
  )
}

export default App
