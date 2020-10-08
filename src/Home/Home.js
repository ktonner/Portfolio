import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './home.css'
import Decorations from '../Components/Decorations/Decorations'
import { motion } from "framer-motion";
import Contact from '../Components/Contact/index'


const variants = {
    visible: { opacity: 1, y:50 },
    hidden: { opacity: 0 },
  }

const variants2 = {
    visible: { opacity: 1, y:-20 },
    hidden: { opacity: 0 },
}

const Home = () => (
    <div>
        <Container>
            <Row>
                <Col xs={6} md={6} className='mx-auto'>
                    <br></br>
                    <Decorations />
                    <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{
                            ease: "easeOut",
                            default: { duration: 1 }
                        }}
                    >
                        <h1 className='title' style={{'z-index':3}}>Kathleen Tonner</h1>
                    </motion.div>
                    <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants2}
                    transition={{
                            ease: "easeOut",
                            delay: 1,
                            default: { duration: 2.3 }
                        }}
                    >
                        <h2 className='subtitle'>Full Stack Developer</h2>
                        </motion.div>
                        </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6} className='mx-auto'>
                    <p><b>Full Stack Developer</b> using a background in content creation to create clean, comprehensive code. Earned a certificate in Full Stack Development from the University of Central Florida, with developed skills in JavaScript, CSS, and Node.js. Applied strong front-end development with React and collaboration skills on Social Media project 'Soapbox'. I am accustomed to working tight deadlines and adapting. Looking forward to contributing to a team’s success and making better digital products.
</p>

                    <br></br>
                </Col>
            </Row>
            <Row>
                <Col md={6} className='mx-auto'>
                    <Contact />
                </Col>
            </Row>
        </Container>
    </div>
)

export default Home