import React from 'react'

export const Signup = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-[#33394C]'>
        <div className='p-8 bg-black/30 border border-[#59688f] rounded-2xl'>
            <form className='gap-3 flex flex-col'>
                <input className='outline-none border border-[#59688f] w-96 py-2 px-4 rounded-full ' type="text" placeholder='Full Name...' />
                <input className='outline-none border border-[#59688f] w-96 py-2 px-4 rounded-full ' type="number" placeholder='Phone No...' />
                <input className='outline-none border border-[#59688f] w-96 py-2 px-4 rounded-full ' type="password" placeholder='Password...'/>
                <button>Register Now</button>
            </form>
        </div>
    </div>
  )
}

export default Signup