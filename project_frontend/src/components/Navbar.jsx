import React, { useContext, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faBagShopping, faBars, faCaretRight, faCartShopping, faHeart, faShoppingBag, faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons'

import '../styles/navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { Store } from '../Store'
import { category } from '../data'

const Navbar = () => {

  const { state, dispatch:ctxDispatch } = useContext(Store);
  const {cart, wish, userInfo} = state;

  const[openMobileMenu, setMobileMenu]=useState(false);




  const signoutHandler = () => {
    ctxDispatch({type: 'USER_SIGNOUT'});
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/login';
  }

  return (
    <div className={openMobileMenu===true?"n-container2":"n-container"}>
      <div className="n-row">
          <div className="n-col">
            <span className='n-email'>Delivery within 60 mins</span>
            {
              userInfo ? (<Link to='/account'><span>Welcome back {userInfo.name}</span></Link>) : (<span>Welcome Guest</span>)
            }
          </div>
          <div className="n-col">
                <div className="socials">
                <a href="/"><img src="/images/socials/twitter.png" alt="" /></a>
                    <a href="/"><img src="/images/socials/facebook.png" alt="" /></a>
                    <a href="/"><img src="/images/socials/instagram.png" alt="" /></a>

                    <a href="/"><img src="/images/socials/quality.png" alt="" /></a>
                </div>
          </div>
      </div>
      <div className="n-row">
          <div className="n-col">
              <Link to="/"><img src="/images/logo/logo.png" className='logo' alt="" /></Link>
          </div>
          <div className="n-col">
              <div className="icons">
                {
                  userInfo ? (<Link to="#signout" onClick={signoutHandler}><span><FontAwesomeIcon icon={faArrowRightToBracket} /> LogOut</span></Link>) : (<a href="/login"><span>Login | Sign Up</span></a>)
                }
                <a href="/cart"><span><FontAwesomeIcon icon={faCartShopping} />{cart.cartItems.length > 0 && (<span className='totalItems'>{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</span>)}</span></a>
              
                <a href="/wish"><span><FontAwesomeIcon icon={faShoppingBasket} />{wish.wishItems.length > 0 && (<span className='totalItems'>{wish.wishItems.length}</span>)} </span></a>
                
                <span className='mobile-button-icon' onClick={()=>{
                  
                  setMobileMenu(!openMobileMenu)
                }}><FontAwesomeIcon icon={faBars} /></span>
                
                </div>
          </div>
      </div>
      <div className="n-row">
          <nav className="nav">
              <ul className={openMobileMenu===true? "items2" :"items"}>
                
                  

                  <li className="list"><NavLink to="/" activeClassName="active">Home</NavLink></li>
                  <li className="list"><NavLink to="/shop" activeClassName="active">Products</NavLink></li>
                  <li className="list"><NavLink to="/about" activeClassName="active">About</NavLink></li>
                  <li className="list"><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                  <li className="list"><NavLink to="/contact" activeClassName="active">Blog</NavLink></li>
                  <li className="list"><NavLink to="/contact" activeClassName="active">Delivery</NavLink></li>
               
               </ul>
              
          </nav>
      </div>
    </div>
  )
}

export default Navbar

