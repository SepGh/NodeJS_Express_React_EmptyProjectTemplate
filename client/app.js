import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory, useBasename } from 'history';
import Home from './components/home.jsx';
import Contacts from './components/contacts.jsx';

const history = useBasename(createHistory)({ basename: '/ui' });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() { 
    const { header, content } = this.props;
    return (
      <div className="AppContainer">
        {header}
        {content}
      </div> 
    );
  }
}

React.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="home" components={{header: null, content: Home }} />
      <Route path="contacts/:id" components={{header: null, content: Contacts }} />
      <IndexRoute components={{header: null, content: Home}} />
    </Route>
  </Router>
), document.body);
