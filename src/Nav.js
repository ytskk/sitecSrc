import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import './nav.css'

const navLinks = [
  { name: 'Home', to: '' },
  { name: 'About', to: 'aboutPage' },
  { name: 'Catalog', to: 'catalogPage' },
  { name: 'Contact', to: 'contactPage' },
]

const Nav = () => {
  const dispatch = useDispatch()
  const store = useSelector((state) => state)

  return (
    <nav className='nav-m'>
      <div className='logo'>Roses</div>
      <div className='nav__buttons'>
        <ul>
          {navLinks.map((el, ind) => (
            <li key={ind}>
              <a href={`#${el.to}`}>{el.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='wishlist-wrapper'>
        <button className='wishlist__button' id='wishlist'>
          {store.wishlist.count === 0 ? (
            <FavoriteBorderRoundedIcon className='wishlist__button-icon' />
          ) : (
            <FavoriteRoundedIcon
              style={{
                transform: `scale(${1 + (store.wishlist.count - 1) / 15})`,
              }}
              className='wishlist__button-icon wishlist__button-icon-active'
            />
          )}
        </button>
        <div className='wishlist__label'>
          <div
            className={`wishlist__label-text ${
              store.wishlist.count > 0 ? 'wishlist__label-text-hidden' : null
            }`}>
            Wishlist
          </div>
        </div>
      </div>
      {store.cart.count !== 0 ? (
        <button className='cart__button btn'>
          Cart
          <div className='cart__divider'></div>
          <div className='cart__count-wrapper'>
            <ArrowForwardIcon className='cart__count-icon' />
            <div className='cart__count-text'>{store.cart.count}</div>
          </div>
        </button>
      ) : (
        <button className='cart__button'>Cart</button>
      )}
    </nav>
  )
}

export default Nav
