import React from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';

function ViewData() {

    const{id}=useParams();

    const [oneData, setOneData] = useState([]);

    const getRelavantData=()=>{

        axios.get(`http://localhost:8000/resturant/get/${id}`).then((res) => {
            console.log(" Data get "+res);
            setOneData(res.data)
        }).catch((err) => {
            console.log(" Data not get "+err);
        })
    }

    useEffect(()=>{
        getRelavantData();
    },[])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <Card className="w-1/2 shadow-lg rounded-lg overflow-hidden">
      <Card.Header className="flex justify-center items-center bg-blue-500 text-white py-4">
        <h2 className='text-black'>Restaurant Details</h2>
      </Card.Header>

      <Card.Body className="p-6">
        <Card.Text>
          <div className="text-lg text-gray-700 space-y-4">
            <h3><span className="font-semibold">Restaurant Id:</span> {oneData._id}</h3>
            <h3><span className="font-semibold">Restaurant Name:</span> {oneData.name}</h3>
            <h3><span className="font-semibold">Restaurant Phone:</span> {oneData.phone}</h3>
            <h3><span className="font-semibold">Restaurant Address:</span> {oneData.address}</h3>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  )
}

export default ViewData
