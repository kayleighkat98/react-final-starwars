import React, { Component } from 'react';
import './MainPage.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';


class MainPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
          baseUrl:'https://swapi-thinkful.herokuapp.com/api/',
    
          categories: [],
    
          loading: false,
    
        };
      }

      async componentDidMount(){
        const response= await fetch(this.state.baseUrl);
        const data = await response.json();
        this.setState({
            loading: true,
            categories: Object.entries(data),
        })
    }
    

    render() {
        
        let { loading, categories } = this.state;
        if (!loading){
        return <div>Loading...</div>
        }
        else {
        console.log(categories[0]);

            return(
                <div className='container'>
                <Header/>
                <SearchForm
                    categories= {this.state.categories}
                />

                </div>
            );
        }
    }
}

export default MainPage