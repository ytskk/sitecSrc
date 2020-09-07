import React from 'react'

const style = {
  img: function (img) {
    return {
      backgroundImage: `url(${img})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }
  },
}

const Image = ({ img, description, author, tag = '' }) => {
  return (
    <div className={`img__box`}>
      <div className='img__wrapper'>
        <div className={`img ${tag}`} style={style.img(img)}></div>
      </div>
      <div className='bottom__wrapper'>
        <div className='description'>{description}</div>
        <div className='author'>Photograph: {author}</div>
      </div>
    </div>
  )
}

export default Image
