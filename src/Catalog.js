import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded'
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import RemoveShoppingCartRoundedIcon from '@material-ui/icons/RemoveShoppingCartRounded'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Popup from 'reactjs-popup'
import './catalog.css'
import fmtPrice from './formatPrice'
import ItemInfo from './ItemInfo'
import './itemInfo.css'
import {
  addToCartFromCatalog,
  addToWishlistFromCatalog,
  deleteFromCartFromCatalog,
  deleteFromWishlistFromCatalog,
} from './reducer'

const Catalog = () => {
  const dispatch = useDispatch()
  const store = useSelector((state) => state)

  const [items, setItems] = useState([])
  const [sortByPrice, setSortByPrice] = useState(false)
  const [sortAsc, setSortByAsc] = useState(false)

  const handleType = () => setSortByPrice(!sortByPrice)
  const handleOrder = () => setSortByAsc(!sortAsc)

  console.log('sortByPrice:', sortByPrice)
  console.log('sortAsc:', sortAsc)
  console.log('items:', items)
  console.log('current state:', store.cart)

  useEffect(() => {
    axios
      .get('https://api.npoint.io/737dd8fc91ea7506120e/itemsShort')
      .then((res) => setItems(res.data))
  }, [])

  return (
    <div className='catalogPage'>
      <header className='header'>
        <p className='pageName'>Catalog</p>
        <div className='catalogBtns'>
          <div className='sortType toggles'>
            <div className={`filler ${sortByPrice ? `offset` : ''}`}></div>
            <input
              id='price'
              type='radio'
              value='1'
              name='sortType'
              checked={sortByPrice}
              onChange={handleType}
            />
            <label htmlFor='price'>Price</label>
            <input
              id='popularity'
              type='radio'
              value='2'
              name='sortType'
              checked={!sortByPrice}
              onChange={handleType}
            />
            <label htmlFor='popularity'>Popularity</label>
          </div>

          <div className='sortOrder toggles'>
            <div className={`filler ${sortAsc ? `offset` : ''}`}></div>
            <input
              id='asc'
              type='radio'
              value='1'
              name='sortOrder'
              checked={sortAsc}
              onChange={handleOrder}
            />
            <label htmlFor='asc'>Ascending</label>
            <input
              id='desc'
              type='radio'
              value='2'
              name='sortOrder'
              checked={!sortAsc}
              onChange={handleOrder}
            />
            <label htmlFor='desc'>Descending</label>
          </div>
        </div>
      </header>
      <section className='cartItems'>
        <ul className='items-list'>
          {items
            .sort(function (a, b) {
              if (sortByPrice) {
                if (sortAsc) {
                  if (a.price > b.price) return 1
                  if (a.price < b.price) return -1
                  return 0
                } else {
                  if (a.price > b.price) return -1
                  if (a.price < b.price) return 1
                  return 0
                }
              } else {
                if (sortAsc) {
                  if (a.popularity > b.popularity) return 1
                  if (a.popularity < b.popularity) return -1
                  return 0
                } else {
                  if (a.popularity > b.popularity) return -1
                  if (a.popularity < b.popularity) return 1
                  return 0
                }
              }
            })
            .map((el) => (
              <li key={parseInt(el.id, 10)} className='item'>
                <div className='item__wrapper'>
                  {/* a — open overlay */}
                  <Popup
                    contentStyle={{
                      maxWidth: '1200px',
                      maxHeight: '800px',
                      height: '90vh',
                      width: '90vw',
                      zIndex: '999',
                    }}
                    trigger={
                      <a className='item__overlay'>
                        <div className='img__container'>
                          <img
                            src={el.img}
                            alt={`${
                              el.type +
                              ' ' +
                              el.name +
                              ' by ' +
                              el.brand +
                              ' for ' +
                              el.gender
                            }`}
                          />
                        </div>
                        <div className='item__details'>
                          <div className='item__brand'>{el.brand}</div>
                          <div className='item__name'>{el.name}</div>
                        </div>
                      </a>
                    }
                    modal>
                    {(close) => <ItemInfo close={close} el={el.id} />}
                  </Popup>

                  <div className='item__type'>{`${el.type} for ${el.gender}`}</div>
                  <div className='item__bottom'>
                    <span className='price'>
                      from
                      {fmtPrice(el.price)}
                    </span>
                    <span className='btnGroup'>
                      <button
                        className='addToCart'
                        onClick={() => {
                          console.log('id:', `${el.id}${el.selected}`)
                          const id = `${el.id}0`
                          dispatch(
                            store.cart.content.indexOf(id) !== -1
                              ? deleteFromCartFromCatalog(id)
                              : addToCartFromCatalog(id)
                          )
                        }}>
                        {store.cart.content.indexOf(`${el.id}0`) !== -1 ? (
                          <RemoveShoppingCartRoundedIcon className='cartBtn' />
                        ) : (
                          <AddShoppingCartRoundedIcon className='cartBtn' />
                        )}
                      </button>
                      <button
                        className='toWishlist'
                        onClick={() => {
                          const id = `${el.id}0`
                          dispatch(
                            store.wishlist.content.indexOf(id) !== -1
                              ? deleteFromWishlistFromCatalog(id)
                              : addToWishlistFromCatalog(id)
                          )
                        }}>
                        {store.wishlist.content.indexOf(`${el.id}0`) !== -1 ? (
                          <FavoriteRoundedIcon className='favorite smallFragileHeart' />
                        ) : (
                          <FavoriteBorderRoundedIcon className='smallFragileHeart' />
                        )}
                      </button>
                    </span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </div>
  )
}

export default Catalog
