import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';

// componenets 👉
import './components/custom/css/style.css';
import Header from './components/Header/Header';
import Check_out from './components/Check_out/Check_out';
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';
import Orders from './components/Orders & Order/Orders';
import { auth } from './components/Firebase/firebase';
import { useStateValue } from './components/State_provider/State_provider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

function App() {
  const [{ }, dispatch] = useStateValue();

  const promise = loadStripe(
    'pk_test_51NOv5GDeBw6wvfnK4fQ9iA4qMReqny5x131whKYRTofRZWCGr9My2I2EFV3nk6iDFnaygrwHxrzeB8Q4TVtHj4Bh00Fd1OpctI'
  );
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
          dispatch({
            type: 'SET_USER',
            user: null,
          });
      }
    });
  }, []);
  
  return (
    <Router>
      <div className="App">       
        <Routes>
          <Route path="/payment" element={
          <><Header /> 
            <Elements stripe={promise}>
              <Payment />
            </Elements> </>} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<><Header /> <Orders /></>} />
          <Route path="/check_out" element={<><Header /> <Check_out /></>} />
          <Route path="/" element={<><Header /> <Banner /></>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;