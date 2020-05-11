import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import { Parallax } from "react-parallax";

const insideStyles = {
    background: "#262626",
    color: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };

class Contact extends React.Component {
    render (){
        return(
            <Parallax
            bgImage={require("../assets/rose-quartz.jpg")}
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
        ) 
    }
}

export default Contact