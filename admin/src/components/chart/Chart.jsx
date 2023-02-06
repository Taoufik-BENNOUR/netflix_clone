import "./chart.scss"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({data:{title,data}}) => {
    
  return (
    <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width={"100%"} aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey={"name"} />
                <Line type="monotone" dataKey={title} />
                <Tooltip/>
                <CartesianGrid stroke="lightgrey" strokeDasharray={"5 5"} />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart