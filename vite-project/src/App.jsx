import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [notification, setNotification] = useState([])

  // function updateNotifications () {
  //   setNotification(prevNotification => !prevNotification)
  // } 
  const add = () => {
    setCount(prevCount => prevCount + 1) 
  } 
  const subtract = () => {
    count >= 1 ? setCount(count-1) :count
    
  }
  const reset = () => {
    setCount(0)
  }

  return (
    <>
    <div className='w-3/5 relative '>
    <h1 className='border bg-gray-300 rounded-lg p-8 mx-auto w-36'>{count}</h1>
    <div className='flex space-x-5 justify-center absolute left-0 right-0 -bottom-14 text-3xl '>
    <button className='p-5 bg-lime-50  rounded-2xl ' onClick={subtract}> Decrease</button>
    <button className='p-4 bg-indigo-100 rounded-2xl ' onClick={add}> Increase</button>
    <button className='p-4 bg-indigo-100 rounded-2xl ' onClick={reset}> reset</button>
    </div>

   
    </div>
    <div>
       {
      notification.length === 0 ?
      <h6>You're all caught up!</h6> :
      <h6>You have {notification.length} unread {notification.length > 1 ? "notifications" : "notification"}</h6>
        }
    
    </div>
   
    
      
        
    </>
  )
}

export default App
