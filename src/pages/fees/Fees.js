import React from 'react';

function Fees() {
  return (
    <div>
      <h1 className='feeListTitle'>Fees </h1>
      <table className='feeTable'>
        <thead>
          <th  className='listItem'>Semester</th>
          <th  className='listItem'>Semester Start Date</th>
          <th  className='listItem'>Semester End Date</th>
          <th  className='listItem'>Passing-Status</th>
          <th  className='listItem'>Fee Status</th>
        </thead>
        <tbody>
          {data.map((d)=>(
            <tr key={d.id}>
              <td className='listItem'>{d.Semester}</td>
              <td className='listItem'>{d.Semester_Start_Date}</td>
              <td className='listItem'>{d.Semester_End_Date}</td>
              <td className='listItem'>{d.Passing_status}</td>
              <td className='listItem'>{d.Status}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Fees;
