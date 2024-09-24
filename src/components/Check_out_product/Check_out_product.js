import React from 'react'
import { useStateValue } from '../State_provider/State_provider';


function Check_out_product({id , image , title , price , rating , hideButton}) {
    const [{ basket }, dispatch] = useStateValue();
    const Remove_from_Basket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };
  return (
    <section className='Check_out_product'>
        <div className='Check_out_product_image_container'>
            <img
                className='Check_out_product_image'
                src={image}
                alt='Check_out_product_image'
            />
        </div>
        <div className='Check_out_product_info'>
            <p className='Check_out_product_title'>{title}</p> 
            <div className='Check_out_product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </div>
            <div className='Check_out_product_rating'>
                {Array(rating)
                .fill()
                .map(() => (
                <p>🌟</p>
                ))}
            </div>
            {!hideButton && (
                <button onClick={Remove_from_Basket} className='Remove_from_Basket'>Remove from Basket</button>
            )}{' '}
        </div>
    </section>
  )
}

export default Check_out_product;