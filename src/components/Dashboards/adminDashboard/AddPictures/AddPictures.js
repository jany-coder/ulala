import React, {  useState } from 'react';
import { Button, Container, Row, Col, Form, ButtonGroup, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import SidebarAdminPanel from '../SidebarAdminPanel/SidebarAdminPanel';
const axios = require('axios').default;


export default function AddPictures() {
    const [modal, setModal] = useState(false);
    const [imageURL, setImageURL] = useState(null);
    
    const handleImage = (e) => {
        const imageData = new FormData();
        imageData.set('key','b2a8c1019e708e7ea598c7344f0020f7')
        imageData.append('image',e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {console.log(error)});
        }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {  const addPictures = { title: data.title, price: data.price, imageURL: imageURL, description: data.description}
        if (imageURL) {
            fetch('http://localhost:5000/addPictures', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(addPictures)
            })
            .then(res => res.json())
            .then(data => {  setModal(true); 
            })
        }
    };

    //css
    const titleBtn = { textDecoration: 'inherit', color: "white", backgroundColor: "#4f4f4f", border: "none", fontWeight: "500", width: "100%" };
    const file = { width: "100%", border: "1px solid #f7fffb", borderRadius: ".3rem", backgroundColor: "#fff" }
    const book = { backgroundColor:"#f1f1f1", height:"100%"};
    const halfCol = { margin:"2rem 1rem"};
    const h6 = { margin:"0", padding:"1rem", backgroundColor:"#fff"};
    
    return (
    <div>
        <Container>
            <Row className="g-0">
                <Col><SidebarAdminPanel/></Col>
                <Col md={9}style={book}>
                    <h6 style={h6}>ADD ITEMS</h6>
                    <Col style={halfCol} md={6}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group>
                                <Form.Control name="title" ref={register({ required: true })} className="mb-2" placeholder="Enter title"/>
                                <Form.Control name="price"  ref={register({ required: true })} className="mb-2" type="number"  placeholder="Enter price"/>
                                <Form.Control name="description"  as="textarea" rows={4}  ref={register({ required: true })} className="mb-2" placeholder="Enter Description"/>
                                <Form.Control name="image"onChange={handleImage} ref={register({ required: true })} className="mb-1" type="file" style={file} />
                                {imageURL && <strong >Image uploaded successfully.</strong>}
                            </Form.Group>
                            <ButtonGroup>
                                <Button className="mt-3" type="submit" style={titleBtn}>Save to database</Button>
                            </ButtonGroup>
                        </Form>
                    </Col>
                </Col>
            </Row>

            {/* modal */}
            <Modal show={modal} onHide={()=>setModal(false)} centered>
                <Modal.Body><h6>Destination added successfully.</h6></Modal.Body>
                <Modal.Footer><Button variant="success btn-sm" onClick={()=> setModal(false)}>Close</Button></Modal.Footer>
            </Modal>
        </Container>
    </div>
    );
};

