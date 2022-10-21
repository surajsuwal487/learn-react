import React, { Component, useDebugValue } from 'react';

import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({
      userInput: event.target.value,
    })
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
  }

  render() {

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char
        character={ch}
        key={index}
        //Execucte only when click event occouts
        clicked={() => this.deleteCharHandler(index)}
      >
      </Char>
    });

    return (
      <div className="App">
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        >
        </input>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}></Validation>
        {charList}
      </div>
    );
  }
}

export default App;
