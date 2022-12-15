import './App.css';
import Header from './AppCOMPONENTS/HeaderCOMPONENTS/Header';
import ProductGrid from './ProductGrid/ProductGrid.js'
import { useState } from 'react';
import { Checkout } from './AppCOMPONENTS/Checkout';
import OrderConfirmation from './OrderConfirmationCOMPONENTS/OrderConfirmation';
import { Alert } from '@mui/material';

function App() {
  const [productList, setProductList] = useState([{name: "cat"},{name: "dog"}])
  const [cart, setCart] = useState([])
  const [view, setView] = useState('home')
  const [flashes, setFlashes] = useState([])

  const deleteFlash = (e) => {
    console.log("hi")
    console.log(e.target.id)
    const flashesLocal = [...flashes]
    flashesLocal.splice((e.target.id)-1, 1) 
    setFlashes(flashesLocal)
  }

  const addFlash = (flashObject) => {
    const newFlash = (
      <Alert id={flashes.length+1} severity={flashObject.type} onClose={deleteFlash}>{flashObject.text}</Alert>
    )
    setFlashes([...flashes, newFlash])
  }

  const page = () => {
    switch(view) {
      case 'home':
        return <ProductGrid productList={productList} cart={cart} setCart={setCart} addFlash={addFlash} deleteFlash={addFlash}/>
      case 'checkout':
        return <Checkout cart={cart} setView={setView} addFlash={addFlash}/>
      case 'orderConfirmation':
        return <OrderConfirmation cart={cart} addFlash={addFlash}/>
      default:
        console.log("view undefined, view=", view)
    }
  }

  return (
    <div className="App">
      <Header setView={setView}/>
      {page()}
      {flashes}
    </div>
  );
}

export default App;
