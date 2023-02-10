import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline, EditOutlined } from "@material-ui/icons"
import { useEffect, useMemo, useState } from "react"
import { moviesData } from "../../data/movieList"
import "./movieList.scss"
import {Link} from "react-router-dom"
import Chart from "../../components/chart/Chart"
import axios from "axios"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const MovieList = () => {
  const [data, setdata] = useState(moviesData)
  const [first, setfirst] = useState([])
  const [interval, setInterval] = useState('week');

  const handleIntervalChange = (event) => {
    setInterval(event.target.value);
  };
  const columns = [
     { field: 'id', headerName: 'ID', width: 70 },
     { field: 'movies', headerName: 'name', width: 160,renderCell:(params)=>{
         return(
             <div className='tableUsername'>
                 <img src={params.row.avatar} alt="" />
                 {params.row.movies}
             </div>
         )
     } },
     { field: 'firstName', headerName: 'First name', flex: 1},
     { field: 'lastName', headerName: 'Last name', flex: 1 },
     {field: 'email',headerName: 'Email',type: 'string',flex: 1,},
     {field: 'status',headerName: 'status',sortable: false,flex: 1,},
     {field: 'transaction',headerName: 'Transaction',sortable: false,flex: 1,},
     {field: 'action',headerName: 'Action',sortable: false,flex: 1,renderCell:(params)=>{
         return <div>
         <Link to={`/movie/${params.id}`} >
             <EditOutlined className='userListEdit' />
         </Link>
             <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)} />
         </div>
     }},
   ];
   const handleDelete = (id) =>{
     const filtredData = data.filter(el=>el.id !== id)
     setdata(filtredData)
   }
   const months =useMemo(()=>["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],[]) 
useEffect(() => {
  const fetchWeight = async () =>{
    const response = await axios.get(`/weights?interval=${interval}`)
    // response.data.filter(el=>el._id.userId==1).map(el=>setfirst(prev=>[...prev,{name:months[el._id.month-1],"New Users":el.totalWeight}]))
    setfirst(response.data)
  }
  fetchWeight()
}, [interval])


  return (
    <div className='movieList'>
        <div style={{ height: 500, width: '100%'}}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={7}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
      </div>
      <form>
        <select value={interval} onChange={handleIntervalChange}>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
      </form>
      <ul>
        {first.map((weight) => (
          <li key={weight._id.userId + weight._id.interval}>
            {weight._id.userId} - {weight._id.interval}: {weight.avgWeight}
          </li>
        ))}
      </ul>
      <h3 className="chartTitle">{"New User"}</h3>
        <ResponsiveContainer width={"100%"} aspect={4/1}>
            <LineChart data={first}>
                <XAxis dataKey={"name"} />
                <Line type="monotone" dataKey={"New Users"} />
                <Tooltip/>
                <CartesianGrid stroke="lightgrey" strokeDasharray={"5 5"} />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default  MovieList