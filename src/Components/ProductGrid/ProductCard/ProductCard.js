import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CounterAndAddButton from './CounterAndAddButton';

const ProductCard = ({product, cart, setCart, addFlash}) => {
  if (product === null) {return}

  return (
    <Card sx={{width: "35ch", height: "40ch"}}>
      <CardMedia
        sx={{width: "100%", height: "50%", objectFit: "scale-down", marginLeft: "0%"}}
        component="img"
        alt={product.name}
        image={product.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <em>{product.name}</em>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      
      <CardActions>
        <CounterAndAddButton product={product} cart={cart} setCart={setCart} addFlash={addFlash}/>
      </CardActions>
    </Card>
  );
}

export default ProductCard