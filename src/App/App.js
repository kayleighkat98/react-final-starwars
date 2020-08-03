import React, { Component } from 'react'
//import './';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm'

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
       
        <div className ='App'>
          <Header/>
          <SearchForm/>
        </div>



      );
    }
  }
}

export default App