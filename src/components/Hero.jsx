import React from 'react';
import heroimage from '../assets/profile2.avif';
import { TypeAnimation } from 'react-type-animation';
import PF from  "../assets/t.pdf";
import {PDFDownloadLink} from '@react-pdf/renderer';

 const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-[1200px]  h-[70vh]  mx-auto py-8 bg-black'>

        <div className='col-span-1 my-auto mx-auto w-[200px] h-auto lg:w-[300px]'>
            <img src={heroimage} alt='hero image'/>
        </div>

        <div className='col-span-2 px-5 my-auto'>
            <h1 className="text-white text-4x1 sm:text-5xl lg:text-8xl font-extrabold">
                <span className='primary-color'>
                    I'm a
                </span> <br/>
                <TypeAnimation
                
                sequence={[
                    "Frontend Dev",
                    2000,
                    "Backend Dev",
                    2000,

                    
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                />
            </h1>
            <p className="text-white sm:text-lg my-6 lg:text-xl">
                My name is Omar I'm a Full Stack Developer
            </p> <></>
            <div className='my-8'>
                <a href="/" className="px-6 py-3 w-full rounded-xl mr-5
                            bg-gradient-to-br from-blue-950 to-teal-900 text-white">
                    {/* Download CV */}

                    
                <PDFDownloadLink document={<PF/>} fileName="CV">
                    {({loading}) => 
                    loading ? (<button>Loading CV...</button>)
                     : (<button>Download CV</button>) }
                </PDFDownloadLink>
                
                </a>
                

                <a href="#contact" className="px-6 py-3 w-full rounded-xl 
                              bg-gradient-to-br from-blue-950 to-teal-900 text-white  border border-gray-500 hover:border-none ">
                    Contact
                </a>
            </div>
        </div>

    </div>
  )
}

export default Hero
