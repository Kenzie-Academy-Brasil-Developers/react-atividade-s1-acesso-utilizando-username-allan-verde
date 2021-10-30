import './App.css'
import { useState } from 'react'
import logo from './logo.svg'
import WelcomePage from './components/WelcomePage'
import GetUserComponet from './components/GetUserComponent'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [use, setUse] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {
          isLoggedIn ? 
          <WelcomePage use={use} setIsLoggedIn={setIsLoggedIn} /> :
          <GetUserComponet setUser={setUse} setIsLoggedIn={setIsLoggedIn} />
        }

      </header>
    </div>
  )
}

export default App