import { Button } from '@mui/material'
import React from 'react'

export const Checkout = (props) => {
  const handleClick = () => {
    props.setView('orderConfirmation')
  }
  return (
    <div>
      In cart currently: {props.cart}
      
      <Button onClick={handleClick}> Order Now! </Button>
      
      </div>

  )
}
