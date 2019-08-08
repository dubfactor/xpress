import React, { Component } from 'react'
// import FontAwesome from 'react-fontawesome'
import '../styles/global.css'

class AppointmentTime extends Component{
    state = {
        duration: 0
      }
    
      componentDidMount() {
        const { duration} = this.props;
        this.setState({ duration: duration });
      }
      
      render () {
        const { duration } = this.state;    
        return (
            <p>{duration}</p>
        );
      }
    }

export default AppointmentTime