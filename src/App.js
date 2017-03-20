import React, { Component } from 'react';
import logo from './SplitSpaceLogo.png';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
    }
  }


  render() {

    let close = () => this.setState({ show: false});

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button bsStyle="link" onClick={() => this.setState({ show: true})}>About Us</Button>
        </div>
        <div className="content">
        </div>

        <div className="tabs">
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
          <Tab  eventKey={1} title="I Have Space">
            <h3> Benefits of renting space</h3>
            ● It lowers overhead expenses for the business <br/>
            ● Brings in more consumers to their store <br/>
            ● Opportunity to increase revenue <br/>
            ● Networking opportunities <br/>
            ● Collaboration with business owners and the community <br/>
            <h4><strong> As a space owner </strong></h4>
            <div className="actions">
              <Button bsStyle="primary">Sign Up</Button>
              <Button bsStyle="primary">Businesses</Button>
              <Button bsStyle="primary">Log In</Button>
            </div>
          </Tab>

          <Tab eventKey={2} title="I Need Space">
            <h3> Benefits of partnering up</h3>
            ● Grow your business, while minimizing risk <br/>
            ● Networking opportunities with other businesses <br/>
            ● Opportunities for increased revenue <br/>
            ● Collaboration with business owners and the community. <br/>
            <h4><strong> As a business looking for space</strong></h4>
            <div className="actions">
              <Button bsStyle="primary">Sign Up</Button>
              <Button bsStyle="primary">Businesses</Button>
              <Button bsStyle="primary">Log In</Button>
            </div>
          </Tab>
        </Tabs>
        </div>

        <Modal show={this.state.show} onHide={close} container={this} aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">About Us</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <strong>Our story</strong>: “St. Augustine is a community heavily dependent on local business. When Hurricane Matthew,
          a category 3 storm, hit the coast of Florida, many businesses were flooded and forced to leave their
          retail location. Our solution was to create SplitSpace, a simple way to find space for business owners
          to sell their products, mutually benefitting both space sharers.”<br/>

          <strong>Mission</strong>: “Our focus is to help businesses and entrepreneurs find space, and encourage them to collaborate
          with others to grow their brand. We offer listings completely free of charge so you can further your
          resources. Our easy-to-use website ensures you find what you need in an efficient way .”
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="info" onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}

export default App;
