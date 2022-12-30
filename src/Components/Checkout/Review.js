import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

export default function Review({cart, addresses, payments}) {

  const [totalCost, setTotalCost] = React.useState(0)

  const calculateTotal = () => {
    cart.map((cartItem)=>{
      setTotalCost(t => t + cartItem.cost)
      return(null)
    })
  }

  React.useEffect(calculateTotal, [cart])

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((product, i) => (
          <ListItem key={i} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.quantity} />
            <Typography variant="body2">{`£${product.cost}`} </Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            £{totalCost}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            <Grid container>
              {Object.keys(addresses).map((k) => (
                <React.Fragment key={k}>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{k}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{addresses[k]}</Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {Object.keys(payments).map((k) => (
              <React.Fragment key={k}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{k}: </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payments[k]}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}