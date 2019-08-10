import React from "react";
import axios from "axios";
import firebase from "../../../init-firebase.js";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      showSignUp: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.showSignUp = this.showSignUp.bind(this);
  }

  // changes state based on user input to the sign-in or sign-up forms
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // checks user's inputs with firebase server to log the user in
  handleSignIn(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredential => {})
      .catch(error => {
        console.log(error);
      });
  }

  // checks if the proposed username exists; if not, creates an account in DB and with firebase
  handleSignUp(e) {
    e.preventDefault();
    // check if the username already exists in mongoDB

    // if it does not, create the account with firebase, and then add it to mongoDB
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredential => {})
      .catch(error => {
        console.log(error);
      });
  }

  // sets state to true in order to render the sign-UP form rather than the sign-IN form
  showSignUp() {
    this.setState({
      showSignUp: true
    });
  }

  render() {
    if (this.state.showSignUp) {
      return (
        <div class="container">
          <div class="row justify-content-center"> 
            <form id="sign-up-form" type="submit" onSubmit={this.handleSignUp}>
              Create A Username:
              <input
                name="username"
                required="required"
                placeholder="Type username here..."
                onChange={this.handleInputChange}
              />
              E-mail:
              <input
                name="email"
                type="email"
                required="required"
                placeholder="Type email here..."
                onChange={this.handleInputChange}
              />
              Create A Password:
              <input
                name="password"
                type="password"
                required="required"
                pattern=".{6,}"
                required
                title="6 characters minimum"
                placeholder="Type password here..."
                onChange={this.handleInputChange}
              />
              <button type="submit" id="sign-up-button">
                Create Account
              </button>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div class="row justify-content-center">
          <form id="sign-in-form" type="submit" onSubmit={this.handleSignIn}>
            E-mail:
            <input
              name="email"
              type="email"
              required="required"
              placeholder="Type email here..."
              onChange={this.handleInputChange}
            />
            Password:
            <input
              name="password"
              type="password"
              required="required"
              placeholder="Type password here..."
              onChange={this.handleInputChange}
            />
            <button type="submit" id="sign-in-button">
              Sign In
            </button>
          </form>
          <button onClick={this.showSignUp}>Create an Account</button>
        </div>
      );
    }
  }
}

export default Login;
