import React, { useEffect, useState } from 'react'
import { inception } from '../../assets/utils/images'
import axios from "axios"
import "./featured.scss"

const Featured = ({type}) => {
  const [content, setcontent] = useState([])

  useEffect(() => {
    const getFeatured = async () =>{
      try {
        const response = await axios.get(`/movie/film/random${type?"?type="+type:""}`)
        setcontent(response.data[0])
      } catch (error) {
        console.log(error);
      }
    }

    getFeatured()
  }, [type])
  
  return (
    <div className='featured'>
      {type&& (
        <div className='category'>
          <span>{type==="movies"?"Movies":"Series"} </span>
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
    <img src={content?.image} />
    <div className='infos'>
      <img src={content?.thumbnail}/>
      <span className='description'>
      {content?.description}
      </span>
      <div className='buttons'>
        <button className='play icons'>
          <img src={'https://cdn-icons-png.flaticon.com/512/3024/3024584.png'}  />
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