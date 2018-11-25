import React, { Component } from 'react';
import './DarkMode.css';

class DarkMode extends Component {

  render() {
    return (
      <div className="DarkMode">
        <div onClick={this.props.changeDarkMode} className="outerSwitch">
          <div className={this.props.darkMode ? "on innerSwitch" : "innerSwitch"}>
          </div>
        </div>
        <div className="darkModeText">Dark Mode</div>
      </div>
    );
  }
}

export default DarkMode;
