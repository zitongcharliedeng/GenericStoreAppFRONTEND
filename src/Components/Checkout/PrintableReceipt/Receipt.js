import React from 'react'

const Receipt = React.forwardRef((props, ref) => {
  const receipt = props.cart.map((cartItem)=>{
    return( 
      <div>
        - {cartItem.name} ({cartItem.quantity}), £{cartItem.cost}
      </div>
    )
  })
  console.log(props.cart)
  return (
    <div ref={ref}>
      <div>
        <h1>Receipt (Order #{props.orderNumber}):</h1>
        {receipt}
      </div>
    </div>
  )
})

export default Receipt

