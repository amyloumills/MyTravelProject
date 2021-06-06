import React, { Component } from 'react';

class SignIn extends Component {
    state = {  }
    render() { 
        return ( <>
        <h1>Enter in your details</h1>
        Name 
        <input type="text"/>
        Booking Reference
        <input type="text"/>
        Email
        <input type="text"/>
        Password
        <input type="text"/>
        Terms and Conditions 
        <input type="checkbox"/>
        <button onClick={() => this.props.setScreenMode(1)}>Create Account</button>
        
        </> );
    }
}
 
export default SignIn;