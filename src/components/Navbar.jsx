import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import App from '../App'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div>
        <div className='bg-black text-gray-400 h-[80px] max-w-[100%] mx-auto flex justify-between items-center'>

            <h1 className='text-3x1 font-bold primary-color ml-4'>Portfoilo</h1>
            <ul className='hidden md:flex'>
                <li className='p-5'> <a href='#about'>About</a> </li>
                <li className='p-5'> <a href='#work'>Work</a> </li>
                <li className='p-5'> <a href='#contact'>Contact</a> </li>
            </ul>
        

        <div onClick={handleNav} className='block md:hidden mr-6'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
    
        <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500'
                            : 'fixed left-[-100%]'}>
            <h1 className='text-3x1 primary-color m-4'>Portfoilo</h1>
            <ul className='p-8 text-2x1'>
                <li className='p-2'> <a href='#about'>About</a> </li>
                <li className='p-2'> <a href='#work'>Work</a> </li>
                <li className='p-2'> <a href='#contact'>Contact</a> </li>
            </ul>  
        </div>

        </div>    
    </div>
  )
}

export default Navbar
