import React, { Component } from 'react';
import News from '../News';

class MainContainer extends Component {
  //NOTE: you did not use constructor(){} or super() b.c you are not needing to do any actions. this is just a presentaional component(?) b.c you are taking in other components and presenting them to the client.

  //NOTE 2: this.props.username NOT this.props.state. Where is the property started? App.js 15 or 25?

  //NOTE: this.props.password won't show up.

  //NOTE: you don't need to concatentate OR add space like inside a string. if you put hi {this.props.username} it reads it the same as hi     {this.props.username} (one space) but no spaces if it is hi{this.props.username} Also if you put {this.props.username} outside the h1 it is still an h1. same as an h3, etc. and either way if it's outside the h1 tag it is like a <br> b.c the username shows up on another line.

render() {
  return(
    <div>
    <h1>Welcome {this.props.username}
  </h1>

  <p><News /> </p>
{/* note ^ you can't put {News} there for the Component inside a function. */}

    </div>
  )
}
}


export default MainContainer;
