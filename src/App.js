import './App.css';
import Header from './Components/Header/Header';
import ProductGrid from './Components/ProductGrid/ProductGrid.js'
import React, { useState } from 'react';
import { PreCheckout } from './Components/PreCheckout';
import { Alert } from '@mui/material';
import PrintableOrderConfirmation from './Components/PrintableOrderConfirmation/PrintableOrderConfirmation';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Checkout from './Components/Checkout/Checkout';

function App() {
  const productList = [
    //fruits
    {name: "Apple", imageUrl: "https://t3.ftcdn.net/jpg/01/76/97/96/240_F_176979696_hqfioFYq7pX13dmiu9ENrpsHZy1yM3Dt.jpg", price: 7.39},
    {name: "Banana", imageUrl: "https://t3.ftcdn.net/jpg/01/74/93/80/240_F_174938002_zvgqpU18283OpwpHCA1hrfItZ76sMuMB.jpg", price: 22.22},
    {name: "Orange", imageUrl: "https://t3.ftcdn.net/jpg/00/56/01/00/240_F_56010077_UA98ADMw95rEB2hCuAlFOJkjdirrAAPV.jpg", price: 25.54},
    {name: "Pineapple", imageUrl: "https://t3.ftcdn.net/jpg/00/50/55/88/240_F_50558878_jgqtl3flPfK98Gcdto0R2vtcscCuCuUl.jpg", price: 67.45},
    {name: "Mango", imageUrl: "https://t4.ftcdn.net/jpg/02/09/54/53/240_F_209545315_9iFm7lXcpwkAhYsHTw0gOJGzF0OTPsrO.jpg", price: 5.34},
    {name: "Peach", imageUrl: "https://t4.ftcdn.net/jpg/00/84/46/77/240_F_84467783_4fRknXSuMiBrcI0uNVAc75NKjxJi1XHv.jpg", price: 68.23},
    {name: "Pear", imageUrl: "https://t3.ftcdn.net/jpg/00/42/34/30/240_F_42343029_y7q7yWDO1hrmuZuIcmRqoaeI4IcjecIT.jpg", price: 42.34} ,
    {name: "Strawberry", imageUrl: "https://t4.ftcdn.net/jpg/01/26/92/23/240_F_126922352_EmYCsPhTG1Dww3o2mnfb6Y3C4ex1u7Vz.jpg", price: 654.74},
    {name: "Potato", imageUrl: "https://t3.ftcdn.net/jpg/00/85/79/92/240_F_85799278_0BBGV9OAdQDTLnKwAPBCcg1J7QtiieJY.jpg", price: 6.26},
    {name: "Cucumber", imageUrl: "https://t4.ftcdn.net/jpg/01/12/84/47/240_F_112844774_6zjXJDtV6wPY9ReDOjv3coNm6lEI4vP0.jpg", price: 2.56},
    {name: "Tomato", imageUrl: "https://t4.ftcdn.net/jpg/02/32/98/31/240_F_232983161_9lmUyHKnWbLW0vQPvWCrp5R5DSpexhbx.jpg", price: 70.65},
    {name: "Carrot", imageUrl: "https://t3.ftcdn.net/jpg/01/88/50/62/240_F_188506264_8MMq2BHoDlfoBYHDxiYsYn1KGKbGT38S.jpg", price: 4.68},
    {name: "Onion", imageUrl: "https://t3.ftcdn.net/jpg/03/13/20/00/240_F_313200033_sZA9lTGfUrU1GLowavcGki8EOmUF6Ako.jpg", price: 765.43},
    {name: "Bell Pepper", imageUrl: "https://t4.ftcdn.net/jpg/02/52/47/13/240_F_252471388_wVl2FN6gbbpRyWrMkl1rh8mL3PR84w0r.jpg", price: 5.43},
    {name: "Broccoli", imageUrl: "https://t3.ftcdn.net/jpg/02/50/29/00/240_F_250290014_4snUMjCdfdy6Jeik0iftCRuNFUUb7rP1.jpg", price: 6.62},
    {name: "Mushroom", imageUrl: "https://t3.ftcdn.net/jpg/00/77/95/06/240_F_77950626_G8EzHrbcuuUfxhdJPxJhAgCOSukLeZ9k.jpg", price: 1.65},
    {name: "Trash", imageUrl: "https://t4.ftcdn.net/jpg/02/50/84/53/240_F_250845383_a58dc6o8zpiWeBbw6dAf8uwAJp6qrKIH.jpg", price: 55.57},
    {name: "Jeffery", imageUrl: "https://t3.ftcdn.net/jpg/05/46/73/38/240_F_546733878_Qm9mdi6UHXBKtDpooaZ6ZlBmXCeDeLzI.jpg", price: 1.01},
    {name: "Box", imageUrl: "https://t3.ftcdn.net/jpg/01/14/59/70/240_F_114597045_9L1cTFXqcDybgEn0AsAlWamtB1d8ZtTY.jpg", price: 868.23},
    {name: "The Entity", imageUrl: "https://t4.ftcdn.net/jpg/04/45/35/63/240_F_445356359_GDBwFjSZS5RJwfmspxVeABuVmklUwEnk.jpg", price: 0.02},
    {name: "Balloon", imageUrl: "https://t4.ftcdn.net/jpg/01/53/92/05/240_F_153920536_rbo4scM4wH3ISoA8hAn7VZ822EA9xyAe.jpg", price: 0.10},
    {name: "Toilet Paper", imageUrl: "https://t4.ftcdn.net/jpg/02/12/47/35/240_F_212473534_2PfO6hxGixEWOY2EcM7jwA32uZTY8MB1.jpg", price: 6.54},
    {name: "Water", imageUrl: "https://t3.ftcdn.net/jpg/03/02/41/46/240_F_302414671_wSnHnoxbsVGwUPan6NXHvFqghTjffHcR.jpg", price: 204.34},
    {name: "Air", imageUrl: "https://t3.ftcdn.net/jpg/02/85/92/08/240_F_285920838_aakk0JOMG6kSRvN9aqePd3XFddAILIYl.jpg", price: 24.54},
  ]

  const [cart, setCart] = useState([])
  const [view, setView] = useState('productsAll')
  const [flashes, setFlashes] = useState([])
  const [searchBarValue, setSearchBarValue] = useState('')

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
      case 'productsAll':
        return <ProductGrid productList={productList} cart={cart} setCart={setCart} addFlash={addFlash} deleteFlash={addFlash} searchBarValue={searchBarValue} setSearchBarValue={setSearchBarValue}/>
      case 'preCheckout':
        return <PreCheckout cart={cart} setView={setView} addFlash={addFlash}/>
      case 'orderConfirmation':
        return <PrintableOrderConfirmation cart={cart} addFlash={addFlash}/>
      case 'signIn':
        return <SignIn cart={cart} addFlash={addFlash}/>
      case 'signUp':
        return <SignUp cart={cart} addFlash={addFlash}/>
      case 'checkout':
        return <Checkout cart={cart} addFlash={addFlash}/>
      default:
        console.log("view undefined, view=", view)
    }
  }

  React.useEffect(() => {
    setFlashes([])
  }, [view])

  return (
    <div className="App">
      <Header setView={setView} searchBarValue={searchBarValue} setSearchBarValue={setSearchBarValue}/>
      {flashes}
      {page()}
    </div>
  );
}

export default App;
