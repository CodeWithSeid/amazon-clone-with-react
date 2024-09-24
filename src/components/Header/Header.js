import React from 'react'
import { Link } from 'react-router-dom';

// components 👉
import amazon_logo from '../custom/image/amazon_logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from '../State_provider/State_provider';
import { auth } from '../Firebase/firebase';

function Header() {
    const [{ basket , user }] = useStateValue();
    
    const handleAutentication = () => {
        if (user) {
            auth.signOut();
        }
    }

  return (
    <header className='Header'>
        <Link to='/' className='click_amazon_logo'>
            <img
                className='amazon_logo'
                src={amazon_logo}
                alt='amazon_logo'
                />
        </Link>
        <div className='Header_search'>
            <input className='Header_search_input' type='text'/>
            <SearchIcon className='Header_search_icon'/>
        </div>
        <div className='Header_nav'>
            <Link to={!user && '/login'} className='click_signIn_button'>
                <div onClick={handleAutentication} className='Header_option'>
                    <span className='header_option_1'>
                     Hello {!user ? 'Guest' : user?.email}
                    </span>
                    <span className='header_option_2'>
                     {!user ? 'Sign In' : 'Sign Out'}
                    </span>
                </div>
            </Link>
            <Link to='/orders' className='click_order_route'>
                <div className='Header_option'>
                    <span className='header_option_1'>Returns</span>
                    <span className='header_option_2'>& Order</span>
                </div>
            </Link>
            <div className='Header_option'>
                <span className='header_option_1'>Your</span>
                <span className='header_option_2'>Prime</span>
            </div>
            <Link to='/check_out' className='click_header_cart'>
                <div className='Header_cart'>
                    <ShoppingCartIcon className='Header_cart_icon'/>
                    <span className='Header_cart_counter'>{basket.length}</span>
                </div>
            </Link>
        </div>
    </header>
  )
}

export default Header;