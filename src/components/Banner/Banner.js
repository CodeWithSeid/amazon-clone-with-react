import React from 'react'

// components 👉
import Product from '../Product/Product';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { showSlide , slideLeft, slideRight } from './Slide_show';

function Banner() {
  return (
    <section className='Banner'>
        <div className='Banner_image_container'>
        <div className='Banner_container_image'>
          <div className='arrow_container'>
              <div onClick={slideLeft} className='slideLeft'><ArrowBackIosNewIcon /></div>
              <div onClick={slideRight} className='slideRight'><ArrowForwardIosIcon /></div>    
          </div>
            <img
              className='Banner_image DB'
              src='https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg'
              alt='Banner image'
            />
            <img
              className='Banner_image'
              src='https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg'
              alt='Banner image'
            />
            <img
              className='Banner_image'
              src='https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg'
              alt='Banner image'
            />
            <img
              className='Banner_image'
              src='https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg'
              alt='Banner image'
            />
            <img
              className='Banner_image'
              src='https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg'
              alt='Banner image'
            />
          </div>
        </div>
        <div className='Banner_row'>
          <Product
              id="12345"
              title="Shop Laptops & Tablets"
              price={1669}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
            />
            <Product
              id="54321"
              title="Electronics"
              price={159.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
            />
        </div>
        <div className="Banner_row">
          <Product
            id="67890"
            title="Shop activity trackers and smartwatches"
            price={499.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
          />

          <Product
            id="09876"
            title="Home refresh ideas"
            price={139.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/home/THILGMA/SpringEvent2023/XCM_CUTTLE_1559454_3018199_379x304_1X_en_US._SY304_CB592739737_.jpg"
          />
          <Product
            id="34567"
            title="Kindle E readers"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_1x._SY304_CB639752818_.jpg"
          />
        </div>
        <div className="Banner_row">
          <Product
            id="76543"
            title="Computers & Accessories"
            long_image="long_image"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
          />
        </div>
        <div className="Banner_row mb">
          <Product
            id="23456"
            title="Health & Personal Care"
            price={69.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
          />
          <Product
            id="65432"
            title="New arrivals in Toys"
            price={999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg"
          />
          <Product
            id="11479"
            title="For your Fitness Needs"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
          />
        </div>
    </section>
  )
}

export default Banner;