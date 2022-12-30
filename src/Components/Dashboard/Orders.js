import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

export default function Orders(props) {
    // Generate Order Data
  const [rows, setRows] = React.useState([])

  function createData(time, name, quantity, shipTo, paymentMethod, amount) {
    return {time, name,  quantity, shipTo, paymentMethod, amount };
  }

  React.useEffect(()=>{
    props.orders.map((order, index)=>{const time = order.created_at; return(
          JSON.parse(order.list).map((item, index, order)=>{console.log(2, order); return(
            setRows(r=>
              [...r, createData(time, item.name, item.quantity, 'Pick up at store', 'Card', item.cost)]
            ) 
          )})
      )})
  }, [props.orders])

  

  function preventDefault(event) {
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>  
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...rows].reverse().map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`£${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
