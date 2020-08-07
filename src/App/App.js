import React, { Component } from 'react'
//import './';

import MainPage from '../MainPage/MainPage';
import ResultsPage from '../ResultsPage/ResultsPage';
import ItemPage from '../ItemPage/ItemPage';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],

      loading: false,

    };
  }
  componentDidMount(){
    fetch('https://swapi-thinkful.herokuapp.com/api/') 
      .then(res => res.json())
      .then(items=>{ 
        this.setState({
          loading: true,
          items: items,
        })
     });
  }


  render() {

    let { loading, items } = this.state;
    if (!loading){
      return <div>Loading...</div>
    }
    else {
      console.log(items);

      return (
        <Router>
          <Route exact path ="/" component={MainPage}/>
          <Route exact path ="/results/" component={ResultsPage} />
          <Route path ="/results/:item" component={ItemPage}/>
        </Router>
      );
    } 
  }
}

export default App