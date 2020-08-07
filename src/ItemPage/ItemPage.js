import React, { Component } from 'react'
import './ItemPage.css';
import Header  from '../Header/Header';

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
               <h2>Item Page</h2>
                <p>This is the Page that displays the chosen result</p>
            </div>
        );
    }
}

export default ItemPage