import React, { Component } from 'react'
//import './';
//import  from './';
import {Link} from 'react-router-dom';
//import ResultsPage from '../ResultsPage/ResultsPage'
class SearchForm extends Component {

    render() {
        return(
            <div className='container'>
       
            <form>
                <select>
                    <option>Category</option>
                    <option>Sample Option</option>
                </select>   
                <input
                    type='text'
                    placeholder='Name'
                />
                <Link exact to="/results/" >
                   <button type="submit" >
                       Search
                   </button>
               </Link>
            </form>
            </div>
        );
    }
}

export default SearchForm