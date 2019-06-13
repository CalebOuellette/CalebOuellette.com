import React, { Component } from 'react';
import DarkMode from '../DarkMode/DarkMode';
import './Card.css';

class Card extends Component {

  copyEmail = () => {
    const copyText = document.getElementById("Email");
    copyText.select();
    document.execCommand("copy");
  }

  render() {
    return (
      <div className="Card">
        <h1> Caleb <br /> Ouellette</h1>
        <div className="Line" />
        <p>
          Hi! I’ m a software developer. I love to build large scale apps in React and Angular.
          I have also worked on LLVM compilers and deep learning projects.
          I excel at working with a team.
        </p>
        <div className="Email">
          Email: <u> Caleb.Ouellette@gmail.com </u>
        </div>
        <br></br>
        <div className="Links">
          <a href="https://github.com/CalebOuellette" >Github</a>
          <a href="https://www.linkedin.com/in/caleb-ouellette/" >LinkedIn</a>
          <a href="https://codepen.io/CalebOuellette/" >CodePen</a>
        </div>
        <DarkMode darkMode={this.props.darkMode} changeDarkMode={this.props.changeDarkMode} />
      </div>
    );
  }
}

export default Card;
