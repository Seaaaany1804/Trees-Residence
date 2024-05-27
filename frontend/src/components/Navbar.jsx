import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full top-0 font-poppins p-5 bg-gradient-to-b from-[#FF846D] to-[#FFEEDB] z-50'>
      <div className='flex justify-between items-center'>
          <div className='flex justify-center items-center px-5'>
            <img src="../src/assets/TreesLogo.png" alt="error" className='h-[85px]'/>
            <h1 className='text-[25px]'>Trees Residence</h1>
          </div>

          <div className='mr-[450px]'>
              <ul className='flex gap-32 text-[20px]'>
                <a href='#home'><li  className='hover:underline cursor-pointer'>Home</li></a>
                <a href='#roomtour'><li href='#roomtour' className='hover:underline cursor-pointer'>Room Tour</li></a>
                <a href='#inclusion'><li href='#inclusion' className='hover:underline cursor-pointer'>Inclusion</li></a>
              </ul>
          </div>

          <div className='flex justify-center items-center'>
              <button className='text-[20px] border-2 border-[#FFAA94] rounded-full p-2 px-10 drop-shadow-2xl'>LOGIN</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar;
