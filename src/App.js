import React, { useEffect, useState } from 'react'
import Catalog from './Catalog'
import Contact from './Contact'
import Footer from './Footer'
import Image from './Image'
import nyImg from './img/ny.jpg'
import Nav from './Nav'

const App = () => {
  const [time, setTime] = useState()
  useEffect(() => {
    setTime(
      new Date().toLocaleTimeString('default', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      })
    )
  }, [])
  console.log('Visited time:', time)

  return (
    <div className='wrapper'>
      <Nav />
      <div className='homePage-wrapper' id='homePage'>
        <div className='homePage'>
          <div className='hText'>
            <div className='fLine'>Smell that</div>
            <div className='sLine'>Everyone loves!</div>
            <div className='additLine secondary'>
              Hubert Givenchy called perfume a visiting card. Perfume is your
              confidence, style, charisma.
            </div>
            <a href='#catalogPage' className='landBtn'>
              <div className='landText'>Explore our catalog</div>
              <div className='landTime'>{time}</div>
            </a>
          </div>
        </div>
      </div>
      <div className='aboutPage-wrapper' id='aboutPage'>
        <div className='aboutPage'>
          <p className='sectionName'>About</p>
          <Image
            img={nyImg}
            tag='nyImg'
            description='Times Square, the home of Broadway, after the coronavirus outbreak'
            author='TAYFUN COSKUN/ANADOLU AGENCY VIA GETTY'
          />
          <p className='fLineText'>At first there was nothing...</p>
          <div className='aboutText'>
            <p>
              In&nbsp;this emptiness, we&nbsp;thought, why not start our own
              business in&nbsp;the midst of&nbsp;an&nbsp;epidemic, to&nbsp;prove
              that even in&nbsp;such difficult times you can succeed
            </p>
            <p className='aboutTextMiddle'>
              We&nbsp;offer the best products at&nbsp;wholesale prices, making
              the product available to&nbsp;everyone.
            </p>
            <p className='aboutTextStand'>
              We&nbsp;also found the coolest designers to&nbsp;create unique
              gift wraps that are perfect for any occasion. Anniversary,
              birthday, holiday or&nbsp;just a&nbsp;day&nbsp;&mdash;
              we&nbsp;will pack everything right.
            </p>
            <p className='aboutTextMiddle'>
              We&nbsp;realized that it&nbsp;is&nbsp;really not that simple.
            </p>
            <p className='aboutTextStand'>
              But nevertheless, after each black stripe is&nbsp;followed
              by&nbsp;a&nbsp;white
            </p>
          </div>
        </div>
      </div>
      <div className='catalogPage-wrapper' id='catalogPage'>
        <Catalog />
      </div>
      <div className='contactPage-wrapper' id='contactPage'>
        <Contact />
      </div>
      <footer className='footer-wrapper'>
        <Footer />
      </footer>
    </div>
  )
}

export default App
