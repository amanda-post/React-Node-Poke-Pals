import React from "react";
import axios from "axios";
import hash from "../../../../hash.js";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
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

  // checks user's inputs with auth to log the user in
  handleSignIn(e) {
    e.preventDefault();
    let signInInfo = {
      username: this.state.username,
      password: hash(this.state.password)
    }
    axios
      .post('/api/users/signin', signInInfo)
      .then(({data}) => {
        this.props.update(data)
      })
      .catch((err) => console.log(err))
  }

  // checks if the proposed username exists; if not, creates an account in DB
  handleSignUp(e) {
    e.preventDefault();
    let signUpInfo = {
      username: this.state.username,
      password: hash(this.state.password)
    }
    axios
      .post('/api/user/signup', signUpInfo)
      .then(({data}) => {
        this.props.setCurrentUser(data)
      })
      .catch(err => console.log(`Error making account for  for user: ${username}.`, err))
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
                type="text"
                required="required"
                placeholder="Type username here..."
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
            Username:
            <input
              name="username"
              type="text"
              required="required"
              placeholder="Enter username here..."
              onChange={this.handleInputChange}
            />
            Password:
            <input
              name="password"
              type="password"
              required="required"
              placeholder="Enter password here..."
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
