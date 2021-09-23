import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import SidebarAdminPanel from '../SidebarAdminPanel/SidebarAdminPanel';
import OrderListCard from './OrderListCard';


export default function OrderList () {
    const [orderLists, setOrderLists] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [spinner, setSpinner] = useState(true);
    
    useEffect(() => {
        fetch('http://localhost:5000/allOrderList')
        .then(res => res.json())
        .then(data => { setOrderLists(data); setSpinner(false)})
    }, [toggle]);

    //css
    const book = { backgroundColor:"#f1f1f1"};
    const h6 = { margin:"0", padding:"1rem", backgroundColor:"#fff"};
    const halfCol  ={lineHeight:"1.2rem",  background: "rgba(255,255,255,0.8)",
                boxShadow: "10px 10px 20px -6px rgba(0,0,0,0.2)", margin:"1rem", borderRadius:".5rem"}

    
return (
    <div>
        <Container>
            <Row className="g-0">
                <Col><SidebarAdminPanel/></Col>
                <Col md={9}style={book}>
                    <h6 style={h6}>ORDER LIST</h6>
                    <Col style={halfCol} >
                        <Table>
                            <thead><tr><th>Name</th> <th>Email ID</th><th>Destination</th><th>Status</th></tr> </thead>
                            <tbody>
                                {orderLists.map(orderList => <OrderListCard toggle={toggle} setToggle = {setToggle} orderList={orderList} key={orderList._id}> </OrderListCard>)}
                            </tbody>
                        </Table>
                        <Row> 
                            {spinner && <div className="text-center"> <Spinner animation="border" variant="success" /></div>} 
                        </Row>
                    </Col>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

