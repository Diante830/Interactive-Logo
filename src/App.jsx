import { useState } from 'react'
import './App.css';
import Logo from './Logo';
import Card from './Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Hi </h1>
      
      </div>
      <Logo />
      <Card />
    </>
  )
}

export default App
