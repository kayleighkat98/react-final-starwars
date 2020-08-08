import React, { Component } from 'react'
//import './';

import MainPage from '../MainPage/MainPage';
import ResultsPage from '../ResultsPage/ResultsPage';
import ItemPage from '../ItemPage/ItemPage';

import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';

class App extends Component {

  render() {
    
      return (
        <Router>
          <Switch>
            <Route exact path ="/">
              <MainPage/>
            </Route>
            <Route exact path ="/results/">
              <ResultsPage/>
            </Route> 
            <Route path ="/results/:item">
              <ItemPage/>
            </Route> 
          </Switch>
        </Router>
      );
    
  }
}

export default App