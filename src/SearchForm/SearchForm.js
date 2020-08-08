import React, { Component } from 'react'
//import './';
//import  from './';
import {Link} from 'react-router-dom';
//import ResultsPage from '../ResultsPage/ResultsPage'
class SearchForm extends Component {

    render() {

        
        console.log(this.props.categories);
        // let categoryNames = categories.map(function(item, i){
            
        //     let name= item[i][0];
        //     return<li key={i}>{name}</li>
        // });
        // console.log('test',categoryNames);
        //  console.log(categories);
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
                <Link to="/results/" >
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