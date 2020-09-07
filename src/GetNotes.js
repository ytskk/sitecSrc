import React from 'react'
import './itemInfo.css'

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase()
}

const GetNotes = ({ obj }) => {
  const noteNames = []
  for (let noteName in obj) {
    noteNames.push(noteName)
  }
  console.log('obj:', obj)
  console.log('noteNames:', noteNames)
  return (
    <div>
      {noteNames.map((noteGrp, ind) => (
        <div className='details__notes' key={ind}>
          <div className='noteGroup__name'>{noteGrp.capitalize()} notes</div>
          <ul className='noteGroup__list'>
            {obj[noteGrp].map((noteName, ind) => (
              <li className='noteGropu__list-el' key={ind}>
                &#8212; {noteName}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default GetNotes
