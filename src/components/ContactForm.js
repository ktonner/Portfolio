import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import { Parallax } from "react-parallax";
import Button from 'react-bootstrap/Button';
import axios from 'axios'

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

    handleSubmit(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        console.log(name)
        axios({
            method: "POST",
            url: "http://localhost:3000/send",
            data: {
                name: name,
                email: email,
                messsage: message
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                alert("Message failed to send.")
            }
        })
    }


    resetForm() {
        document.getElementById('contact-form').reset();
    }

    render() {
        return (
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
                    <h4>kathleentonner@gmail.com</h4>
                        {/* <Form style={{ width: "400px" }}>
                            <Form.Group controlId="formGroupName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="textarea" placeholder="Name" id="name" />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Email" id ="email" />
                            </Form.Group>
                            <Form.Group controlId="formGroupMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Message" id="message" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                                Submit
                             </Button>
                        </Form> */}
                    </div>
                </div>
            </Parallax>
        )
    }
}

export default Contact