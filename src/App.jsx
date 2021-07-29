import Result from './components/Result'
import Button from './components/Button'
import MathOperations from './components/MathOperations'
import './App.css';

const App = () => {
  console.log('Render App')

  const handlerButton = (text) => {
    console.log('Clien en button', text)
  }

  return (
    <main className="react-calculator">
      <Result value={"0"} />
      <div className="numbers">
            <Button text="1" clickHandler={(text) => handlerButton(text) } />
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
        </div>
        <div className="functions">
            <button>
                clear
            </button>
            <button>
                r
            </button>
        </div>
      <MathOperations onClickOperation={(text) => handlerButton(text) } onClickEqual={() => console.log('equals') } />
   </main>
  );
}

export default App; 
