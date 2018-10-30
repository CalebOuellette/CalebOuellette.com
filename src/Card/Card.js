import React, { Component } from 'react';
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
          Hi! I’m a software developer. I like hard problems and good coffee.
          I am on track to graduate with my bachelor's degree in computer science in june of 2019.
          I'm looking to start work then.
        </p>
        <div className="Email">
          Email: <u> Caleb.Ouellette@gmail.com </u>
        </div>
      </div>
    );
  }
}

export default Card;
