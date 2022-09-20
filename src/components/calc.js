import React, { Component } from 'react';
import './calc.css';

class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <div className="container">
          <div className="calculater">
            <div className="display">
              <span className="main-btn">0</span>
            </div>
          </div>
          <div className="numbers">

            <button type="button" className="btn num clean">AC</button>
            <button type="button" className="btn num add-sub">+/-</button>
            <button type="button" className="btn num modulus">%</button>
            <button type="button" className="btn div op">÷</button>

            <button type="button" className="btn num seven">7</button>
            <button type="button" className="btn num eight">8</button>
            <button type="button" className="btn num nine">9</button>
            <button type="button" className="btn mult op">x</button>

            <button type="button" className="btn num four">4</button>
            <button type="button" className="btn num five">5</button>
            <button type="button" className="btn num six">6</button>
            <button type="button" className="btn sub op">-</button>

            <button type="button" className="btn num one">1</button>
            <button type="button" className="btn num two">2</button>
            <button type="button" className="btn num three">3</button>
            <button type="button" className="btn add op">+</button>

          </div>
          <div className="row end">
            <button type="button" className="btn num zero">0</button>
            <button type="button" className="btn num dot">.</button>
            <button type="button" className="btn equal op">=</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Calc;
