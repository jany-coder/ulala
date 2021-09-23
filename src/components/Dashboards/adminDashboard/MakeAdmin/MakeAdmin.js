import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Card, Col, Container, Form, Modal, Row, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import SidebarAdminPanel from '../SidebarAdminPanel/SidebarAdminPanel';


export default function MakeAdmin () {
    const [modal, setModal] = useState(false);
    const [getAdmin, setGetAdmin] = useState([]);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/makeAdmin', {
            method :"POST",
            headers: {'ContentType':"application.json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => { setModal(true)})
    };

    useEffect(() => {
        fetch('http://localhost:5000/makeAdmin')
        .then(res => res.json())
        .then(data => setGetAdmin(data))
    });


    //css
    const book = { backgroundColor:"#f1f1f1", height:"100%"};
    const halfCol = { margin:"2rem 1rem"};
    const h6 = { margin:"0", padding:"1rem", backgroundColor:"#fff"};
    const titleBtn = { textDecoration: 'inherit', color: "white", backgroundColor: "#4f4f4f", border: "none", fontWeight: "500"};

    return (
    <div>
        <Container>
            <Row className="g-0">
                <Col><SidebarAdminPanel/></Col>
                <Col md={9}style={book}>
                    <h6 style={h6}>MAKE ADMIN</h6>
                    <Col style={halfCol} md={5}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group>
                                <Card.Text className="mb-2"><strong>Enter Email</strong></Card.Text>
                                <Form.Control name="email" type="email" ref={register({ required: true })}/>
                            </Form.Group>
                            <ButtonGroup>
                                <Button className="mt-3" type="submit" style={titleBtn}>Submit</Button>
                            </ButtonGroup>
                        </Form>

                        <Table className="mt-3">
                            <thead><tr><th>#</th><th>Admins List here...</th></tr></thead>
                            <tbody>
                                {getAdmin.map((admin, index) => <tr admin={admin} key={admin._id}>
                                        <td>{index + 1}</td>
                                        <td>{admin.email}</td> 
                                    </tr>)}
                            </tbody>
                        </Table>
                    </Col>
                </Col>
            </Row>
            {/* modal */}
            <Modal show={modal} onHide={()=>setModal(false)} centered>
                <Modal.Body><h6> Welcome, you're Admin now.</h6></Modal.Body>
                <Modal.Footer><Button variant="success btn-sm" onClick={()=> setModal(false)}>Close</Button></Modal.Footer>
            </Modal>
        </Container>
    </div>
    );
};