import React from "react";
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

const CardColumn = () => (

<CardColumns style={{position:"absolute",top:"20%"}}>
  <Card>
    <Card.Img variant="top" src="../assets/weatherdash.png" alt="Weather Dashboard" />
    <Card.Body>
      <Card.Title>Weather Dashboard</Card.Title>
      <Card.Text>
        Search for a city and check the weather for today, plus a five-day forecast. Uses third-party API.
      </Card.Text>
    </Card.Body>
    <footer>
        <small className="text-muted">
          <a href="https://github.com/ktonner/Weather_Dash">Repo</a> | <a href="https://ktonner.github.io/Weather_Dash/">Deployed</a>
        </small>
      </footer>
  </Card>
  <Card className="p-3">
  <Card.Img variant="top" src="./assets/weatherdash.png" alt="Weather Dashboard" />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
        Search for a city and check the weather for today, plus a five-day forecast. Uses third-party API.
      </Card.Text>
    </Card.Body>
    <footer>
        <small className="text-muted">
          <a href="https://github.com/ktonner/Weather_Dash">Repo</a> | <a href="https://ktonner.github.io/Weather_Dash/">Deployed</a>
        </small>
      </footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="primary" text="white" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card className="text-center">
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img src="holder.js/100px160" />
  </Card>
  <Card className="text-right">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Card.Text>  
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>
</CardColumns>
)

export default CardColumn;