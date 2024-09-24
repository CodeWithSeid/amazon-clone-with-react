import React from 'react';
import Subtotal from '../Subtotal/Subtotal';
import Check_out_product from '../Check_out_product/Check_out_product';
import { useStateValue } from '../State_provider/State_provider';

function Check_out() {
  const [{ basket } , dispatch] = useStateValue();
    
  return (
    <section className='check_out'>
      <div className='check_out_left'>
        <img 
          className='check_out_image'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt='check_out_image'
        />
        <h3>Hello Guest</h3>
        <h2 className='check_out_title'>Your shopping Basket</h2>
        {basket.map((item) => (
          <Check_out_product
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
          />
        ))}
      </div>
      <div className='check_out_right'>
        <Subtotal />
      </div>
    </section>
  );
}

export default Check_out;