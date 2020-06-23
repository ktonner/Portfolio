import React from "react";
import Col from 'react-bootstrap/Col'
import './style.css'

const Projects = () => (
    <Col>
    <h3 class='project-title'>Book Logger</h3>
    <img class='project-card' src={require("../../assets/booklogger.png")} alt="Book Logger" />

    <h3 class='project-title'>Weather Dashboard</h3>
    <img class='project-card' src={require("../../assets/weatherdash.png")} alt="Weather Dashboard" />
    </Col>
)

export default Projects