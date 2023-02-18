import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline, EditOutlined } from "@material-ui/icons"
import { useContext, useEffect, useMemo, useState } from "react"
import { moviesData } from "../../data/movieList"
import "./movieList.scss"
import {Link} from "react-router-dom"
import Chart from "../../components/chart/Chart"
import axios from "axios"
import { MovieContext } from "../../context/movieContext/MovieContext"
import { getMovies } from "../../context/movieContext/apiCalls"
const MovieList = () => {

  const [data, setdata] = useState(moviesData)
    const {dispatch,movies} = useContext(MovieContext)
    console.log(movies);
  const columns = [
     { field: 'id', headerName: 'ID', width: 70 },
    //  { field: 'movie', headerName: 'Movie', width: 160,renderCell:(params)=>{
    //      return(
    //          <div className='tableUsername'>
    //              <img src={params.row.image} alt="" />
    //              {params.row.title}
    //          </div>
    //      )
    //  } },
     { field: 'genre', headerName: 'Genre', flex: 1},
    //  {field: 'email',headerName: 'Email',type: 'string',flex: 1,},
    //  {field: 'action',headerName: 'Action',sortable: false,flex: 1,renderCell:(params)=>{
    //      return <div>
    //      <Link to={`/movie/${params._id}`} >
    //          <EditOutlined className='userListEdit' />
    //      </Link>
    //          <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row._id)} />
    //      </div>
    //  }},
   ];
   const handleDelete = (id) =>{
     const filtredData = data.filter(el=>el.id !== id)
     setdata(filtredData)
   }
useEffect(() => {
    getMovies(dispatch)
}, [dispatch])

  return (
    <div className='movieList'>
        <div style={{ height: 500, width: '100%'}}>
            <DataGrid
                rows={movies}
                columns={columns}
                pageSize={7}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
          </div>
      </div>
  )
}

export default  MovieList