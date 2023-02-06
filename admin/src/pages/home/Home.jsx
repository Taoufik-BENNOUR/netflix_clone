import React from 'react'
import Chart from '../../components/chart/Chart'
import Feature from '../../components/feature/Feature'
import "./home.scss"
import chartData from "../../data/chart.json"
import Widget from '../../components/widget/WidgetLayout'
import axios from "axios"
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    const getStats = async () =>{
      try {
        const response = await axios.get("/user/stats/all")
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    getStats()
  }, [])
  
  return (
    <div className='home'>
        <Feature/>
        {chartData.charts.map((chart,i)=><Chart key={i} data={chart} />)}
        <div className="homeWidget">
          <Widget size={"small"} />
          <Widget size={"large"} />
        </div>
    </div>
  )
}

export default Home