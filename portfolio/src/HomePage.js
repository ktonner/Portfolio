import React from "react";
import { render } from "react-dom";
import { Parallax } from "react-parallax";
import ReactCSSTransitionGroup from 'react-transition-group';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import CardColumn from "./components/CardColumns"


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

const bgImageStyle1 = {
    backgroundRepeat: "repeat-y",
    resizeMode: "repeat"
}

const insideStylesTitle = {
    background: "#262626",
    color: "white",
    padding: 10,
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };

const image1 =
"https://cdn.pixabay.com/photo/2015/02/06/21/26/bismuth-626546_1280.jpg";
  
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const HomePage = () => (
  <div style={styles}>
    <Parallax bgImage={image1} strength={400} blur={{ min: -1, max: 4 }}>
      <div style={{ height: 600 }}>
        <div style={insideStyles}><h2>Kathleen Tonner</h2>
        Full-Stack Developer</div>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax id="work" bgImage={require("./assets/hip-square.png")} bgImageStyle={{bgImageStyle1}} blur={{ min: -1, max: 4 }}>
      <div style={{ height: 700 }}>
        <div style={insideStylesTitle} className="lead"><h3>Select Projects</h3></div>
        <Container fluid>
  <Row>
  <CardColumn />
  </Row>
</Container>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax bgImage={image3} strength={-100}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Reverse direction</div>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax
      bgImage={image4}
      strength={200}
      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 125, 0, ${percentage * 1})`,
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
        <div style={insideStyles}>renderProp</div>
      </div>
    </Parallax>
    <div style={{ height: 500 }} />
    <h2>{"\u2728"}</h2>
  </div>
);

export default HomePage
