import React from "react";
import { render } from "react-dom";
import { Parallax } from "react-parallax";
import { Spring } from 'react-spring/renderprops'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import CardColumn from "./components/CardColumns"
import Projects from './components/Projects/Projects'
import Contact from './components/ContactForm'
import Trail from './components/Trail/Trail'

const styles = {
  fontFamily: "Inconsolata, Helvetica, Sans-Serif",
  textAlign: "center",
  backgroundColor: "#262626"
};

const insideStyles = {
  background: "#262626",
  width: "400px",
  color: "white",
  position: "absolute",
  padding: "20px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};


const insideStylesTitle = {
    background: "#262626",
    color: "white",
    position: "absolute",
    top: "6%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };


const image1 =
"https://cdn.pixabay.com/photo/2015/02/06/21/26/bismuth-626546_1280.jpg";



const HomePage = () => (
  <div style={styles}>
      <section id="home">
    <Parallax id="home" bgImage={image1} strength={400} blur={{ min: -1, max: 4 }}>
      <div style={{ height: 600 }}>
      <Trail items={[<h2>Kathleen Tonner</h2>,
        <h5>Full-Stack Developer</h5>,
      <a href="https://github.com/ktonner" target="_blank">Github</a>]}/>
      </div>
    </Parallax>
    </section>
    <h1>| | |</h1>
    

        {/* ABOUT SECTION */}
        <div style={styles}>
      <section id="about">
    <Parallax strength={400} blur={{ min: 0, max: 6 }}>
      <div style={{ height: 1000 }}>
      <Container style={{position:"relative",top:"15%", left:"6%"}} className="mx-auto">
  <Row>
    <Col xs={6} md={4}>
      <Image src={require("./assets/itme.jpg")} roundedCircle />
    </Col>
    <Col xs={6} md={4}>
     
        <p className="aboutP"><b>Full Stack Web Developer</b> with 3 years of professional experience. Known for creating clean, comprehensive code. Earned a certificate in Full Stack Development from the University of Central Florida, with developed skills in JavaScript, CSS, and Node.js. 
</p>
        </Col>
  </Row>
</Container>
      </div>
    </Parallax>
    </section>
    </div>
    <h1>| | |</h1>


{/* SKILLS */}

    <section id="skills">
    <Parallax id="skills" bgImage={require("../src/assets/landscape.jpg")} strength={400} blur={{ min: -1, max: 4 }}>
      <div style={{ height: 700 }}>
        <div style={insideStyles}><h2>Skills</h2>
        <Container style={{position:"relative",top:"15%", left:"-10%"}}>
        <Row>
        <Col xs={6} md={4} className="mx-auto">
        <h5>Languages</h5>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Node.js</li>
          <li>SQL</li>
          <li>C#</li>
          <li>Java</li>
          <li>Python</li>
        </ul>
        </Col>
        <Col xs={6} md={4}className="mx-auto">
          <h5>Applications</h5>
        <ul>
        <li>AWS</li>
        <li>Docker</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>Express</li>
        <li>Vue</li>
        <li>Angular</li>
        <li>React</li>
        <li>Mongoose</li>
        </ul>
        </Col>
        </Row>
        </Container>
        </div>
      </div>
    </Parallax>
    </section>
    <h1>| | |</h1>
    

    {/* SELECTED PROJECTS */}
    <section id="work">
    <Parallax id="work"  blur={{ min: -1, max: 4 }}>
      <div style={{ height: 950 }}>
        <div style={insideStylesTitle} className="lead"><h3>Select Projects</h3></div>
        <Container fluid>
  <Row>
  <CardColumn />
  </Row>
</Container>
      </div>
    </Parallax>
    </section>
    <h1>| | |</h1>

    {/* CONTACT */}
<section id="contact">
  <Contact/>
    </section>
    <div style={{ height: 100 }} />
    <h2>{"\u2728"}</h2>
    <p className='attr'>Icon made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
  <br></br>
  </div>
);

export default HomePage
