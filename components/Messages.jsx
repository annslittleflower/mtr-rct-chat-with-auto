import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Sms } from '../models/messages.js';


class Messages extends Component {
    formSubmit(e){
        e.preventDefault();
        const text = ReactDOM.findDOMNode(this.refs.smsInput).value.trim();

        if(Meteor.user().profile==null){
            alert('You have to choose your city');
        }else{
            Meteor.call('sms.insert', text);
        }
        

        ReactDOM.findDOMNode(this.refs.smsInput).value = '';
    }

    printMessages(){
        return this.props.sms.map((sms) =>(
            <li key={sms._id}>{sms.userName} : {sms.text}</li>
        ));
    }

    render(){
        return(
            <div id='messages'>
                <ul className='messageList'>{this.printMessages()}</ul>
                <form onSubmit={this.formSubmit.bind(this)}>
                    <input type='text' ref='smsInput' name='message'
                     placeholder='Enter your message...'
                     autoComplete="off"/>
                </form>
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('sms');
    let sms;
        if(Meteor.user().profile!=null){
            sms = Sms.find({'city':Meteor.user().profile.city}).fetch()
        }
        else{
            sms = [];
        }
    return {
        sms
    };
}, Messages);
