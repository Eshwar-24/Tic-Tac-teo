import React, { Component } from "react";
import Board from "./components/board";
import { winner } from "./components/winner";
import "./components/style.css";
class App extends Component {
  state = { value: new Array(9).fill(null), isfill: 0 };
  player = false;
  win = false;
  square = (id) => {
    this.setState((pre) => {
      if (pre.value[id] == null) {
        if (!this.win) {
          pre.value[id] = this.player ? "O" : "X";
          this.player = !this.player;
          pre.isfill++;
        }
      }
      this.win = winner(pre);
      return pre;
    });
  };
  restart = () => {
    this.setState((pre) => {
      pre.value = new Array(9).fill(null);
      this.player = false;
      this.win = false;
      pre.isfill = 0;
      return pre;
    });
  };
  render() {
    return (
      <div className="main-container">
        <h1>TIC-TAC-TEO</h1>
        <Board values={this.state.value} square={this.square}></Board>
        <p>
          Player:
          {this.win
            ? !this.player
              ? "O Congrats"
              : "X Congrats"
            : this.state.isfill == 9
            ? "Game is Tie"
            : this.player
            ? "O"
            : "X"}
        </p>
        {(this.win || this.state.isfill == 9) && (
          <button className="refresh" onClick={this.restart}>
            restart
          </button>
        )}
      </div>
    );
  }
}
export default App;
