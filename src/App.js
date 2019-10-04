import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Signup from "./containers/Signup";
import Login from "./containers/Login";

class App extends Component {
  render() {
    return (
      <HashRouter>
            <Switch>
              <Route path="/signup" exact component={Signup} />
              <Route path="/login" exact component={Login} />
            </Switch>
      </HashRouter>
    );
  }
}

export default App;
