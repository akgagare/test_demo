import { useState } from 'react'
// import Project_1 from './components/Project_1'
import Project_2 from './components/Project_2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex p-1 font-semibold font-sans'>
      <Project_2/>
    </div>
  )
}

export default App

