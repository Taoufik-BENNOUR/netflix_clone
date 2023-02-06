import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline, EditOutlined } from "@material-ui/icons"
import { useState } from "react"
import { moviesData } from "../../data/movieList"
import "./movieList.scss"
import {Link} from "react-router-dom"
const MovieList = () => {
  const [data, setdata] = useState(moviesData)
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
    </div>
  )
}

export default  MovieList