import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';

function ShoppingCart(props) {
  const handleClick = () => {
    props.setView('checkout')
  }

  return (
    <IconButton onClick={handleClick}> 
      <ShoppingCartIcon />
    </IconButton>
  )
}

export default ShoppingCart 