import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Body from './Body';
import Appointment from './Appointment';
// import Calendar from './CalendarComponent';
import './Navigation.css';
import {
  NavbarBrand
} from 'reactstrap';


class Navigation extends Component {
  render() {
    return (
      <div>
        <NavbarBrand>
          <img left="true" alignt="top" src="https://www.xpressoilchangeplus.com/wp-content/uploads/2017/08/logo-xpress-325x80.png" alt="Logo" />
        </NavbarBrand>
      <Router>
        <div className="Navigation">
          <div className="container">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="https://www.xpressoilchangeplus.com/auto-services/">Services</a></li>
              <li><a href="https://www.xpressoilchangeplus.com/coupons/">Coupons</a></li>
              <li><a href="https://www.xpressoilchangeplus.com/oil-change-faqs/">FAQ</a></li>
              <li><a href="https://www.xpressoilchangeplus.com/about-xpress-oil-change-plus/">About</a></li>
              <li><a href="https://www.xpressoilchangeplus.com/georgetown-oil-change-location/">Locations</a></li>
              <li><a href="https://www.donhewlett.com/">Don Hewlett</a></li>
              {/* <li><Link to="/Calendar">Calendar</Link></li> */}
              <li><Link to="/Appointment">Appointment</Link></li>
            </ul>
            </div>
          <hr/>
          <Switch>
            <Route exact={true} path="/" component={Body} />
            <Route path="/Appointment" component={Appointment} />
            {/* <Route path="/CalendarComponent" component={Calendar} /> */}
          </Switch>
          </div>
      </Router>
      </div>
)}};


export default Navigation;