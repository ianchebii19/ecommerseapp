import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'

 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='text-red-700'>
        Ian
      </h1>
     
      <div>
      <Button>Click me</Button>
    </div>

    </div>
  )
}

export default App
