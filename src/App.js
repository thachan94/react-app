import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route,Switch } from 'react-router-dom';
import Signup from "./containers/Signup";
import Signin from "./containers/Signin";
import Home from "./containers/Home";
import { MDBContainer, MDBListGroup, MDBListGroupItem } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


class App extends Component {
  render() {
    return (
      <Router>
        <MDBContainer>
          <MDBListGroup style={{ width: "22rem" }}>
            <MDBListGroupItem><Link to={'/'}> Home </Link></MDBListGroupItem>
            <MDBListGroupItem><Link to={'/signin'}> Signin </Link></MDBListGroupItem>
            <MDBListGroupItem><Link to={'/signup'}> Singup </Link></MDBListGroupItem>
          </MDBListGroup>
        </MDBContainer>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signin' component={Signin}/>
          <Route path='/signup' component={Signup}/>
        </Switch>
      </Router>

    )
  }
}

export default App;
