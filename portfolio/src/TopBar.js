import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, animateScroll as scroll } from "react-scroll";
import { withRouter } from "react-router-dom";

export default class TopBar extends Component {
    scrollToTop = () => {
      scroll.scrollToTop();
    };
  
    render(){
    return (
    <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto justify-content-center">
          <Nav.Link href="/" onClick={this.scrollToTop}>
            Home
          </Nav.Link>
          <Nav.Link href="/" active={pathname == "#work"}>
            Work
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
}