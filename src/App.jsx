import React from 'react'
import Todo from './components/Todo'
import './index.css'
const App = () => {
  return (
    <div className="bg-[url('./assets/background.jpeg')] grid px-2 min-h-screen">
      <Todo />
      <footer className="mt-4 mb-2 text-center text-lg text-black font-black bg-white opacity-80 p-4 rounded-lg shadow-md ">
        <p>© 2024 Sumit Singh Kaintura. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
