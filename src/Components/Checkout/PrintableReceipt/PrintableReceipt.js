import * as React from 'react';
import { useReactToPrint } from 'react-to-print';
import Receipt from './Receipt';

const PrintableReceipt = ({cart, orderNumber}) => {
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div>
      <Receipt ref={componentRef} cart={cart} orderNumber={orderNumber}/>
      <br/>
      <button onClick={handlePrint}>Print Recipt</button>
    </div>
  )
}

export default PrintableReceipt