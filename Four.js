import React, {Component} from 'react';
import {Link} from 'react-router';

class Four extends Component {
  render() {
    return(
      <div>
      <h1>MY NAME IS SARVESH</h1>
      <ul>
         <li><Link to="/Four/123">Four Point one</Link></li>
      </ul>
       {this.props.children}
      </div>
    );
  }
}


export default Four;
