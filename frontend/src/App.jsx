import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import {Signup} from './pages/Signup'

const App = () => {
  return (
    <div className='bg-[#151A28] h-screen w-screen'>
      <Navbar />
        <Routes>
          <Route path='/auth/login' element={<Login />} />
          <Route path="/auth/register" element={<Signup />} />
        </Routes>
    </div>
  )
}

export default App