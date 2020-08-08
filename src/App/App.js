import React, { Component } from 'react'
//import './';

import MainPage from '../MainPage/MainPage';
import ResultsPage from '../ResultsPage/ResultsPage';
import ItemPage from '../ItemPage/ItemPage';

import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      baseUrl:'https://swapi-thinkful.herokuapp.com/api/',

      categories: [],

      loading: false,

    };
  }
  componentDidMount(){
    fetch(this.state.baseUrl) 
      .then(res => res.json())
      .then(data=>{ 
        console.log(Object.entries(data))
        this.setState({
          loading: true,
          categories: Object.entries(data),
        })
     })
  }


  render() {

    let { loading, categories } = this.state;
    if (!loading){
      return <div>Loading...</div>
    }
    else {
      console.log(categories[0]);

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
}

export default App