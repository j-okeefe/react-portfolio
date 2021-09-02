import React from 'react';
import { Container, Row, Form, Button } from "react-bootstrap";

function Contact() {
    return(
        <Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row lg="2" className='d-flex justify-content-center'>
            <div>
                <h2>Have some feedback? Pass it along!</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupTextArea">
                        <Form.Label>Feedback</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter Feedback" />
                        </Form.Group>
                    <Button variant="outline-secondary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            </Row>
        </Container>
    )
}
export default Contact;