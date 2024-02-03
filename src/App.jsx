import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import flowLogo from '/flow.svg'
import './App.css'
import * as React from 'react';

hook useCounter(initial: number) {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount((count) => count + 1);
  }
  return [count, incrementCount]
}

component App() {
  const [count, increment] = useCounter(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://flow.org" target="_blank">
          <img src={flowLogo} className="logo flow" alt="Flow logo" />
        </a>
      </div>
      <h1>Vite + React + Flow</h1>
      <h2>Powered by <a href="https://flow.org/blog" target="_blank">Component Syntax!</a></h2>
      <div className="card">
        <button onClick={() => increment()}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the logos to learn more
      </p>
    </>
  )
}

export default App
