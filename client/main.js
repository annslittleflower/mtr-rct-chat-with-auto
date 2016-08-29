import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
 
import App from '../components/App.jsx';
import Chat from '../components/Chat.jsx';
import Index from '../components/Index.jsx';
 
Meteor.startup(() => {
    render((
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                <IndexRoute component={Index} /> 
                    <Route path="chat" component={Chat} />
                </Route>
          </Router>
  ), document.getElementById('render-target')
    );
});
