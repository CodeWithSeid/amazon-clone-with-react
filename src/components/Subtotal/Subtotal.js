import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../State_provider/State_provider';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const navigate = useNavigate();
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  return (
    <section className='Subtotal'>
        <CurrencyFormat 
          renderText={(value) => (
            <div>
              <p>
                Subtotal ({basket.length} items): <strong>{value}</strong>
              </p>
              <small className='Subtotal_gift'>
                 <input className='checkbox' type='radio'/> This order contains a gift
              </small>
            </div>
          )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
          />
          <button className='Procecor' onClick={(e) => navigate('/payment')}> Proceed to Checkout </button>
    </section>
  )
}

export default Subtotal;