import React from "react";
import { render } from "react-dom";
import { Parallax } from "react-parallax";
import ReactCSSTransitionGroup from 'react-transition-group';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import CardColumn from "./components/CardColumns"
import Form from 'react-bootstrap/Form'


const styles = {
  fontFamily: "Inconsolata, Helvetica, Sans-Serif",
  textAlign: "center",
  backgroundColor: "#262626"
};
const insideStyles = {
  background: "#262626",
  color: "white",
  padding: 20,
  position: "absolute",
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

const gradientStyle = { 
  background: "linear-gradient(#00b33c, #330033);"
}

const image1 =
"https://cdn.pixabay.com/photo/2015/02/06/21/26/bismuth-626546_1280.jpg";

const image2="./assets/itme.jpg"


const HomePage = () => (
  <div style={styles}>
      <section id="home">
    <Parallax id="home" bgImage={image1} strength={400} blur={{ min: -1, max: 4 }}>
      <div style={{ height: 600 }}>
        <div style={insideStyles}><h2>Kathleen Tonner</h2>
        Full-Stack Developer</div>
      </div>
    </Parallax>
    </section>
    <h1>| | |</h1>
    

        {/* ABOUT SECTION */}
        <div style={styles}>
      <section id="about">
    <Parallax strength={400} blur={{ min: 0, max: 6 }}>
      <div style={{ height: 600 }}>
      <Container style={{position:"relative",top:"15%", left:"6%"}} className="mx-auto">
  <Row>
    <Col xs={6} md={4}>
      <Image src={require("./assets/itme.jpg")} roundedCircle />
    </Col>
    <Col xs={6} md={4}>
     
        <p className="aboutP"><b>Full Stack Web Developer</b> using a background in content creation to create clean, comprehensive code. Earned a certificate in Full Stack Development from the University of Central Florida, with developed skills in JavaScript, CSS, and Node.js. Applied strong back-end development with MySQL and collaboration skills when working in a team on a recent project to create a book logging application for users to keep track of their favorite books. I am accustomed to working tight deadlines and adapting. Looking forward to contributing to a team’s success and making better digital products. 
</p>
        </Col>
  </Row>
</Container>
      </div>
    </Parallax>
    </section>
    </div>
    <h1>| | |</h1>

    {/* SELECTED PROJECTS */}
    <section id="work">
    <Parallax id="work"  blur={{ min: -1, max: 4 }}>
      <div style={{ height: 900 }}>
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
    <Parallax
      bgImage={require("./assets/rose-quartz.jpg")}
      strength={200}
      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(0, 153, 77, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 500,
              height: percentage * 500
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
        <div style={insideStyles}><h3>Contact:</h3>
        <Form style={{width:"400px"}}>
        <Form.Group controlId="formGroupName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="email" placeholder="Name" />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>
  <Form.Group controlId="formGroupMessage">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="3" placeholder="Message" />
  </Form.Group>
</Form>
        </div>
      </div>
    </Parallax>
    </section>
    <div style={{ height: 100 }} />
    <h2>{"\u2728"}</h2>
  </div>
);

export default HomePage
