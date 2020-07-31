import React, { Component } from 'react'
//import './';
//import  from './';

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
                <button>Search</button>
            </form>
            </div>
        );
    }
}

export default SearchForm