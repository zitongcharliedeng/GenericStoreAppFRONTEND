import * as React from 'react';
import { useReactToPrint } from 'react-to-print';
import OrderConfirmation from './OrderConfirmation';

const PrintableOrderConfirmation = (props) => {
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div>
      <OrderConfirmation ref={componentRef} cart={props.cart} addFlash={props.addFlash}/>
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  )
}

export default PrintableOrderConfirmation