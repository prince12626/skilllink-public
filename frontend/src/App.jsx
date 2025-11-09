import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { Signup } from './pages/Signup'
import {Dashboard} from './pages/freelancer/Dashboard'
import {ServiceDetails} from './pages/ServiceDetails'
import Services from './pages/Service'
import Landing from "./pages/Landing"

export const App = () => {
  return (
    <div className='bg-[#151A28] relative h-auto w-screen'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path='/auth/login' element={<Login />} />
        <Route path="/auth/register" element={<Signup />} />
        <Route path='/services' element={<Services />} />
        <Route path='/freelancer/dashboard' element={<Dashboard />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
      </Routes>
    </div>
  )
}


