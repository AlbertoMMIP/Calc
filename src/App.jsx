import React, { useState } from 'react'
import Result from './components/Result'
import Numbers from './components/Numbers'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import './App.css';

const App = () => {
  console.log('Render App')
  const [result, setResult] = useState('')

  return (
    <main className="react-calculator">
      <Result value={result} />
      <Numbers handlerButton={(number) => setResult(`${result}${number}`)} />
      <Functions onClickClear={() => setResult('')} 
        onClickDelete={() => {
          const newResult = result.substring(0, result.length -1);
          setResult(newResult)
        }} />
      <MathOperations onClickOperation={(operation) => setResult(`${result}${operation}`) } onClickEqual={(equal) => setResult(`${result}${equal}`)} />
    </main>
  );
}

export default App; 
