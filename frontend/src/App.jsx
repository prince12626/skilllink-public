import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

const App = () => {
  return (
    <div className='bg-[#151A28] h-screen w-screen'>
      <Navbar />
        <Routes>
          <Route path='/auth/login' element={<Login />} />
        </Routes>
    </div>
  )
}

export default App