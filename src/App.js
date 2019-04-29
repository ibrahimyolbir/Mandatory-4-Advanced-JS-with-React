import React, { Component } from 'react';
import './App.css';

import BoardColumn from './BoardColumn';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPlayerBoolean: false,
      boardStatus: [[], [], [], [], [], [], []],
      winStatus: false,
      resetStatus: false
    };

    this.updateBoard = this.updateBoard.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.horizontalWin = this.horizontalWin.bind(this);
  }

  updateBoard(index) {
    if (!this.state.winStatus) {
      let boardStatus = this.state.boardStatus;
      boardStatus[index].push(this.state.currentPlayerBoolean ? 'red' : 'black');
      this.setState({
        currentPlayerBoolean: !this.state.currentPlayerBoolean,
        boardStatus: boardStatus
      })

      this.checkWinStatus();
    }
  }

  checkWinStatus() {
    this.verticalWin();
    this.horizontalWin();
    this.diagonalRightWin()
    this.diagonalLeftWin();
  }

  formatWinConditions(iterator) {
    let blackDifference = 0;
    let redDifference = 0;
    let blackIndex = [];
    let redIndex = []

    blackIndex = iterator.map((item, index) => {
      if (item === 'black') {
        return index;
      }
      return null;
    }).filter(((item) => item !== null));

    redIndex = iterator.map((item, index) => {
      if (item === 'red') {
        return index;
      }
      return null;
    }).filter(((item) => item !== null));

    for (let i = 0; i < blackIndex.length - 1; i++) {
      let j = i + 1;
      if (blackIndex[j] - blackIndex[i] === 1) {
        blackDifference++;
      }
      else {
        blackDifference = 0;
      }
    }

    for (let i = 0; i < redIndex.length - 1; i++) {
      let j = i + 1;
      if (redIndex[j] - redIndex[i] === 1) {
        redDifference++;
      }
      else {
        redDifference = 0;
      }
    }

    if (blackDifference === 3) {
      this.setState({ winStatus: true });
    }
    else if (redDifference === 3) {
      this.setState({ winStatus: true });
    }
  }

  diagonalRightWin() {
    let tempArr = [];

    for (let q = 0; q < 4; q++) {
      for (let i = 0; i < 3; i++) {
        let j = 0;
        for (let k = 0; k < 4; k++) {
          tempArr.push(this.state.boardStatus[j + q][k + i]);
          j++;
        }
      }
    }

    for (let i = 0; i < tempArr.length; i += 4) {
      let j = i + 4;
      let chunk = tempArr.slice(i, j);
      let blackItems = chunk.map((item) => {
        if (item === 'black') {
          return item;
        }
        return null;
      }).filter(((item) => item !== null));

      let redItems = chunk.map((item) => {
        if (item === 'red') {
          return item;
        }
        return null;
      }).filter(((item) => item !== null));

      if (blackItems.length === 4) {
        this.setState({ winStatus: true });
      }
      else if (redItems.length === 4) {
        this.setState({ winStatus: true });
      }
    }

  }

  diagonalLeftWin() {
    let tempArr = [];

    for (let q = 0; q < 4; q++) {
      for (let i = 0; i < 3; i++) {
        let j = 6;
        for (let k = 0; k < 4; k++) {
          tempArr.push(this.state.boardStatus[j - q][k + i]);
          j--;
        }
      }
    }

    for (let i = 0; i < tempArr.length; i += 4) {
      let j = i + 4;
      let chunk = tempArr.slice(i, j);
      let blackItems = chunk.map((item) => {
        if (item === 'black') {
          return item;
        }
        return null;
      }).filter(((item) => item !== null));

      let redItems = chunk.map((item) => {
        if (item === 'red') {
          return item;
        }
        return null;
      }).filter(((item) => item !== null));

      if (blackItems.length === 4) {
        this.setState({ winStatus: true });
      }
      else if (redItems.length === 4) {
        this.setState({ winStatus: true });
      }
    }

  }

  verticalWin() {
    this.state.boardStatus.forEach((column) => {
      if (column.length >= 4) {
        this.formatWinConditions(column);
      }
    });
  }

  horizontalWin() {
    for (let i = 0; i < this.state.boardStatus.length; i++) {
      let tempArr = [];
      this.state.boardStatus.forEach((column) => {
        tempArr.push(column[i]);
      });

      this.formatWinConditions(tempArr);
    }
  }

  handleReset() {
    this.setState({ resetStatus: true, boardStatus: [[], [], [], [], [], [], []], currentPlayerBoolean: false, winStatus: false });
    setTimeout(() => {
      this.setState({ resetStatus: false });
    }, 0);
  }

  render() {
    return (
      <div className="App">
        <div className='gameInfo'>
          <div >Connect Four!</div>
          <button onClick={this.handleReset}>Reset Game</button>
          {this.state.winStatus ? (this.state.currentPlayerBoolean ? <div><div className='circleTurn black'></div> Wins!</div> : <div><div className='circleTurn red'></div> Wins!</div>) : (this.state.currentPlayerBoolean ? <div>Turn: <div className='circleTurn red'></div></div> : <div>Turn: <div className='circleTurn black'></div></div>)}
        </div>
        <div className='row'>
          {this.state.boardStatus.map((column, index) => {
            return (
              <div key={index} className='column'>
                <BoardColumn winStatus={this.state.winStatus} onClick={() => this.updateBoard(index)} currentPlayerColor={this.state.currentPlayerBoolean ? 'red' : 'black'} resetStatus={this.state.resetStatus} />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;