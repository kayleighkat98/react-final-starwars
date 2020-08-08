import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import './';
//import  from './';

class Header extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
            
    //     };
    // }

    render() {
        return(
            <Link to="/">
               <h1>The Only Star Wars Data-Base You Will Ever Need</h1>
            </Link>
        );
    }
}

export default Header