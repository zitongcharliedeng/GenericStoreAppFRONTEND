import { Button, Container, Paper } from '@mui/material'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const PreCheckout = ({cart, setView}) => {
  const [totalCost, setTotalCost] = React.useState(0)

  const calculateTotal = () => {
    cart.map((cartItem)=>{
      setTotalCost(t => t + cartItem.cost)
      return(null)
    })
  }

  React.useEffect(calculateTotal, [cart])

  const handleClick = () => {
    setView('checkout')
  }

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            In cart currently:
          </Typography>
          <List disablePadding>
            {cart.map((product) => (
              <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                <ListItemText primary={product.name} secondary={product.quantity} />
                <Typography variant="body2">{`£${product.cost}`} </Typography>
              </ListItem>
            ))}

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                £{totalCost.toFixed(2)}
              </Typography>
            </ListItem>
          </List>
          <Button variant="contained" onClick={handleClick}> Place Order Here </Button>
        </React.Fragment>
      </Paper>
    </Container>
  );
}

