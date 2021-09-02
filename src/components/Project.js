import React from 'react';
import { Container, Card, Row, Col, Button } from "react-bootstrap";

function Project() {
    return (
        <Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2>My Projects</h2>
            <Row xs={1} xl={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Project;