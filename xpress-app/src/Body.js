import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

class Body extends Component {
  render() {
    return (
      <Jumbotron>
        <Container>
          <Row>
            <Col align="center">
              <p align="center">The wait for a smarter, faster way to give your car the complete routine care it needs is officially over. Xpress Oil Change Plus is a new concept designed to respect your time, protect your vehicle’s value, and keep more money in your wallet.</p>
              <br /><br />
              <Button align="center" color="danger"><h2><b>CREATED XPRESSLY FOR YOU IN ABOUT ONE HOUR</b></h2></Button>
              <br /><br />
              <p align="center">A custom-made, state-of-the-art, 12-bay facility that focuses on nothing but quick oil changes, maintenance, and other routine services. Xpress Oil Change Plus, serving Georgetown, Round Rock, Cedar Park, Austin, and surrounding areas, means your car’s regular service isn’t wedged in line between vehicles with major repairs.</p>
              <br />
              <p align="center">
              <Button tag="a" color="success" size="large">Sign-up Now</Button>
              </p>
              <br />
              <Button align="center" color="danger"><h2><b>NO APPOINTMENT NECESSARY!</b></h2></Button>
              <br /><br />
              <p align="center">No Appointment needed, but if you’d like to make one, you’re welcome to:</p>
              <br />
              <p align="center">
              <Button tag="a" color="success" size="large">MAKE AN APPOINTMENT</Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
);
}
}

export default Body;