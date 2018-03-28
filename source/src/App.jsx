import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import Concert from './Concert';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Homepage />}/>
          <Route exact path="/concert" component={() => <Concert />}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
