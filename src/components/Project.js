import React from 'react';
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import SteamRoulette from "../assets/images/steamroulettess.jpeg";
import MyTotalHealth from "../assets/images/mytotalhealthss.jpeg";
import WorkDayScheduler from "../assets/images/workdayschedulerss.jpeg";
import YoSanta from "../assets/images/yoSanta.PNG";

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
            <Col>
                        <Card>
                            <Card.Img variant="top" src={SteamRoulette} thumbnail />
                            <Card.Body>
                            <Card.Title>Steam Roullette</Card.Title>
                            <Card.Text>
                                Don't know what game to play on Steam next? Check out "Steam Roulette," where we'll shuffle the entire Steam Library for you! Don't like our suggestion? Click the randomizer as much as you want until you find a game that piques your interest!
                            </Card.Text>
                            <Card.Link href="https://agraysargent.github.io/Game-Randomizer/">Visit Site</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={MyTotalHealth} thumbnail />
                            <Card.Body>
                            <Card.Title>My Total Health</Card.Title>
                            <Card.Text>
                                "My Total Health" is a web application which takes in user input on exercise routines, personal biometrics and nutritional data (food logging), then saves the data in a database where it can be accessed and compared over time.
                            </Card.Text>
                            <Card.Link href="https://whispering-sea-14639.herokuapp.com/">Visit Site</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={WorkDayScheduler} thumbnail />
                            <Card.Body>
                            <Card.Title>Work Day Scheduler</Card.Title>
                            <Card.Text>
                                Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
                            </Card.Text>
                            <Card.Link href="https://j-okeefe.github.io/day-planner/">Visit Site</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={YoSanta} thumbnail />
                            <Card.Body>
                            <Card.Title>Yo Santa!</Card.Title>
                            <Card.Text>
                                Yo Santa is a holiday booking service that utilizes Apollo, React, Express, GraphQL, MongoDB, Node and Material-UI. It is a service that allows users to hire an entertainer for a holiday event for a set amount of time.
                            </Card.Text>
                            <br></br>
                            <Card.Link href="https://powerful-meadow-82494.herokuapp.com">Visit Site</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </Container>
        
    );
}

export default Project;