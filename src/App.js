import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calc from './components/calc';
import HomePage from './components/pages/Home';
import Navbar from './components/pages/Navbar';
import QuotePage from './components/pages/Quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="Quote" element={<QuotePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="calc" element={<Calc />} />
        </Routes>

      </>
    );
  }
}

export default App;
