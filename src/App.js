import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const operation = ['+', '-', 'x', '/'];
  const [display, setDisplay] = useState('0');
  const [useDecimal, setUseDecimal] = useState(true);

  const handlerCalculated = () => {
    const strGroup = display;
    const arN = [];
    const arO = [];
    let strN = '';

    for (let i = 0; i < strGroup.length; i++) {
      if (
        (strGroup[i] === '-' && operation.indexOf(strGroup[i - 1]) !== -1) ||
        (i === 0 && strGroup[i] === '-')
      ) {
        strN += strGroup[i];
        continue;
      }
      if (operation.indexOf(strGroup[i]) !== -1) {
        arO.push(strGroup[i]);
        arN.push(strN);
        strN = '';
        continue;
      }
      strN += strGroup[i];

      if (i === strGroup.length - 1) {
        arN.push(strN);
      }
    }

    const arNparse = arN.map((str) => parseFloat(str));

    let sum = arNparse[0];
    for (let i = 1; i < arNparse.length; i++) {
      sum = operationExc(sum, arNparse[i], arO[i - 1]);
    }

    console.log(arN, arO);
    console.log(sum);
    setDisplay(sum.toString());
    setUseDecimal(true);
  };

  useEffect(() => {
    if (display.length > 1 && display[0] === '0' && display[1] !== '.') {
      setDisplay(display.slice(1));
    }

    if (
      operation.includes(display[display.length - 2]) &&
      operation.includes(display[display.length - 1]) &&
      display[display.length - 1] !== '-'
    ) {
      setDisplay(deleteSecondLastStr(display));
    }

    return;
  }, [display, operation]);

  return (
    <div className="App">
      <div className="calculator">
        <div id="display">{display}</div>
        <div
          id="clear"
          onClick={() => {
            setDisplay('0');
            setUseDecimal(true);
          }}
        >
          ac
        </div>
        <div
          id="add"
          onClick={() => {
            setDisplay(display + '+');
            setUseDecimal(true);
          }}
        >
          +
        </div>
        <div
          id="divide"
          onClick={() => {
            setDisplay(display + '/');
            setUseDecimal(true);
          }}
        >
          /
        </div>
        <div
          id="multiply"
          onClick={() => {
            setDisplay(display + 'x');
            setUseDecimal(true);
          }}
        >
          x
        </div>
        <div
          id="subtract"
          onClick={() => {
            setDisplay(display + '-');
            setUseDecimal(true);
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
        <div
          id="decimal"
          onClick={() => {
            if (useDecimal) {
              setDisplay(display + '.');
              setUseDecimal(false);
            }
          }}
        >
          .
        </div>
        <div id="equals" onClick={handlerCalculated}>
          =
        </div>
      </div>
    </div>
  );
}

export default App;

const operationExc = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case 'x':
      return a * b;
    case '/':
      if (a === 0 || b === 0) {
        return 'Number to divide must Not Zero';
      } else {
        return a / b;
      }
    default:
      throw new Error("can't calculated just fix your code!!");
  }
};

const deleteSecondLastStr = (text) => {
  let newStr = text;
  newStr =
    newStr.substring(0, newStr.length - 2) +
    newStr.substring(newStr.length - 1, newStr.length);
  return newStr;
};
