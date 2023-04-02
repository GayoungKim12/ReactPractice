import React from "react";
import logo from "../logo.svg";

// const name = 'Gayoung';

export default function Header(props) {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p class="aaa" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.title}
          {/* name === 'Lamu' 
            ? `Hello, ${name}! Learn React` 
            : `Welcome, ${name}! Learn React` */}
        </a>
      </header>
  )
}