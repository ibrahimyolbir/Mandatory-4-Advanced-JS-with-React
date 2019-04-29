import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './BoardColumn.css';

class BoardColumn extends Component {
  constructor() {
    super();

    this.state = {
      columnCount: 0,
      colorArray: []
    };
    this.updateColumn = this.updateColumn.bind(this);
  }

  updateColumn() {
      if(!this.props.winStatus) {
          this.props.onClick();
          this.setState({
              columnCount: this.state.columnCount+1,
              colorArray: [...this.state.colorArray, this.props.currentPlayerColor]
            });
      }
  }

  componentWillReceiveProps(nextProps) {
      if(nextProps.resetStatus === true) {
          this.setState({ columnCount: 0, colorArray: [] });
      }
  }

  createBoard() {
      let boardArray = [];
      for(let i = 0; i < 6; i++) {
          boardArray.unshift(
            <ReactCSSTransitionGroup
            key={i}
            transitionName="fade"
            transitionEnterTimeout={5500}
            transitionLeaveTimeout={5500}>
          <div key={i} className={this.state.columnCount >= i ? 'circle ' + (this.state.colorArray.length > i ? this.state.colorArray[i] : 'gray') : 'circle gray'}></div></ReactCSSTransitionGroup>);
      }
      return boardArray;
  }

  render() {
    return (
      <div onClick={this.updateColumn} className='boardColumn'>
        {this.createBoard()}
      </div>
    );
  }
}

export default BoardColumn;