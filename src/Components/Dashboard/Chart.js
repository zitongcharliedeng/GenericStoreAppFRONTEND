import * as React from 'react';
import {XAxis, YAxis, ResponsiveContainer, CartesianGrid, BarChart, Legend, Bar } from 'recharts';
import Title from './Title';
import { Tooltip } from '@mui/material';

export default function Chart(props) {
  // Generate Sales Data
  const [totalSpent, setTotalSpent] = React.useState(0)

  React.useEffect(()=>{
    props.orders.map((order, index)=>{return(
    JSON.parse(order.list).map((item, index, list)=>{return(
      setTotalSpent(prevCount => prevCount + item.cost)
    )})
  )})
  },[props.orders])
  console.log(totalSpent)

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <BarChart width={730} height={250} data={[{"name": "This month","  Money Spent / £": totalSpent}]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="  Money Spent / £" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
