import React, { Component } from 'react';
import Card from './Card/Card';
import './App.css';


class App extends Component {

  state = {
    darkmode: false,
  }

  toggle = ()=>{
    console.log("toggle");
    this.setState({
      darkmode: !this.state.darkmode,
    })
  }
  
  render() {
    return (
      <div className={this.state.darkmode? "darkmode App": "App"}>
        <Card darkMode={this.state.darkmode} changeDarkMode={this.toggle}/>
      </div>
    );
  }
}

export default App;
