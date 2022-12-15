import React from 'react'

function Receipt(props) {
  return (
    <div>
      Receipt:
      Payment method: InStore
      Items to pickup: {props.cart}
    </div>
  )
}

export default Receipt  