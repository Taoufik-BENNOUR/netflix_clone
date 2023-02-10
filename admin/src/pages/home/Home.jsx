import React, { useMemo, useState } from 'react'
import Chart from '../../components/chart/Chart'
import Feature from '../../components/feature/Feature'
import "./home.scss"
import chartData from "../../data/chart.json"
import Widget from '../../components/widget/WidgetLayout'
import axios from "axios"
import { useEffect } from 'react'

const Home = () => {
  const [userStats, setuserStats] = useState([])
  const months =useMemo(()=>["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],[]) 
  useEffect(() => {
    const getStats = async () =>{
      try {
        const response = await axios.get("/user/stats/all")
        response.data.map(el=>setuserStats(prev=>[...prev,{name:months[el._id-1],"New Users":el.total}]))
      } catch (error) {
        console.log(error)
      }
    }
    getStats()
  }, [months])
  return (
    <div className='home'>
        <Feature/>
        {chartData.charts.map((chart,i)=><Chart key={i} data={userStats} />)}
        <div className="homeWidget">
          <Widget size={"small"} />
          <Widget size={"large"} />
        </div>
    </div>
  )
}

export default Home