import React, { Component } from 'react';

class Header extends Component {

    render() { 
        return ( <>
        <button onClick={() => this.props.setScreenMode(1)}>Back
            </button>
            </>);
    }
}
 
export default Header;