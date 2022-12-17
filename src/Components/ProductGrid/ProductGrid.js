import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {PaginationAnimated} from 'react-animated-pagination';
import ProductCard from './ProductCard/ProductCard.js';

const ProductGrid = (props) => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const fruitProductList = props.allProductLists[0]


    const allGridItems = props.allProductLists.map((productList) => {
      return productList.map((product) => {
        if (props.searchBarValue === '') {
        return(      
          <Grid item xs={3} key={product.name}>
            <Item><ProductCard product={product} cart={props.cart} setCart={props.setCart} addFlash={props.addFlash}/></Item>
          </Grid>
        )
        }
        if (product.name.toLowerCase() === props.searchBarValue.toLowerCase()) {
          return(
            <Grid item xs={3} key={product.name}>
              <Item><ProductCard product={product} cart={props.cart} setCart={props.setCart} addFlash={props.addFlash}/></Item>
            </Grid>
          )
        }
        return(null)
      })
    })


    const fruitGridItems = props.allProductLists[0].map((product) => {
      if (props.searchBarValue === '') {
        return(      
          <Grid item xs={3} key={product.name}>
            <Item><ProductCard product={product} cart={props.cart} setCart={props.setCart} addFlash={props.addFlash}/></Item>
          </Grid>
        )
      }
      if (product.name.toLowerCase() === props.searchBarValue.toLowerCase()) {
        return(
          <Grid item xs={3} key={product.name}>
            <Item><ProductCard product={product} cart={props.cart} setCart={props.setCart} addFlash={props.addFlash}/></Item>
          </Grid>
        )
      }
      return(null)
    })


    const vegGridItems = props.allProductLists[1].map((product) => {
      if (props.searchBarValue === '') {
        return(      
          <Grid item xs={3} key={product.name}>
            <Item><ProductCard product={product} cart={props.cart} setCart={props.setCart} addFlash={props.addFlash}/></Item>
          </Grid>
        )
      }
      if (product.name.toLowerCase() === props.searchBarValue.toLowerCase()) {
        return(
          <Grid item xs={3} key={product.name}>
            <Item><ProductCard product={product} cart={props.cart} setCart={props.setCart} addFlash={props.addFlash}/></Item>
          </Grid>
        )
      }
      return(null)
    })


    const mysteryGridItems = props.allProductLists[2].map((product) => {
      if (props.searchBarValue === '') {
        return(      
          <Grid item xs={3} key={product.name}>
            <Item><ProductCard product={product} cart={props.cart} setCart={props.setCart} addFlash={props.addFlash}/></Item>
          </Grid>
        )
      }
      if (product.name.toLowerCase() === props.searchBarValue.toLowerCase()) {
        return(
          <Grid item xs={3} key={product.name}>
            <Item><ProductCard product={product} cart={props.cart} setCart={props.setCart} addFlash={props.addFlash}/></Item>
          </Grid>
        )
      }
      return(null)
    })



  return (
    <div style={{marginLeft: "40ch", marginRight: "40ch", marginUp: "3ch", marginDown: "3ch"}}>
      <PaginationAnimated
        class='flexContainer'
        style={{display: "inline-block"}}
        bottomNav={true}
        topNav={true}
        itemsOnPage={4}
        items={fruitProductList}
        entryProp="product"
        iterationKey="product.name"
        children={
          <ProductCard cart={props.cart} setCart={props.setCart} addFlash={props.addFlash} />
        }
      />
    </div>            
  );
} 

export default ProductGrid