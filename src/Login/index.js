import React, { Component } from 'react'; //destructuring: put a component in a variable to access easier.

class Login extends Component {
  //Components are self-sustaining, independent micro-entities that describe a part of your UI. An application's UI can be split up into smaller components where each component has its own code, structure, and API.

  constructor(){
    //1. need constructor when you work with 'smart classes' and you want the ability to possibly extend them.
  //2. The constructor method is a special method for creating and initializing an object created with a class. include super() and state = {}

    super();
    //you need to call super() inside a class if you would like to 1. set a property or 2. access "this" inside the constructor. you

//state: an object that is owned by the component where it is declared. Its scope is limited to the current component. A component can initialize its state and update it whenever necessary. The state of the parent component usually ends up being props of the child component. When the state is passed out of the current scope, we refer to it as a prop.
  this.state = { //this initializes username and password's state (data point).
    username: '',
    password: ''
  }
}


// arrow functions allow you to use 'this', which you will have to use for this.setState

//you need actions for both username and password AND submit.

handleChange = (e) => {
  e.preventDefault(); //keeps the browser from auto-rendering.
  this.setState({[e.target.name]: e.target.value}) //computed properties from es6.  e.target.name is targeting the name properties in the inputs below. then you are also setting the stage for e.target.value for both, which you have below (this.state.username and this.state.password)
}


handleSubmit = (e) => {
  e.preventDefault();
  console.log('handle submit is working');

  //we are calling the login function we creatd in app.js and sent down as props in order to lift our state.


//NOTE: =====================
  //However, without app.js lines:   if you click submit you'll get the error 'TypeError: _this.props.login is not a function.' This is b.c you are taking the property for login

  // ========================

  
  this.props.login(this.state.username);
}


//tie your states to the value properties (this.state.username and this.state.password) so it can update on the screen through the render() method.

render() { //this is what will show up on the page.
  console.log(this.state, ' this state'); //will only log the object username password but you can't type anything on the client's side or the console log without setState
return (
  <form onSubmit={this.handleSubmit}>

  <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />

  <input type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />

  <input type="submit" name="submit" />

</form>
)
}
}

export default Login;
