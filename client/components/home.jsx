import React, { Component } from 'react';
import { Link } from 'react-router';


class Home extends Component {

  constructor(props = {}) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
  
  }
  
  componentDidMount() {
  
  }

  componentWillUnmount() {
    
  }

  render() { 
    return ( <div style={{backgroundColor: 'lightblue'}}> 
               <h3>This is a React app... </h3>
               <Link to="contacts/12">Contacts</Link>
            </div>)
	}

}

export default Home;