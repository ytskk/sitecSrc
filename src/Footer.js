import React from 'react'
import './footer.css'

const footerLinks = [
  { id: 1, name: 'Delivery', link: '' },
  { id: 2, name: 'Payment', link: '' },
  { id: 3, name: 'FAQ', link: '' },
  { id: 4, name: 'Personal data processing', link: '' },
]

const Footer = () => {
  return (
    <div className='footer'>
      <header className='header'>
        <p className='pageName'>⠠⠋⠕⠕⠞⠑⠗</p>
      </header>
      <div className='footerLinks-wrapper'>
        <p className='listName'>Information</p>
        <ul className='footerLinks'>
          {footerLinks.map((el) => (
            <li key={el.id} className='li'>
              <a href={el.link} className='link'>
                {el.name}
              </a>
            </li>
          ))}
        </ul>
        <p className='copyright'>&copy; Roses, {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export default Footer
