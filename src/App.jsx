import './App.css'
import ProductCard from './Components/ProductCard/ProductCard'
import PurchaseCart from './Components/PurchaseCart/PurchaseCart'

function App() {
  
  return (
    <>
      <div>
        <h1>Welcome to Our Shop</h1>
      </div>
      <div className="main-container">
        <ProductCard></ProductCard>
        <PurchaseCart></PurchaseCart>
      </div>
    </>
  )
}

export default App
