import React, { Component } from "react";
import SelectPage from "../screens/SelectPage/SelectPage";
import Player from "./Player";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: null,
      player2: null,
      currentPlayer: this.props.currentPlayer,
      gameIsStarted: false,
      gameOver: false,
      time: 30,
    };
    this.heroes = this.props.heroes
    this.selectHero = this.selectHero.bind(this);
  }

  startTimer = () => {
    this.stopTimer();
    this.intervalId = setInterval(() => {
      if (this.state.time < 1) {
        this.restartTimer();
        this.switchPlayer();
      } else {
        this.setState((prevState) => ({
          time: prevState.time - 1,
        }));
      };
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.intervalId);
  };

  restartTimer = () => {
    this.stopTimer();
    this.setState({ time: 30 }, () => {
      this.startTimer();
    });
  };

  switchPlayer() {
    this.restartTimer();
    this.setState(
      (prevState) => ({
        currentPlayer: prevState.currentPlayer === 1 ? 2 : 1,
      }),
      () => {
        alert(`Переход хода\nХодит игрок №${this.state.currentPlayer}.`);
      }
    );
  }

  selectHero(hero) {
    if (this.state.currentPlayer === 1) {
      this.setState((prevState) => ({
        player1: hero,
        currentPlayer: prevState.currentPlayer === 1 ? 2 : 1,
      }));
      alert(`Теперь выбирает ${this.props.player2Name}.`);
    } else {
      this.setState(() => ({
        player2: hero,
        gameIsStarted: true,
        currentPlayer: Math.floor(Math.random() * 2) + 1,
      }));
      alert(`Игра начинается, игру начинает ${this.state.currentPlayer === 1 ? this.props.player1Name : this.props.player2Name}.`)
    }
  }

  gameOver(player) {
    this.setState(() => ({
      gameOver: true,
    }));
    this.stopTimer();
    alert(`${player} победил.`);
  }

  render() {
    return (
      <div>
        {!this.state.gameIsStarted ? (
          <SelectPage
            heroes={this.heroes}
            currentPlayer={
              this.state.currentPlayer === 1
                ? this.props.player1Name
                : this.props.player2Name
            }
            selectHero={this.selectHero}
          />
        ) : (
          <div className="game">
            <div className="timer">
              <span id="timer">
                {parseInt(this.state.time / 60, 10) < 10
                  ? "0" + parseInt(this.state.time / 60, 10)
                  : parseInt(this.state.time / 60, 10)}:
                {parseInt(this.state.time % 60, 10) < 10
                  ? "0" + parseInt(this.state.time % 60, 10)
                  : parseInt(this.state.time % 60, 10)}
              </span>
              {!this.state.gameOver ? (
                <div className="timer__btns">
                  <button id="timerStart" onClick={this.startTimer}>
                    Запустить
                  </button>
                  <button id="timerStop" onClick={this.stopTimer}>
                    Остановить
                  </button>
                  <button id="timerRestart" onClick={this.restartTimer}>
                    Перезапустить
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "60px" }}
            >
              <Player
                id={1}
                selectedHero={this.state.player1}
                enemyHero={this.state.player2}
                name={this.props.player1Name}
                game={this}
              />
              <Player
                id={2}
                selectedHero={this.state.player2}
                enemyHero={this.state.player1}
                name={this.props.player2Name}
                game={this}
              />
            </div>
            <div className="current-player">
              {!this.state.gameOver ? (
                <div> Ход игрока: {this.state.currentPlayer === 1  ? this.props.player1Name : this.props.player2Name}.</div>
              ) : (
                <div>{this.state.currentPlayer === 1  ? this.props.player1Name : this.props.player2Name} победил!</div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
