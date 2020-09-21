import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const operation = ['+', '-', 'x', '/'];
  const [display, setDisplay] = useState('0');
  useEffect(() => {
    if (display.length > 1 && display[0] === '0') {
      setDisplay(display.slice(1));
    }
    return;
  }, [display]);

  return (
    <div className="App">
      <div className="calculator">
        <div id="display">{display}</div>
        <div id="clear" onClick={() => setDisplay('0')}>
          ac
        </div>
        <div
          id="add"
          onClick={() => {
            if (operation.indexOf(display[display.length - 1]) === -1)
              setDisplay(display + '+');
          }}
        >
          +
        </div>
        <div
          id="divide"
          onClick={() => {
            if (operation.indexOf(display[display.length - 1]) === -1)
              setDisplay(display + '/');
          }}
        >
          /
        </div>
        <div
          id="multiply"
          onClick={() => {
            if (operation.indexOf(display[display.length - 1]) === -1)
              setDisplay(display + 'x');
          }}
        >
          x
        </div>
        <div
          id="subtract"
          onClick={() => {
            if (operation.indexOf(display[display.length - 1]) === -1)
              setDisplay(display + '-');
          }}
        >
          -
        </div>
        <div id="seven" onClick={() => setDisplay(display + '7')}>
          7
        </div>
        <div id="eight" onClick={() => setDisplay(display + '8')}>
          8
        </div>
        <div id="nine" onClick={() => setDisplay(display + '9')}>
          9
        </div>
        <div id="four" onClick={() => setDisplay(display + '4')}>
          4
        </div>
        <div id="five" onClick={() => setDisplay(display + '5')}>
          5
        </div>
        <div id="six" onClick={() => setDisplay(display + '6')}>
          6
        </div>
        <div id="one" onClick={() => setDisplay(display + '1')}>
          1
        </div>
        <div id="two" onClick={() => setDisplay(display + '2')}>
          2
        </div>
        <div id="three" onClick={() => setDisplay(display + '3')}>
          3
        </div>
        <div
          id="zero"
          onClick={() => {
            if (display !== '0') setDisplay(display + '0');
          }}
        >
          0
        </div>
        <div id="decimal" onClick={() => setDisplay(display + '.')}>
          .
        </div>
        <div id="equals">=</div>
      </div>
    </div>
  );
}

export default App;
