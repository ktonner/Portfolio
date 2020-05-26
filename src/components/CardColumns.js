import React from "react";
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

const CardColumn = () => (

<CardColumns style={{position:"absolute",top:"10%", width: "100%"}}>
  <Card>
    <Card.Img variant="top" src={require("../assets/weatherdash.png")} alt="Weather Dashboard" />
    <Card.Body>
      <Card.Title>Weather Dashboard</Card.Title>
      <Card.Text>
        Search for a city and check the weather for today, plus a five-day forecast. Uses third-party API.
      </Card.Text>
    </Card.Body>
    <footer>
        <small className="text-muted">
          <a href="https://github.com/ktonner/Weather_Dash" target="_blank">Repo</a> | <a href="https://ktonner.github.io/Weather_Dash/" target="_blank">Deployed</a>
        </small>
      </footer>
  </Card>
  <Card className="p-3">
  <Card.Img variant="top" src={require("../assets/booklogger.png")} alt="Book Logger" />
    <Card.Body>
      <Card.Title>Book Logger</Card.Title>
      <Card.Text>
        Register as a user to track your favorite books.
      </Card.Text>
    </Card.Body>
    <footer>
        <small className="text-muted">
          <a href="https://github.com/ktonner/full_stack_project" target="_blank">Repo</a> | <a href="http://booklogger123.herokuapp.com/" target="_blank">Deployed</a>
        </small>
      </footer>
  </Card>
  <Card className="text-center">
  <Card.Img variant="top" src={require("../assets/soapbox.png")} />
    <Card.Body>
      <Card.Title>Soapbox</Card.Title>
      <Card.Text>
        Social media application that lets you create posts, follow others, or explore hashtags!
      </Card.Text>
    </Card.Body>
    <footer>
        <small className="text-muted">
          <a href="https://github.com/ktonner/SocialMediaApp" target="_blank">Repo</a> | <a href="https://sleepy-brook-72953.herokuapp.com/public" target="_blank">Deployed</a>
        </small>
      </footer>
  </Card>
  <Card className="text-center">
  <Card.Img variant="top" src={require("../assets/budget.jpg")} />
    <Card.Body>
      <Card.Title>Budget Tracker</Card.Title>
      <Card.Text>
        Keep track of your budget with a dynamic graph.
      </Card.Text>
    </Card.Body>
    <footer>
        <small className="text-muted">
          <a href="https://github.com/ktonner/PWA" target="_blank">Repo</a> | <a href="https://glacial-scrubland-56139.herokuapp.com/" target="_blank">Deployed</a>
        </small>
      </footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={require("../assets/notetaker.png")} />
    <Card.Body>
      <Card.Title>Note Taker</Card.Title>
      <Card.Text>
       Write down new notes, edit old ones, or delete them.
      </Card.Text>
    </Card.Body>
    <footer>
        <small className="text-muted">
          <a href="https://github.com/ktonner/Note-Taker" target="_blank">Repo</a> | <a href="https://ktonner.github.io/Note-Taker/" target="_blank">Deployed</a>
        </small>
      </footer>
  </Card>
  <Card className="text-center">
  <Card.Img variant="top" src={require("../assets/codingquiz.png")} />
    <Card.Body>
      <Card.Title>Coding Quiz</Card.Title>
      <Card.Text>
        Test your coding knowledge in a fun quiz game. Earn points the faster you answer correctly and log your high score.
      </Card.Text>
    </Card.Body>
    <footer>
        <small className="text-muted">
          <a href="https://github.com/ktonner/Coding_Quiz" target="_blank">Repo</a> | <a href="https://ktonner.github.io/Coding_Quiz/" target="_blank">Deployed</a>
        </small>
      </footer>
  </Card>
</CardColumns>
)

export default CardColumn;