import React from 'react'
import about from '../assets/about.jpg'

export const About = () => {
  return (
    <div className="text-white max-w-[900px] mx-auto my-12" id="about">
        
        <div className="md:grid md:grid-cols-2 sm:py-16">

            <div className="mt-4 md:mt-0 text-left flex ">
                <div className="my-auto mx-6">
                    <h2 className="text-4xl font-bold mb-4 primary-color"> About Me </h2>
                    <p className="text-base lg:text-lg">
                       Omar Alturjomi <br/> Diploma Degree In Computer Programming <br/> From TVTC College In Medina <br/>
                    </p>
                </div>
            </div>

            <img className="mx-auto rounded-3xl py-8 md:py-0" src={about} width={300} height={300} />
        
        </div>

    </div>
  )
}
export default About
