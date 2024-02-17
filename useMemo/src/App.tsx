import "./App.css"
import { useState, useMemo } from "react"

const initialItem = Array.from({ length: 29_999_999 }, (_, i) => ({
  id: i,
  isSelected: i === 29_999_998
}))


function App() {
  const [count, setCount] = useState(0)
  const [isincreamenting, setIncreaming] = useState(true)
  const [items] = useState(initialItem)

  const selectedItem =  useMemo(() => items.find((item) => item.isSelected), [items])
  return (
    <div>
      <h1>Counter</h1>
      <p>selected iitem: {selectedItem?.id}</p>

      <p>Count: {count}</p>
      <button onClick={() => {
        setCount(isincreamenting ? count + 1 : count - 1)
        setIncreaming(!isincreamenting)
      }}>{isincreamenting ? "increament" : "decreament"}</button>
    </div >
  )
}

export default App
