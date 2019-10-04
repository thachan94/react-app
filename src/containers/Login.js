import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      username: undefined,
      password: undefined,
      signUpError: undefined
    }
    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  handleChangeUsername(value){
    this.setState({
      username: value,
    })
  }
  handleChangePassword(value){
    this.setState({
      password: value,
    })
  }
  handleLogin() {
    const {
      username,
      password
    } = this.state;
    fetch("http://localhost:8766/user/login",{
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Credentials':'true'
      },
      body: JSON.stringify({
        username:username,
        password:password
      }),
    }).then((res)=>res.json()).then((result)=>{
      if (result.token) 
        alert("Login " + username + " successfully")
      else if (result.message==="invalid username")
        alert("Username not found")
      else if (result.message==="invalid password")
        alert("Invalid password")
      else 
        alert(result)
    this.setState({
      username:"",
      password:""
    })
      // if (result.message==="success")
      //   alert("Login " + username + " successfully")
      // else
      //   alert("User "+ username +" is existing. Please choose other username")
    })
  }
  
  render() {
    return (
    <form className="form-signin">
            <h2 className="form-signin-heading"> Please login </h2>
            <label className="sr-only"> Username
            </label>
            <input id="username" className="form-control" placeholder="Username" value={this.state.username} onChange={(e)=>this.handleChangeUsername(e.target.value)} required />
            <label className="sr-only"> Password</label>
            <input type="password" id="password" className="form-control" placeholder="Password"  value={this.state.password} onChange={(e)=>this.handleChangePassword(e.target.value)} required />
            <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.handleLogin}> Sign in
            </button>
        </form>
    )
}
}
