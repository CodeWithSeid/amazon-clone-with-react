import React from 'react';
import moment from 'moment';
import Check_out_product from '../Check_out_product/Check_out_product';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
  return (
    <div className="Order">
      <h2 className='Order_title'>Order</h2>
      <p className='Order_time_format'>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
      <p className="Order_id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item,i) => (
        <Check_out_product
        key={i}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order_total_value">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
}

export default Order;