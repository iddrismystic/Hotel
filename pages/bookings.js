import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect, useRef, useState } from "react";
export default function bookings() {
    const [data, setdata] = useState(null)
    useEffect(()=>{
     if (localStorage.getItem("booking")){
      setdata(
        JSON.parse(
          localStorage.getItem("booking")
        )
      )
      }else{

      }
    },[])
  return (
    <div>
        <Navbar />
        <div className="container padding-top-50 " style={{minHeight:"100vh"}}>
<div className="h2 section"> Bookings </div>
  <table className="table border">
    <tr>
      <td>Full Name</td>
      <td>Phone</td>
      <td>Room</td>
      <td>Departure</td>
      <td>Arrival</td>
    </tr>
   {
    data ? 
    data.map(doc=>(
        <tr key={doc.name + doc.phone}>
        <td>{doc.name}</td>
        <td>{doc.phone}</td>
        <td>{doc.room}</td>
        <td>{doc.departure}</td>
        <td>{doc.arrival}</td>
      </tr>
    ))
    :
    "No Data"
   }
  </table>
</div>
    </div>
  )
}
