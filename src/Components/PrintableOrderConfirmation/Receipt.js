import React from 'react'

function Receipt(props) {
  const receipt = props.cart.map((cartItem)=>{
    return( 
      <div>
        {cartItem.name} ({cartItem.quantity}), £{cartItem.cost}
      </div>
    )
  })
  return (
    <div>
      Receipt:
      <br/>
      Payment method: InStore, Address:
      <br/>
      Items to pickup: {receipt}
    </div>
  )
}

export default Receipt  