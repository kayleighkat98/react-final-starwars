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
          categoryNames:[],


          loading: false
        };
      }

      async componentDidMount(){
        const response= await fetch(this.state.baseUrl);
        const data = await response.json();
        const categoryNames = Object.entries(await data).map((item,i)=>(
            item[0]
        ))
        this.setState({
            loading: true,
            categories: Object.entries(data),
            categoryNames: categoryNames,
        })
    }
    

    render() {
        console.log('test',this.state.categoryNames)
        let { loading } = this.state;
        if (!loading){
        return <div>Loading...</div>
        }
        else {


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