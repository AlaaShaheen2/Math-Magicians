import React, { useState } from 'react';
import calculate from './logic/calculate';
import './calc.css';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [err, setErr] = useState(null);
  const click = (e) => {
    const result = calculate({
      total, next, operation, err,
    }, e.target.value);
    setTotal(() => result.total);
    setNext(() => result.next);
    setOperation(() => result.operation);
    setErr(() => result.err);
  };
  return (
    <div className="main">
      <div className="container">
        <div className="calculater">
          <div className="display">
            <span className="main-btn">{next || operation || total || err || 0}</span>
          </div>
        </div>
        <div className="numbers">

          <button type="button" onClick={click} value="AC" className="btn num clean">AC</button>
          <button type="button" onClick={click} value="+/-" className="btn num add-sub">+/-</button>
          <button type="button" onClick={click} value="%" className="btn num modulus">%</button>
          <button type="button" onClick={click} value="÷" className="btn div op">÷</button>

          <button type="button" onClick={click} value={7} className="btn num seven">7</button>
          <button type="button" onClick={click} value={8} className="btn num eight">8</button>
          <button type="button" onClick={click} value={9} className="btn num nine">9</button>
          <button type="button" onClick={click} value="x" className="btn mult op">x</button>

          <button type="button" onClick={click} value={4} className="btn num four">4</button>
          <button type="button" onClick={click} value={5} className="btn num five">5</button>
          <button type="button" onClick={click} value={6} className="btn num six">6</button>
          <button type="button" onClick={click} value="-" className="btn sub op">-</button>

          <button type="button" onClick={click} value={1} className="btn num one">1</button>
          <button type="button" onClick={click} value={2} className="btn num two">2</button>
          <button type="button" onClick={click} value={3} className="btn num three">3</button>
          <button type="button" onClick={click} value="+" className="btn add op">+</button>

        </div>
        <div className="row end">
          <button type="button" onClick={click} value={0} className="btn num zero">0</button>
          <button type="button" onClick={click} value="." className="btn num dot">.</button>
          <button type="button" onClick={click} value="=" className="btn equal op">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
