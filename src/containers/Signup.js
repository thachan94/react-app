import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

export default class SignUp extends Component {
  constructor(props){
    super(props)
    this.state={
      username: "",
      password: "",
      passwordConfirm: ""
    }
    this.handleSignUp = this.handleSignUp.bind(this)
    this.changeHandler=this.changeHandler.bind(this)
  }
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSignUp() {
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
  render(){
    return(
    <MDBContainer>
      <MDBRow>
      <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                name="username"
                type="email"
                validate
                error="wrong"
                success="right"
                onChange={this.changeHandler}
                value={this.state.username}
                className="form-control"
                required
                
              />
              <MDBInput
                label="Your password"
                icon="lock"
                group
                type="password"
                name="password"
                validate
                onChange={this.changeHandler}
                value={this.state.password}
                className="form-control"
                required
              />
              <MDBInput
                label="Confirm your password"
                icon="exclamation-triangle"
                group
                type="password"
                name="passwordConfirm"
                validate
                onChange={this.changeHandler}
                value={this.state.passwordConfirm}
                className="form-control"
                required
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="default" onClick={this.handleSignUp}>Register</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    )
  }
}
