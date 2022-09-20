import { Component } from 'react';
import './App.css';
import Calc from './components/calc';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Calc />
      </div>
    );
  }
}

export default App;
