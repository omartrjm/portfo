import React from 'react'

const Contact = () => {
  return (
    <div className="max-2-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact" >
        
        <div className="text-center">
            <h2 class="text-gray-300 text-4xl font-bold leading-tight primary-color ">Contact Me</h2>
        </div>

        <div class="max-w-[800px] mx-auto">
            <div class="mt-6 bg-[#161616] rounded-xl">
                <div class="p-10">

                <form action="https://getform.io/f/nadoqjkb" method="POST">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                        <div>
                            <div class="mt-2.5 ">
                                <input type="text" name="name" id="" placeholder="Name"
                                    class="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-300 border
                                        border-gray-700 rounded-md focus:outline-none focus:border-gray-300" />
                            </div>
                        </div>

                        <div>
                            <div class="mt-2.5 ">
                                <input type="text" name="email" id="" placeholder="Email"
                                    class="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-300 border
                                        border-gray-700 rounded-md focus:outline-none focus:border-gray-300" />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <div class="mt-2.5 ">
                                <textarea  name="message" id="" placeholder="Message"
                                    class="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-300 border
                                        border-gray-700 rounded-md focus:outline-none focus:border-gray-300" rows="3">
                                </textarea>            
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <button type="submit" 
                                    class="text-x1 w-full p-4 mt-2 font-semibold text-gray-300 bg-primary-color  rounded-md">
                                Send
                            </button>
                        </div>


                    </div>
                </form>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact