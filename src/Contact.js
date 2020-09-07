import facebookIcon from '@iconify/icons-mdi/facebook-box'
import instagramIcon from '@iconify/icons-mdi/instagram'
import telegramIcon from '@iconify/icons-mdi/telegram'
import twitterIcon from '@iconify/icons-mdi/twitter'
import Icon from '@iconify/react'
import React, { useState } from 'react'
import './contact.css'

const contactList = [
  {
    id: 1,
    name: 'telegram',
    link: 'https://telegram.org',
    logo: <Icon icon={telegramIcon} />,
    color: '#0088cc',
  },
  {
    id: 2,
    name: 'facebook',
    link: 'https://facebook.com',
    logo: <Icon icon={facebookIcon} />,
    color: '#3b5998',
  },
  {
    id: 3,
    name: 'instagram',
    link: 'https://www.instagram.com/',
    logo: <Icon icon={instagramIcon} />,
    color:
      'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
  },
  {
    id: 4,
    name: 'twitter',
    link: 'http://twitter.com',
    logo: <Icon icon={twitterIcon} />,
    color: '#1da1f2',
  },
]

const Contact = () => {
  const time = new Date().toLocaleTimeString('default', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  })

  setInterval(
    () =>
      setTimer(
        new Date().toLocaleTimeString('default', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
        })
      ),
    30000
  )
  console.log('rerendered')

  const [timer, setTimer] = useState(time)

  return (
    <div className='contactPage'>
      <header className='header'>
        <p className='pageName'>Contact</p>
      </header>
      <section className='typeOfContact'>
        <div className='phoneType typeBox'>
          <p className='text'>We&nbsp;are ready to&nbsp;listen to&nbsp;you:</p>
          {/* Make phone and email random every rerender */}
          <a href='tel:+79075550133' className='link tel'>
            +7 907 555-01-33
          </a>
        </div>
        <div className='emailType typeBox'>
          <p className='text'>For something beyond words:</p>
          <a href='mailto:jackson.graham@example.com' className='link mail'>
            jackson.graham@example.com
          </a>
        </div>
        <div className='chatType'>
          <div className='chatMessage'>
            <div className='preText'>Or&nbsp;you can chat&nbsp;us</div>
            <div className='currTime'>{timer}</div>
          </div>
          <ul className='contactList'>
            {contactList.map((el) => (
              <li key={el.id}>
                <a href={el.link} style={{ background: el.color }}>
                  {el.logo}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Contact
