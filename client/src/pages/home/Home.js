import { useEffect, useState } from "react"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import Navbar from "../../components/navbar/Navbar"
import axios from "axios"
import "./home.scss"

const Home = ({type}) => {
  const [lists, setlists] = useState([])
  const [genre, setgenre] = useState(null)
  useEffect(()=>{
    const getLists = async () =>{
      try {
        const response = await axios.get(`/lists${type?"?type="+type:""}${genre?"&genre="+genre:""}`,{
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWVmNThhZDcyYWYyY2Q5YWY5ZGY1MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDkyNTk2Mn0.asehUPcZsavuHeO5Kmo2TUUIdC8XzIDKxGN5zZhoLRQ"
          }
        })
        setlists(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    getLists()
  },[type,genre])
  return (
    <div className='home'>
        <Navbar/>
        <Featured type={type}/>
        {lists.map((list)=><List List={list}/>)}

    </div>
  )
}

export default Home