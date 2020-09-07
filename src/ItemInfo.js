import closeIcon from '@iconify/icons-mdi/close'
import shareIcon from '@iconify/icons-mdi/share-variant'
import Icon from '@iconify/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import fmtPrice from './formatPrice'
import GetNotes from './GetNotes'
import './itemInfo.css'
import { addToCartFromCatalog } from './reducer'

const ItemInfo = ({ close, el }) => {
  const dispatch = useDispatch()
  const [item, setItem] = useState({
    id: '',
    brand: '',
    name: '',
    type: '',
    gender: '',
    img: '',
    popularity: 0,
    prices: [0],
    size: [0],
    selected: 0,
    details: {
      country: '',
      scent: '',
      description: '',
      notes: {
        top: [''],
        base: [''],
        heart: [''],
      },
    },
  })
  const [selected, setSelected] = useState(0)
  const handleChange = (ind) => {
    setSelected(ind)
    setItem({ ...item, selected: ind })
  }
  useEffect(() => {
    axios
      .get('https://api.npoint.io/737dd8fc91ea7506120e/itemsLong')
      .then((res) => {
        const itemI = res.data.find((elL) => elL.id === el)
        console.log('Item rerendered')
        return setItem(itemI)
      })
  })
  return (
    <div className='itemInfo'>
      <div className='itemInfo__topbar'>
        <button className='shareBtn-wrapper info-wrapper'>
          <Icon icon={shareIcon} className='shareBtn' />
        </button>
        <button
          className='closeBtn-wrapper info-wrapper'
          onClick={() => {
            close()
          }}>
          <Icon icon={closeIcon} className='closeBtn' />
        </button>
      </div>
      <div className='details'>
        <section className='details__mainInfo'>
          <section className='top'>
            <div className='top__left'>
              <div className='img__slider'>
                <div className='images'>
                  <img
                    className='overlay__img'
                    style={{
                      height: `${100 - (item.size.length - selected) * 5}%`,
                    }}
                    src={item.img}
                    alt={`${
                      item.type +
                      ' ' +
                      item.name +
                      ' by ' +
                      item.brand +
                      ' for ' +
                      item.gender
                    }`}
                  />
                </div>
                {/* WIP (no) */}
                {/* <div className='img__slider-bottom'>
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                </div> */}
              </div>
            </div>
            <div className='top__right'>
              <div className='item__brandName'>{`${item.brand} ${item.name}`}</div>
              <div className='itemO__type'>
                {item.type} for {item.gender}
              </div>
              <div className='itemO__sizes-wrapper'>
                {item.size.map((size, ind) => (
                  <label
                    key={ind}
                    className={`overlay__size ${
                      ind === selected ? 'overlay__size-selected' : ''
                    }`}
                    htmlFor={`${size}ml`}
                    checked={ind === selected}
                    onChange={() => handleChange(ind)}>
                    {size} ml
                    <input
                      type='radio'
                      name='size'
                      value={ind}
                      id={`${size}ml`}
                    />
                  </label>
                ))}
              </div>
              <div className='itemO__bottom'>
                <div className='item__price'>
                  {fmtPrice(item.prices[item.selected])}
                </div>
                {/* Add quantity selection */}
                <button
                  className='itemO__addToCart'
                  onClick={() => {
                    const id = `${item.id}${selected}`
                    dispatch(addToCartFromCatalog(id))
                  }}>
                  Add to cart
                </button>
              </div>
            </div>
          </section>
          <section className='item__details-wrapper'>
            <div className='item__country'>Country: {item.details.country}</div>
            <div className='item__scent'>Scent: {item.details.scent}</div>
            <div className='item__description'>{item.details.description}</div>
          </section>
        </section>
        <section className='details__notes-wrapper'>
          <GetNotes obj={item.details.notes} />
        </section>
      </div>
    </div>
  )
}

export default ItemInfo
