import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {PaginationAnimated} from 'react-animated-pagination';
import ProductCard from './ProductCard/ProductCard.js';

const ProductGrid = (props) => {
  
  const searchCheck = (product) => {
    if ( ((props.searchBarValue.toLowerCase())) === (product.name.toLowerCase()) ) {
      return true
    }
    if ( (props.searchBarValue.toLowerCase()) === ('') ) {
      return true
    }
    return false
  }
  const productListAfterSearch = props.productList.filter(searchCheck)
  console.log(productListAfterSearch)

  const productGrid = () => {
    if (productListAfterSearch.length === 0) {
      return(
        <div>
          <h1>
            {`Sorry, we couldn't find search results for "${props.searchBarValue}".`}
          </h1>
          <br/>
          Maybe check your spaces in the search bar. Items are not case sensitive.
        </div>
      ) 
    } else {
      return(
          <PaginationAnimated
            class='flexContainer'
            style={{display: "inline-block", alignItems: "center"}}
            bottomNav={true}
            topNav={true}
            itemsOnPage={8}
            items={productListAfterSearch}
            entryProp="product"
            iterationKey="product.name"
            children={
              <ProductCard cart={props.cart} setCart={props.setCart} addFlash={props.addFlash} />
            }
          />
      )
    }
  }


  return (
    <div style={{marginLeft: "25ch", marginRight: "25ch"}}>
      {productGrid()}
    </div>
  );
} 

export default ProductGrid