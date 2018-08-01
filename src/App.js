import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import MainContainer from './MainContainer';



class App extends Component {
  constructor() {
    super();

    //we want to keep track of both of these properties throughout our app so we put them in the main app.js file. we start off logged: false b.c when a user comes to the page they are not automatically logged in. same with username as an empty string.
    this.state = {
      logged: false,
      username: ''
    }
  }


//TO ADD FUNCTIONALITY TO LOGIN

login = (username) => {
  console.log('the login function in app is working', username);
  this.setState({
    username: username, //sets a variable to usernam?
    logged: true //now you can toggle this.
  })
}




  render() {
    console.log(this.state, ' inside of app component');
    return (
      <div className="App">
        {/* <h1>hi</h1> */}


         {/* if this.state.logged data is there(?) yes = show the MainContainer component. also username is now the logged in username in state. no = show the Login component. Also, login's variable will be set to this.login.  */}
        {this.state.logged ? <MainContainer username={this.state.username} /> : <Login login={this.login} />}

      </div>
    );
  }
}

export default App;
