import React from 'react'
import csharp from '../assets/csharp.png'
import dotnet from '../assets/dotnet.png'
import react from '../assets/react.png'

export const Skills = () => {
  return (
    <div className=' border border-gray-900 bg-black text-gray-400 md:h-[150px] max-w-[900px] mx-auto
                        grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center'>
        
        {/* <h2 className="text-gray-200 text-2xl md:text-4x1 font-bold ms-4">
            My <br/> Tech <br/> Stack
        </h2> */}

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w[100px]">
            <img src={csharp} alt='' width={100} height={100}/>
            <p></p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w[100px]">
            <img src={dotnet} alt='' width={100} height={100}/>
            <p></p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w[100px]">
            <img src={react} alt='' width={100} height={100}/>
            <p></p>
        </div>
    </div>
  )
}

export default Skills;
