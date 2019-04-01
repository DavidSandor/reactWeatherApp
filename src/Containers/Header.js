import React, { Component } from 'react';

class Header extends Component {
    render() {

        const headerStyle = {
            background: 'black',
            color: 'greenyellow',
            padding: '15px 35px',
            borderRadius: '1000px',
            margin: '20px',
            fontSize: '25px'
        }

      return (
          <header className="main-header">          
            <h1 style={headerStyle}>{this.props.appName}</h1>
          </header>
      );
    }
  }
  
  export default Header;