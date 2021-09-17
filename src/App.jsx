/* eslint no-eval: 0 */
import React, { useState } from 'react'
import words from 'lodash.words'
import Result from './components/Result'
import Numbers from './components/Numbers'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import './App.css';

const App = () => {
  console.log('Render App')
  const [result, setResult] = useState('')
  const items = words(result, /[^-^+^*^/]+/g)
  const value = items.length ? items[items.length - 1] : '0';
  console.log('items', items)
  return (
    <main className="react-calculator">
      <Result value={value} />
      <Numbers handlerButton={(number) => setResult(`${result}${number}`)} />
      <Functions onClickClear={() => setResult('')} 
        onClickDelete={() => {
          if (result.length) {
            const newResult = result.substring(0, result.length -1);
            setResult(newResult)
          }
        }} />
      <MathOperations onClickOperation={(operation) => setResult(`${result}${operation}`) } onClickEqual={(equal) => setResult(eval(result).toString()) } />
    </main>
  );
}

export default App; 
