import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import useFetch from "../../hooks/useFetch"
import axios from "axios";


const Datatable = ({columns}) => {
  const location = useLocation();
  const admin = location.pathname;
  const path = location.pathname.split("/")[2];
  const [list,setList] = useState();
  const {data} = useFetch(`http://localhost:4300/${path}`)

  console.log(admin);

  useEffect(() => {
    setList(data)
  }, [data])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4300/${path}/${id}`)
      setList(list.filter((item) => item._id !== id));
    } catch (error) {
      
    }
    
  };


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
           
            {path === 'bus' && (<Link to={`/admin/bus/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>)}
            {path === 'user' && (<Link to={`/admin/bus/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>)}
            
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  console.log(list);
  
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New {path}
        {path ==='bus' && (<Link to={"/admin/bus/new"} className="link">
          Add New
        </Link>)}
        {path ==='user' && (<Link to={"/admin/user/new"} className="link">
          Add New
        </Link>)}
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row=>row._id}
      />
    </div>
  );
};

export default Datatable;
