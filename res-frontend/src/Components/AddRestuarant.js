import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'



function AddRestuarant() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [addr, setAddr] = useState("");

    const submit = (e) => {
        e.preventDefault();

        const restData={
            name:name,
            phone:phone,
            address:addr
        }

        axios.post('http://localhost:8000/resturant/add',restData).then((res) => {
            console.log(" Data Added "+res);

            Swal.fire({
              icon: "success",
              title: "Data Added",
              text: "Data Added Successfully",
            });

        }).catch((err) => {
            console.log(" Data not Added "+err);

            Swal.fire({
              icon: "error",
              title: "Opps!",
              text: "Data Added Failed",
            });

        })
    }

  return (
    <div className="flex justify-center items-center h-screen">
  <Card className="w-1/2">
    <div className="flex justify-center mt-4">
      <h1>Add Restaurant</h1>
    </div>

    <Card.Body>
      <Card.Text>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="Name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="phone" placeholder="Phone number" onChange={(e) => setPhone(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control type="Address" placeholder="Address" onChange={(e) => setAddr(e.target.value)} />
          </Form.Group>

          <div className="flex justify-center mt-4">
            <Button variant="primary" type="submit" onClick={submit} className="flex justify-center">
              Submit
            </Button>

            <div className="m-1"></div>

            <a href='/allData'>
    <Button variant="primary" className="flex justify-center">
        View Restaurants
    </Button>
</a>

          </div>

        </Form>
      </Card.Text>
    </Card.Body>
  </Card>
</div>

  )
}

export default AddRestuarant
