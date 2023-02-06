import React from 'react'
import Chart from '../../components/chart/Chart'
import Feature from '../../components/feature/Feature'
import "./home.scss"
import chartData from "../../data/chart.json"
import Widget from '../../components/widget/WidgetLayout'
const Home = () => {
  return (
    <div className='home'>
        <Feature/>
        {chartData.charts.map(chart=><Chart data={chart} />)}
        <div className="homeWidget">
          <Widget size={"small"} />
          <Widget size={"large"} />
        </div>
    </div>
  )
}

export default Home