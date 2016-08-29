import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';


export default  class Profile extends Component {
    addUserFields(e){

        e.preventDefault();
        const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
        const city = ReactDOM.findDOMNode(this.refs.city).value;
        Meteor.user().name = name;
        Meteor.user().city = city;
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.name": name, "profile.city":city}});

    }
    render(){
        let name, city;
        if(Meteor.user()){
            if(Meteor.user().profile != null){
                name = Meteor.user().profile.name;
            }else{
                name = ''
            }
            if(Meteor.user().profile != null){
                city = Meteor.user().profile.city;
            }else{
                city = 'lviv';
            }
        }
        return(
            <div id='profile'>
                <h2>Edit your profile:</h2>
                <form onSubmit={this.addUserFields.bind(this)}>
                    <input id='name' ref='name'
                    name='name'  placeholder='Enter your name'
                    defaultValue={name}/>
                    <label htmlFor='city'>Select your city:</label>
                    <select id='city' ref='city' defaultValue={city?city:'lviv' }>
                        <option value='lviv'>Lviv</option>
                        <option value='london'>London</option>
                        <option value='paris'>Paris</option>
                    </select>
                    <input id='submit' type='submit' value='Save'/>
                </form>
            </div>
        )
    }

}
