import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'

interface AppProps {
  color?: string
}

interface AppState {
  counter: number
}

const App: React.FC<AppProps> = () => {
  const [{ counter }, setCounter] = useState<AppState>(0)

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <p>{counter}</p>
    </div>
  )
}

ReactDOM.render(<App color='red' />, document.querySelector('#root'))
