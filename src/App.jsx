import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Footer from './components/footer/Footer'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header/>
    <Home/>
  <Footer/>

    </>
  )
}

export default App
