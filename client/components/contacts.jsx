import React, { Component } from 'react';
import { Link } from 'react-router';

class Contacts extends Component {

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
    return ( <div> 
               <h3>Contact # {this.props.params.id}</h3>
               <Link to="home">Back to Home</Link>
            </div>)
	}

}

export default Contacts;