import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownMultiple from './components/DropdownMultiple';
import Dropdown from './components/Dropdown';
import AppointmentTime from './components/AppointmentTime';

class Appointment extends Component {
    constructor(){
    super()
    this.state = {
      service: [
        {
          id: 0,
          title: 'Oil Change',
          selected: false,
          key: 'service',
          duration: 45
        },
        {
          id: 1,
          title: 'Brakes',
          selected: false,
          key: 'service',
          duration: 23
        },
        {
          id: 2,
          title: 'Baterry',
          selected: false,
          key: 'service',
          duration: 5
        },
        {
          id: 3,
          title: 'State Inspection',
          selected: false,
          key: 'service',
          duration: 6
        },
        {
          id: 4,
          title: 'Car Wash',
          selected: false,
          key: 'service',
          duration: 124
        },
        {
          id: 5,
          title: 'Extra Service',
          selected: false,
          key: 'service',
          duration: 98
        }
      ],
      vehicle: []
    }
  }

  toggleSelected = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
  }

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp
    })
  }

  componentDidMount(){
    fetch('http://localhost:3001/vehicles/1')
    .then((data) => data.json())
    .then((data) => {
      this.setState(function(prevState){
        prevState.vehicle = data;
        return prevState
      })
    })
    .catch(function(err){
      console.log(err)
    })
  }

  render() {
    let newState = 12345;
    return (
      <div>
        <div className="drop" align="center">
          <br /><br /><br />
          <br /><br />
          <p><b>Please select the car and services you would like to schedule</b></p>
          <br />
          <div className="wrapper">
            <Dropdown
              title="Select vehicle"
              list={this.state.vehicle}
              resetThenSet={this.resetThenSet}
            />
            
            <DropdownMultiple
              titleHelper="Service"
              title="Select service"
              list={this.state.service}
              toggleItem={this.toggleSelected}
            />
          </div>
        <br /><br />
        <p><b>Based on your selections your estimated appointment duration will be:
              </b></p><AppointmentTime duration={newState}/>
        <br /><br /><br /><br /><br /><br />
        </div>
      </div>
    );
  }
}

export default Appointment;
