import React from 'react'
import Todo from './Components/Todo'
import bgImg from "./assets/image.png"

const App = () => {
  return (
    <div 
      style={{ backgroundImage: `url(${bgImg})` }} 
      className="bg-cover bg-center min-h-screen grid py-4"
    >
      <Todo />
    </div>
  )
}

export default App