import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CounterAndAddButton from './CounterAndAddButton';

export default function ProductPreviewCard(props) {
  return (
    <Card sx={{ width: "100%", height: "1",}}>
      <CardMedia
        sx={{ width: "100%", height: "50%"}}
        component="img"
        alt="green iguana"
        image="https://wallpapercave.com/wp/wp3492732.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      
      <CardActions>
        <CounterAndAddButton name={props.name} cart={props.cart} setCart={props.setCart} addFlash={props.addFlash}/>
      </CardActions>
    </Card>
  );
}