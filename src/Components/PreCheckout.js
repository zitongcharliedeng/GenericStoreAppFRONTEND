import { Button } from '@mui/material'
import * as React from 'react'

export const PreCheckout = (props) => {
  const [totalCost, setTotalCost] = React.useState(0)

  const calculateTotal = () => {
    props.cart.map((cartItem)=>{
      setTotalCost(t => t + cartItem.cost)
      return(null)
    })
  }

  React.useEffect(calculateTotal, [props.cart])

  const receipt = props.cart.map((cartItem)=>{
    return( 
      <div>
        {cartItem.name} ({cartItem.quantity}), £{cartItem.cost.toFixed(2)}
      </div>
    )
  })

  const handleClick = () => {
    props.setView('checkout')
  }

  return (
    <div>
      In cart currently: 
      <br/>
      {receipt}
      <br/>
      Total: £{totalCost.toFixed(2)}
      <br/>
      <Button onClick={handleClick}> Place Order Here </Button>
    </div>

  )
}
