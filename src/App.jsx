import {useState} from 'react'
import './App.css'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="bg-primary" >test</div>
      <div class="text-primary" >test</div>
      <div class="border-2 border-secondary w-fit p-4" >test</div>
    </>
  )
}

export default App
