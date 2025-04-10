import {useState} from 'react'
import './App.css'
import Mainbutton from './components/mainbutton'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-primary" >test</div>
      <div className="text-primary" >test</div>
      <div className="border-2 border-secondary w-fit p-4" >test</div>
      <Mainbutton >
        click
      </Mainbutton>

    </>
  )
}

export default App
