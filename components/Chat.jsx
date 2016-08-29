import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { Sms } from '../models/messages.js';
import Messages from './Messages.jsx';
import Profile from './Profile.jsx';


class Chat extends Component {

    render(){
        return(
            this.props.currentUser?
                <div id='chat'>
                    <Profile/>
                    <Messages/>
                </div>: <h2>Please login first</h2>
            
        )
    }
}

export default createContainer(() => {

    return {
        currentUser: Meteor.user(),
    };
}, Chat);
