import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';


const Plans = [
    {
        name: 'Ulala',
        price: 10
    },
    {
        name: 'Ulala',
        price: 15
    },
    {
        name: 'Ulala',
        price: 20
    }
]

const Subscription = () => {
   

    return (
        <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                <h1 className="mb-5 text-center">Choose Your Plan</h1>
            {
                Plans.map((plan) => (
                    <div className="col-md-4">
                      <div className="d-flex justify-content-evenly">
                        <Card  className="shadow mb-4" style={{ borderRadius: "20px", border: 0, width: '20rem' }}>
                           
                            <Card.Body className="text-center pricing-card-head">
                                <Card.Title>{plan.name}</Card.Title>
                                   <Card.Subtitle>
                                    <p className="text-success">Get First Weak Free, Then </p>
                                     <h1 className="font-weight-normal mb-4"> ${plan.price}</h1>
                                   </Card.Subtitle>
                                <Card.Text className="text-primary">
                                   
                                   Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                
                                </Card.Text>
                                <Button className="btn btn-outline-primary btn-block " variant="primary">SELECT</Button>
                            </Card.Body>
                        </Card>
                      </div>

                    </div>
                ))

            }

        </div>
        </div>
    );
};

export default Subscription;