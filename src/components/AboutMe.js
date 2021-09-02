import React from 'react';
import { Container, Image, Row, Col } from "react-bootstrap";
import Pic from "../assets/images/myPicture.jpg";

function About() {
    return (
        <Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="text-center">
                <Image src={Pic} thumbnail/>
            </div>
            
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h2>About Me</h2>
                    <div className="">
                        <p>
                        My name is James O'Keefe and I am a practicing web developer currently enrolled in the UConn Coding Bootcamp. My background is in customer service but I am looking to start my career in web development. Outisde of work I enjoy golfing, hiking, and spending time with my family and friends. My wife and I have recently welcomed our first child in to the world!
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default About;