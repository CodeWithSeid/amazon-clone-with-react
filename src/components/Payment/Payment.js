import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import Check_out_product from '../Check_out_product/Check_out_product';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../State_provider/State_provider';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { db } from '../Firebase/firebase';
import axios from '../axios/axios';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const navigate = useNavigate();

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios.post(`/payments/create?total=${getBasketTotal(basket) * 100}`
      );
      setClientSecret(response.data.clientSecret);
    };
    try {
      getClientSecret();
    } catch (error) {
      console.log(error.message)
    }
   
  }, [basket]);

  console.log('THE SECRET: ', clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!clientSecret) {
      return;
    }

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    }).then(({ paymentIntent }) => {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
    });

    setSucceeded(true);
    setError(null);
    setProcessing(false);

    dispatch({
      type: 'EMPTY_BASKET',
    });

    navigate('/orders');
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  return (
    <div className="Payment">
      <div className="payment_container">
        <h1 className='payment_head'>Checkout - <Link to="/check_out" className='payment_link'>{basket?.length} items</Link></h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3 className='payment_name'>Delivery Address</h3>
          </div>
          <div className="payment_location">
            <p>Transportation: Car</p>
            <p>Website : <Link to='/' className='payment_link'>Marketing-world-wide-website.web.app</Link></p>
            <p>Address : Ethiopia , Adiss Ababa</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3 className='payment_name'>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <Check_out_product
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
            }
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3 className='payment_name'>Payment Method</h3>
          </div>
          <div className="payment_details mb">
            <form onSubmit={handleSubmit} className='payment_form'>
              <CardElement onChange={handleChange} className='card_element' />
              <div className="payment_price_container">
                <CurrencyFormat
                  renderText={(value) => <h3 className='order_total'>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button className='payment_buy_now' disabled={processing || disabled || succeeded}>
                  <span className='payment_buy_button'>{processing ? 'Processing...' : 'Buy Now'}</span>
                </button>
              </div>
              {error && <div className='payment_error'>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;