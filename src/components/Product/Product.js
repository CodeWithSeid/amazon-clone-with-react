import React from 'react'
import { useStateValue } from '../State_provider/State_provider';

function Product({long_image , id , title , image , price , rating}) {
    const [{ basket }, dispatch] = useStateValue();
    // console.log('THIS IS THE BASKET' , basket);
    const Add_to_basket = () => {
        dispatch({
          type: 'ADD_TO_BASKET',
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
          },
        });
      }
  return (
    <section className='Product'>
        <div className='Product_info'>
            <p className='Product_title'>{title}</p>
            <div className='Product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </div>
            <div className='Product_rating'>
                {Array(rating)
                .fill()
                .map((el,i) => (
                <p key={i}>🌟</p>
                ))}
            </div>
        </div>
        <div className={`Product_image_container ${long_image}`}>
            <img
                className='Product_image'
                src={image}
                alt='Product image'
            />
        </div>
        <button onClick={Add_to_basket} className='Add_to_basket'>Add to basket</button>
    </section>
  )
}

export default Product;