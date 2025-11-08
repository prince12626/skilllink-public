import React from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center px-4'>
      <div className="bg-[#151A28] shadow-2xl border border-[#33394C] rounded-2xl p-8 sm:p-12 w-full max-w-md">
        <div>
          <h1 className='text-3xl'>Welcome</h1>
          <p className='text-sm text-gray-400 mt-2'>Connect with us.</p>
        </div>

        <form className='flex mt-8 flex-col gap-3 w-full'>
          <input className='py-2 px-3 outline-none border border-[#33394C] rounded-full w-full' type="text" id='name' name='name' placeholder='Name...' />
          <input className='py-2 px-3 outline-none border border-[#33394C] rounded-full w-full' type="number" name="phone" id="phone" placeholder='Phone No.' />
          <input className='py-2 px-3 outline-none border border-[#33394C] rounded-full w-full' type='password' name='password' id='password' placeholder='Password' />
          <button type='submit' className='bg-blue-950 cursor-pointer py-2 px-3 rounded-full w-full sm:w-auto'>Register</button>
          <p className='text-sm text-gray-500 text-center sm:text-left'>Already have an account ? <Link className='text-blue-800' to="/auth/login">Sign in</Link></p>
        </form>
      </div>
    </div>
  )
}
