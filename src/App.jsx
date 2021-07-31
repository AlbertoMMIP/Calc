import React, { useState } from 'react'
import Result from './components/Result'
import Numbers from './components/Numbers'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import './App.css';

const App = () => {
  console.log('Render App')
  const [result, setResult] = useState('')

  const handlerButton = (text) => {
    console.log('Clien en button', text)
  }

  return (
    <main className="react-calculator">
      <Result value={result} />
      <Numbers handlerButton={(number) => setResult(number)} />
      <Functions onClickClear={(text) => handlerButton(text)} onClickDelete={(text) => handlerButton(text)} />
      <MathOperations onClickOperation={(text) => handlerButton(text) } onClickEqual={() => console.log('equals') } />
    </main>
  );
}

export default App; 
