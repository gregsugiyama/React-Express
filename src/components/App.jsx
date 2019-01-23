import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../../public/app.scss";

export default class App extends Component {
  render() {
    return <p>This is my new react app</p>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
