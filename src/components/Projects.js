import React from 'react';
import Figure from 'react-bootstrap/Figure'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { motion } from 'framer-motion'




class Projects extends React.Component {
    render() {
      return (
        <div>
          <Row style={{marginBottom:'20px'}}>
        <motion.Figure
        className="mx-auto"
        whileHover={{
          scale:1.1
        }}
        transformTemplate={(props, transform) =>
          transform.replace(" translateZ(0)", "")
        }
        >
        <Figure.Image
          width={300}
          height={500}
          alt="171x180"
          src={require('../assets/soapbox.png')}
        />
        <Figure.Caption>
        Social media application that lets you create posts, follow others, or explore hashtags!
        </Figure.Caption>
        <Button href="https://github.com/ktonner/SocialMediaApp" target="_blank">Github</Button> 
        <Button href="https://sleepy-brook-72953.herokuapp.com/public" target="_blank">Deployed</Button>
      </motion.Figure>
      <motion.Figure
      className="mx-auto"
        whileHover={{
          scale:1.1
        }}
        transformTemplate={(props, transform) =>
          transform.replace(" translateZ(0)", "")
        }
        >
        <Figure.Image
          width={300}
          height={200}
          alt="171x180"
          src={require('../assets/booklogger.png')}
        />
        <Figure.Caption>
        Register as a user to track your favorite books.
        </Figure.Caption>
        <Button href='https://github.com/ktonner/full_stack_project'>Github</Button>
        <Button href='http://booklogger123.herokuapp.com/'>Deployed</Button>
      </motion.Figure>
      <motion.Figure
      className="mx-auto"
        whileHover={{
          scale:1.1
        }}
        transformTemplate={(props, transform) =>
          transform.replace(" translateZ(0)", "")
        }
        >
        <Figure.Image
          width={300}
          height={200}
          alt="171x180"
          src={require('../assets/notetaker.png')}
        />
        <Figure.Caption>
        Write down new notes, edit old ones, or delete them.
        </Figure.Caption>
        <Button href='https://github.com/ktonner/Note-Taker'>Github</Button> 
        <Button href='https://ktonner.github.io/Note-Taker/'>Deployed</Button>
      </motion.Figure>
      </Row>
      <Row>
      <motion.Figure
      className="mx-auto"
        whileHover={{
          scale: 1.1
        }}
        transformTemplate={(props, transform) =>
          transform.replace(" translateZ(0)", "")
        }
        >
        <Figure.Image
          width={300}
          height={200}
          alt="171x180"
          src={require('../assets/weatherdash.png')}
        />
        <Figure.Caption>
        Search for a city and check the weather for today, plus a five-day forecast. Uses third-party API.
        </Figure.Caption>
        <Button href="https://github.com/ktonner/Weather_Dash" target='_blank'>Github</Button> 
        <Button href="https://ktonner.github.io/Weather_Dash/" target='_blank'>Deployed</Button>
      </motion.Figure>
      <motion.Figure
      className="mx-auto"
        whileHover={{
          scale: 1.1
        }}
        transformTemplate={(props, transform) =>
          transform.replace(" translateZ(0)", "")
        }
        >
        <Figure.Image
          width={300}
          height={200}
          alt="171x180"
          src={require('../assets/quiz.png')}
        />
        <Figure.Caption>
        Test your coding knowledge in a fun quiz game. Earn points the faster you answer correctly and log your high score.
        </Figure.Caption>
        <Button href="https://github.com/ktonner/Coding_Quiz" target='_blank'>Github</Button> 
        <Button href="https://ktonner.github.io/Coding_Quiz/" target='_blank'>Deployed</Button>
      </motion.Figure>
      <motion.Figure
      className="mx-auto"
        whileHover={{
          scale: 1.1
        }}
        transformTemplate={(props, transform) =>
          transform.replace(" translateZ(0)", "")
        }
        >
        <Figure.Image
        className='budget'
          width={300}
          height={200}
          alt="171x180"
          src={require('../assets/budget.png')}
        />
        <Figure.Caption>
        Keep track of your budget with a dynamic graph.
        </Figure.Caption>
        <Button href="https://github.com/ktonner/PWA" target='_blank'>Github</Button> 
        <Button href="https://glacial-scrubland-56139.herokuapp.com/" target='_blank'>Deployed</Button>
      </motion.Figure>
      </Row>
      </div>
      )
    }
  }

  export default Projects