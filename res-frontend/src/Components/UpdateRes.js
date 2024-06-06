import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function UpdateRes() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [addr, setAddr] = useState("");
    const [oneData, setOneData] = useState([]);

    const {id}=useParams();

    const UpdateData=(e)=>{
        e.preventDefault();

        const updatedData={
            name:name,
            phone:phone,
            address:addr
        }
        
        axios.put(`http://localhost:8000/resturant/update/${id}`,updatedData).then((res) => {
            console.log(" Data Updated "+res);
        }).catch((err) => {
            console.log(" Data not Updated "+err);
        })
    }


    const getOneData=()=>{
        axios.get(`http://localhost:8000/resturant/get/${id}`).then((res) => {
            console.log(" Data get "+res);
            setOneData(res.data)
        }).catch((err) => {
            console.log(" Data not get "+err);
        })
    }

    useEffect(()=>{
        getOneData();
    },[])

  return (
    <div className="flex justify-center items-center h-screen">
    <Card className="w-1/2">
      <div className="flex justify-center mt-4">
        <h1>Update Restaurant</h1>
      </div>

       <Card.Body>
         <Card.Text>
         <Form>

   <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Name</Form.Label>
     <Form.Control type="Name" placeholder={oneData.name} onChange={(e)=>setName(e.target.value)}/>
   </Form.Group>

              
   <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Phone number</Form.Label>
     <Form.Control type="phone" placeholder={oneData.phone} onChange={(e)=>setPhone(e.target.value)}/>
   </Form.Group>

              
   <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Address</Form.Label>
     <Form.Control type="Address" placeholder={oneData.address} onChange={(e)=>setAddr(e.target.value)}/>
   </Form.Group>

 <div className="flex justify-center mt-4">
   <Button variant="primary" type="submit" onClick={UpdateData} className="flex justify-center">
     Update
   </Button>
</div>

 </Form>
         </Card.Text>
       </Card.Body>
     </Card>
 </div>
  )
}

export default UpdateRes
