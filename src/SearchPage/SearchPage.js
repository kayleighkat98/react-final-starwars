import React, { Component } from 'react'
import './SearchPage.css';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';

class SearchPage extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
            
    //     };
    // }

    render() {
        return(
            <div className='container'>
               <Header/>
               <h2>This is the Search results page</h2>
               <SearchForm/>
            </div>
        );
    }
}

export default SearchPage