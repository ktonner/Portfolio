import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './style.css'
import Button from 'react-bootstrap/Button'

const Projects = () => (
    <div>
        <Container style={{position:"absolute",top:"10%", width: "100%", left: '13%'}}>
        <Row>
    <Col>
    <div class='project'>
        <h3 class='project-title'>Book Logger</h3>
        <img class='project-card' src={require("../../assets/booklogger.png")} alt="Book Logger" />
        </div>

        <div class='project'>
        <h3 class='project-title'>Weather Dashboard</h3>
        <img class='project-card' src={require("../../assets/weatherdash.png")} alt="Weather Dashboard" />
        </div>
    </Col>

    <Col>
        <div class='project'>
        
        <h3 class='project-title'>Soapbox</h3>
        <img class='project-card' src={require("../../assets/soapbox.png")} alt="Soapbox" onClick='' />
        </div>

        <div class='project'>
        <h3 class='project-title'>Budget Tracker</h3>
        <img class='project-card' src={require("../../assets/budget.jpg")} alt="Budget Tracker" />
        </div>
    </Col>

    <Col>
    <div class='project'>
        <h3 class='project-title'>Note Taker</h3>
        <img class='project-card' src={require("../../assets/notetaker.png")} alt="Note Taker" />
        </div>

        <div class='project'>
        <h3 class='project-title'>Coding Quiz</h3>
        <img class='project-card' src={require("../../assets/codingquiz.png")} alt="Coding Quiz" />
        </div>
    </Col>

    </Row>
    </Container>
    </div>
)

export default Projects