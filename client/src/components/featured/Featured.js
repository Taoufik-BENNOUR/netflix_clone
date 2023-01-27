import React from 'react'
import { inception } from '../../assets/utils/images'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faAtom } from '@fortawesome/free-solid-svg-icons'

import "./featured.scss"
const Featured = ({type}) => {
  return (
    <div className='featured'>
      {type&& (
        <div className='category'>
          <span>{type==="movie"?"Movies":"Series"} </span>
          <select name='genre' id='genre'>
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="anime">Anime</option>
            <option value="adventure">Thrillers</option>
            <option value="comedies">Comedies</option>
            <option value="documentaries">Documentaries</option>
          </select>
        </div>
      )}
    <img src="https://static01.nyt.com/images/2010/07/16/arts/16inceptioncap/16inceptioncap-articleLarge.jpg" />
    <div className='infos'>
      <img src={inception}/>
      <span className='description'>
      decorativedecorativedecorative      decorativedecorativedecorative
      decorativedecorativedecorative
      decorativedecorativedecorative
      decorativedecorativedecorative
      decorativedecorativedecorative
      decorativedecorativedecorative
      decorativedecorativedecorative
      decorativedecorativedecorative
      decorativedecorativedecorative

      </span>
      <div className='buttons'>
        <button className='play icons'>
          <img src='https://cdn-icons-png.flaticon.com/512/3024/3024584.png'  />
          Play
          </button>
        <button className='info icons'>
          <img  src='https://cdn-icons-png.flaticon.com/512/665/665049.png' />
          <span>
            Info
          </span>   
        </button>
      </div>
    </div>
    </div>
  )
}

export default Featured