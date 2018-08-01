import React, { Component } from 'react';


class MainContainer extends Component {
  //NOTE: you did not use constructor(){} or super() b.c you are not needing to do any actions. this is just a presentaional component(?) b.c you are taking in other components and presenting them to the client.

  //NOTE 2: this.props.username NOT this.props.state. Where is the property started? App.js 15 or 25?
  
  //NOTE: this.props.password won't show up.

render() {
  return(
    <div>
    <h1>hi</h1>
    {this.props.username}
  </div>
  )
}
}


export default MainContainer;
