import React, { Component } from 'react';
import './App.css';

const TestingContextAPI = React.createContext('initialValue');

class App extends Component {
  state = {
    name: 'Andrew',
    age: 31,
    cool: true
  }

  render() {
    return (
      <TestingContextAPI.Provider value={{
        state: this.state,
        addingFunctionLikeActionInRedux: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        <div className="App">
          <header className="App-header">

          </header>
        </div>
      </TestingContextAPI.Provider>
    );
  }
}

export default App;
