import React, { Component } from 'react';
import Card from './Card/Card';
import './App.css';


class App extends Component {

  state = {
    darkmode: false,
  }

  componentDidMount(){
    this.detectDarkMode();
  }

  toggle = ()=>{
    this.setState({
      darkmode: !this.state.darkmode,
    });
  }

  detectDarkMode = ()=>{
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      this.setState({
        darkmode: true,
      });
    }
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
