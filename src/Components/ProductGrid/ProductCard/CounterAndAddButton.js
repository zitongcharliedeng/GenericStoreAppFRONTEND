import { AddBox, IndeterminateCheckBox } from '@mui/icons-material';
import { Button, IconButton, TextField } from '@mui/material';
import React from 'react'

const CounterAndAddButton = (props) => {

  const [num, setNum] = React.useState(1);

  const handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if ((e.target.value === "" || regex.test(e.target.value)) && (e.target.value !== 0) ) {
      setNum(e.target.value);
    }
  };

  const handleMinus = () => {
    if (num === 1) {
      return
    } else {
      setNum(num-1)
    }
  };

  const handlePlus = () => {
    setNum(num+1)
  };

  const handleAdd = () => {
    const oldQuantity = 0 // change to show real oldQuantity later
    props.setCart([...(props.cart), {name: props.product.name, quantity: (oldQuantity + num), cost: (props.product.price)*num}])
    props.addFlash({type: 'success', text: `${props.product.name} (${num}) added to cart!`})
  };

  return (
    <>  
      <div className='counter' style={{border: "thick solid grey", borderRadius: "1ch"}}>
        
        <IconButton size="large" onClick={handleMinus}>
          <IndeterminateCheckBox fontSize="inherit"/>
        </IconButton>

        <TextField
          sx={{maxWidth: "7ch"}}
          type="text"
          id="outlined-basic"
          variant="outlined"
          onChange={(e) => handleChange(e)}
          value={num}
          inputProps={{ maxLength: 3 }}
        />

        <IconButton size="large" onClick={handlePlus}>
          <AddBox fontSize="inherit"/> 
        </IconButton>
        
      </div>

      <div className='addButton' style={{marginLeft: 'auto', marginRight: '0'}} >
        <Button size="large" onClick={handleAdd}>
          Add to cart
          <br/> 
          (£{(props.product.price*num).toFixed(2)})
        </Button>
      </div>
    </>
     
    
  )
}

export default CounterAndAddButton