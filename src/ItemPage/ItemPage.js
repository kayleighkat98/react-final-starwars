import React, { Component } from 'react';
import './ItemPage.css';
import Header  from '../Header/Header';

/*  
TODO
    match params?


*/
class ItemPage extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
            
    //     };
    // }
  
    render() {

  

       
        return(
            <div className='container'>
                <Header/>
                <button>
                    Back to results
                </button>
               <h2>Item Page</h2>
                <p>This is the info page of : </p>
            </div>
        );
    }
}

export default ItemPage