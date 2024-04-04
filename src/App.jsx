// import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <Outlet />
      <Footer />
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </div>
  )
}

export default App
