import { DataGrid} from '@material-ui/data-grid';
import "./userList.scss"
import {rows } from '../../data/userlist';
import { DeleteOutline, EditOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from "axios"
import token from "../../data/token.json"
import { MovieContext } from '../../context/movieContext/MovieContext';
import { getMovies } from '../../context/movieContext/apiCalls';

const UserList = () => {
  const [data, setdata] = useState(rows)
    useEffect(() => {
        const fetchUsers = async () =>{
          const response = await axios.get("/user?query=new",{
            headers:{
              token:token.token
            }
          })
          console.log(response.data)
        }

        fetchUsers()
    }, [])
 const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'Username', width: 160,renderCell:(params)=>{
        return(
            <div className='tableUsername'>
                <img src={params.row.avatar} alt="" />
                {params.row.username}
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
        <Link to={`/user/${params.id}`} >
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
    <div className="userList">
      <div style={{ height: 500, width: '100%'}}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  )
}

export default UserList