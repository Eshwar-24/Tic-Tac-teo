import React, { Component } from "react";
import Board from "./components/board";
import "./components/style.css";
class App extends Component {
  state = { value: new Array(9).fill(null), player: false };

  render() {
    return (
      <div>
        <Board values={this.state.value} player></Board>
      </div>
    );
  }
}
export default App;
