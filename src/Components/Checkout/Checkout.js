import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import axios from 'axios';

export default function Checkout({cart, setCart, sessionToken}) {
  const [orderNumber, setOrderNumber] = React.useState();
  const [activeStep, setActiveStep] = React.useState(0);
  const [addresses, setAddresses] = React.useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });
  const [payments, setPayments] = React.useState({
    cardName: '',
    cvv: '',
    cardNumber: '',
    expDate: '',
  });

  function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
        TheEverythingStore
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

  const steps = ['Shipping address', 'Payment details', 'Review your order'];

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm addresses={addresses} setAddresses={setAddresses}/>;
      case 1:
        return <PaymentForm payments={payments} setPayments={setPayments}/>;
      case 2:
        return <Review cart={cart} addresses={addresses} payments={payments}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  const theme = createTheme();

  const handleNext = async (event) => {
    setActiveStep(activeStep + 1);
    if (event.target.textContent === 'Place order') {await postOrder()}
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const postOrder = async () => {
    try {
      const response = await axios.post("/orders", {order: {list: JSON.stringify(cart)}}, {headers: {sessionToken: sessionToken}})
      console.log(response.data)
      setOrderNumber(response.data.orderNumber)
    } catch (error) {
      console.log(error)
    }
    setCart([])
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #{orderNumber}. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}