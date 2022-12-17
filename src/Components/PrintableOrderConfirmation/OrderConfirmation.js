import React from 'react'
import GoogleMap from './GoogleMap'
import Receipt from './Receipt'

const OrderConfirmation = React.forwardRef((props, ref) => {

  const pickupLocation = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }
  return (
    <div ref={ref} className='pickUpDetails'>
      <h1>Item(s) ready for pickup :)</h1>
      <div className='info' style={{display: 'flex'}}>
        <GoogleMap location={pickupLocation} zoomLevel={17} style={{display: 'flex'}} />
        <Receipt style={{display: 'flex'}} cart={props.cart}/>
      </div>
    </div>
  )
})

export default OrderConfirmation

