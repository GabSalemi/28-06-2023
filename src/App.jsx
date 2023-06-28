import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainTitle from './components/maintitle'
import RandomSection from './components/randomsection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        < MainTitle />
        < RandomSection src={"https://picsum.photos/200"}/>
      </div>
    </>
  )
}

export default App
