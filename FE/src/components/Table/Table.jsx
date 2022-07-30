import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import {useState,useEffect} from 'react'
import userEvent from "@testing-library/user-event";
import { useQuery } from "react-query";
import { getAllComplianceData } from "../../services/details.service";

function FetchData() {
  const [product,setProduct] = useState([]);

const fetchData =() =>{
  fetch("https://api.test.esamudaay.com/api/v1/businesses/0635ecff-8fde-4185-8cd8-167efda42bbc/report")
  .then((response) =>{
    return response.json();
  }).then((data)=>{
    let product = data.results 
    setProduct(product);
  })
}
useEffect(() => {
  fetchData();
}, [])
return (
    <div className="Extract">
      {product.map(data =>(
        <div>
            
        </div>
      ))
      }
    </div>
)
 }
function createData(name, skuId, proname, status) {
  return { name, skuId, proname, status };
}

const rows = [
  createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Compliant"),
  createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Compliant"),
  createData("Cupcake", 18908421, "2 March 2022", "Pending"),
];


const makeStyle=(status)=>{
  if(status === null)
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  
}



export default function BasicTable() {
  // const {data:getComplianceData, isLoading} = useQuery("compliance", getAllComplianceData);


  const [product,setProduct] = useState();
  const fetchData =() =>{
    fetch(`https://api.test.esamudaay.com/api/v1/businesses/0635ecff-8fde-4185-8cd8-167efda42bbc/report`)
    .then((response) =>{
      return response.json();
    }).then((data)=>{
      let product = data.results
      setProduct(data);
    })
  }
  useEffect(() => {
    fetchData();
  }, [])



return (
      <div className="Table">
      <h3>Compliance Report</h3>
      {/* {product?.map(item, index)=>( */}

        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029", height: "20rem", overflowY: "scroll" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="left">SKU ID</TableCell>
                <TableCell align="left">Product Name</TableCell>
                <TableCell align="left">Compliance Status</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {product?.map((row, index) => (
                <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.business_name}
                  </TableCell>
                  <TableCell align="left">{row.sku_id}</TableCell>
                  <TableCell align="left">{row.product_name}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.failure_reasons)}>{row.failure_reasons === null ? "Compliant": "Not Compliant"}</span>
                  </TableCell>
                  <TableCell align="left" className="Details">Details</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      {/* )} */}

      </div>
  );
}
