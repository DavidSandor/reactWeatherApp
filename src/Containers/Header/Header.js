import React, { Component } from 'react';

class Header extends Component {
    render() {      

      return (
          <header className="main-header">          
            <h1>{this.props.appName}</h1>
          </header>
      );
    }
  }
  
  export default Header;