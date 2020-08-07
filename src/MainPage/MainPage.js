import React, { Component } from 'react';
import './MainPage.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';


class MainPage extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
            
    //     };
    // }

    render() {
        return(
            <div className='container'>
               <Header/>
               <SearchForm/>

            </div>
        );
    }
}

export default MainPage