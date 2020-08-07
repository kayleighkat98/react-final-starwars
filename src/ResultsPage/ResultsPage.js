import React, { Component } from 'react'
import './ResultsPage.css';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import {Link} from 'react-router-dom';

class ResultsPage extends Component {

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
               <ul>
                   <Link to="/results/:item">
                       <li>Example result</li>
                   </Link>
               </ul>
            </div>
        );
    }
}

export default ResultsPage