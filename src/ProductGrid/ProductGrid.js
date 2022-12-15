import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard/ProductCard';

export default function ProductGrid(props) {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


    const gridItems = props.productList.map((product) => {return(
     <Grid item xs={3} key={product.name}>
        <Item><ProductCard name={product.name} cart={props.cart} setCart={props.setCart} addFlash={props.addFlash}/></Item>
      </Grid>
    )})
    

  return (
    <Box sx={{ flexGrow: 1, paddingLeft: "10%", paddingRight: "10%", paddingTop: "2%" }}>
      <Grid container spacing={2}>
        {gridItems}
      </Grid>
    </Box>
  );
} 