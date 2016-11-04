import React, {Component} from 'react'
import config from './config.json';

class Greeter extends Component{
  render() {
    return (
      <div className="container">
      	<p>{config.greetText}</p>
      </div>
    );
  }
}

export default Greeter