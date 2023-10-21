import { useState } from 'react'
import { Glasses } from './Glasses/Glasses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Glasses />
    </>
  )
}

export default App
