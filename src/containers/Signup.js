import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Textbox, Radiobox, Checkbox, Select, Textarea } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
import './static/style.css'
export default class SignUp extends Component {
  constructor(props){
    super(props)
    this.state={
      username: "",
      password: "",
      signUpError: ""
    }
    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleChangePasswordConfirm = this.handleChangePasswordConfirm.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
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
  handleChangePasswordConfirm(value){
    this.setState({
      passwordConfirm: value,
    })
  }
  handleSignUp(e) {
    const {
      username,
      password,
      passwordConfirm
    } = this.state;
    if (password !== passwordConfirm) {
      alert("Password not match")
    }
    else {
      fetch("http://localhost:8766/user/signup",{
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
          password:password,
        }),
      }).then((res)=>res.json()).then((result)=>{
        
        if (result.message==="success")
          alert("Created " + username + " successfully")
        else
          alert("User "+ username +" is existing. Please choose other username")
      })
    }
    this.setState({
      username:"",
      password:"",
      passwordConfirm:""
    })
  }
  render() {
    return (
    <form className="form-signin">
            <h2 className="form-signin-heading"> Please sign in </h2>
            <label className="sr-only"> Username
            </label>
            <input id="username" className="form-control" placeholder="Username" value={this.state.username} onChange={(e)=>this.handleChangeUsername(e.target.value)} required />

            <label className="sr-only"> Password</label>
            <input type="password" id="password" className="form-control"  value={this.state.password} placeholder="Password" onChange={(e)=>this.handleChangePassword(e.target.value)} required />
            <label className="sr-only"> Password Comfirm</label>
            <input type="password" id="password-confirm" className="form-control" value={this.state.passwordConfirm} placeholder="Password Comfirm" onChange={(e)=>this.handleChangePasswordConfirm(e.target.value)} required />
            <Button variant="outline-primary" onClick={this.handleSignUp}> 
              Sign in
            </Button>
        </form>
    )
  }
}
