import axios from 'axios';
import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function ShowAllRes() {

    const [allData, setAllData] =useState([]);
    
    const getAllData=()=>{

        axios.get('http://localhost:8000/resturant/Alldata').then((res) => {
            console.log(res.data);
            setAllData(res.data)
        }).catch((err) => {
            console.log(" Data not Added "+err);
        }
        ) 
    }

useEffect(()=>{
   getAllData();
},[])


const RestDelete=(id)=>{

    axios.delete(`http://localhost:8000/resturant/delete/${id}`).then((res) => {
        console.log(" Data Deleted "+res);
    }).catch((err) => {
        console.log(" Data not Deleted "+err);
    })
}


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-11/12 lg:w-3/4 bg-white shadow-lg rounded-lg p-6">
        <Table responsive="sm" className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Address</th>
              <th className="p-3 border">Delete & Update</th>
              <th className="p-3 border">View</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((data) => (
              <tr key={data._id} className="even:bg-gray-100 odd:bg-white">
                <td className="p-3 border">{data.name}</td>
                <td className="p-3 border">{data.phone}</td>
                <td className="p-3 border">{data.address}</td>
                <td className="p-3 border">
                  <Button
                    variant="danger"
                    onClick={() => { RestDelete(data._id); }}
                    className="mr-2"
                  >
                    <i className="bi bi-trash3-fill"></i> Delete
                  </Button>
                  <a href={`/update/${data._id}`}>
                    <Button variant="success">
                      <i className="bi bi-arrow-counterclockwise"></i> Update
                    </Button>
                  </a>
                </td>
                <td className="p-3 border">
                  <a href={`/view/${data._id}`}>
                    <Button variant="danger">
                      <i className="bi bi-eye"></i> View
                    </Button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default ShowAllRes
