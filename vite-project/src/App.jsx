import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const Add = () => {
    setCount(prevCount => prevCount + 1) 
  } 
  const Subtract = () => {
    setCount(prevCount => prevCount - 1 )
    
  }

  return (
    <>
    <div className='w-3/5 relative '>
    <h1 className='border bg-gray-300 rounded-lg p-8 mx-auto w-36'>{count}</h1>
    <div className='flex space-x-5 justify-center absolute left-0 right-0 -bottom-14 text-3xl '>
    <button className='p-5 bg-lime-50  rounded-2xl ' onClick={Subtract}> Decrease</button>
    <button className='p-4 bg-indigo-100 rounded-2xl ' onClick={Add}> Increase</button>
    </div>
      
    </div>
   
    
      
        
    </>
  )
}

export default App
