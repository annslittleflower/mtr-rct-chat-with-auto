import React, { Component } from 'react';
import {Link} from 'react-router';
import Register from './Register.jsx';

export default class App extends Component {
    render(){
        return(
            <div id="app">
                <header>
                    <Link to="/chat">Chat</Link>
                    <Register/>
                </header>
                {this.props.children}
            </div>
        )
    }
}
