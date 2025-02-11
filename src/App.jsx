import { useState } from 'react'


function App(){

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
  <div>
  <h1>Number v2 :{count} </h1>
  <button onClick={increment}>Increment</button>
  </div>
  )
}

export default App;

