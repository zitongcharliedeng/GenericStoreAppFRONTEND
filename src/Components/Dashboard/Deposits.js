import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import axios from 'axios';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits(props) {
  const [totalSpent, setTotalSpent] = React.useState(0)
  React.useEffect(()=>{
    props.orders.map((order, index)=>{return(
    JSON.parse(order.list).map((item, index, list)=>{return(
      setTotalSpent(prevCount => prevCount + item.cost)
    )})
  )})
  },[props.orders])
  
  return (
    <React.Fragment>
      <Title>Total Money Spent</Title>
      <Typography component="p" variant="h5">
        £{totalSpent}
      </Typography>
      <Title>Total Club Points</Title>
      <Typography component="p" variant="h5">
        {totalSpent*100}
      </Typography>

      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Thank you for supporting our store.
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          About club points
        </Link>
      </div>
    </React.Fragment>
  );
}
