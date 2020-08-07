import React, { Component } from 'react'
import './ResultPage.css';
import Header  from '../Header/Header';

class ResultPage extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
            
    //     };
    // }

    render() {
        return(
            <div className='container'>
                <Header/>
               <h2>Results Page</h2>
                <p>This is the Page that displays the chosen result</p>
            </div>
        );
    }
}

export default ResultPage