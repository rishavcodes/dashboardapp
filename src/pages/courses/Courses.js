import React from 'react';
import MockData from "./MOCK_DATA.json";
import { useState } from "react";
import "./courses.css";

function Courses() {
  const [data, setData] = useState(MockData);
  const [order, setOrder] = useState("ASC");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) => 
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) => 
      a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };
  return (
    <div className='courseList'>
    <h1 className='courseListTitle'>Course list</h1>
      <table className='courseTable'>
        <thead>
          <th onClick={()=>sorting("Course_ID")} className='listItem'>Course_ID</th>
          <th onClick={()=>sorting("Semester")} className='listItem'>Semester</th>
          <th onClick={()=>sorting("Course_Name")} className='listItem'>Course Name</th>
          <th onClick={()=>sorting("Credits")} className='listItem'>Credits</th>
          <th onClick={()=>sorting("Faculty_Name")} className='listItem'>Faculty Name</th>
        </thead>
        <tbody>
          {data.map((d)=>(
            <tr key={d.id}>
              <td className='listItem'>{d.Course_ID}</td>
              <td className='listItem'>{d.Semester}</td>
              <td className='listItem'>{d.Course_Name}</td>
              <td className='listItem'>{d.Credits}</td>
              <td className='listItem'>{d.Faculty_Name}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Courses