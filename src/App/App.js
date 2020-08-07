import React, { Component } from 'react'
//import './';

import MainPage from '../MainPage/MainPage';
import SearchPage from '../SearchPage/SearchPage';
import ResultPage from '../ResultPage/ResultPage';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
      console.log(this.state.items);

      return (
        <Router>
          <Route exact path ="/" component={MainPage}/>
          <Route path ="/search/" component={SearchPage} />
          <Route path ="/result/" component={ResultPage}/>
        </Router>
      );
    }
  }
}

export default App