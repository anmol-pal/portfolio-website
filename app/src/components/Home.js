import {React, useState} from 'react';
import Typewriter from 'typewriter-effect';

function Home({ showNextText, onTypewriterComplete }){

    return (
            <div className='ml-10 mr-10 pt-16 pb-10 pr-8 pl-8 grid grid-cols-3 gap-4 h-5/6 h-screen'>
                <div className='col-span-2 font-custom text-center pt-10 pb-10 pl-4 pr-4'>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('<span class="text-6xl font-Allura mb-2 font-bold pb-2 leading-loose tracking-wider">Hi! This is Anmol</span>')
                        .pauseFor(2500)
                        .start()
                        .callFunction(onTypewriterComplete)
                        ;
                    }}
                />
            {
                showNextText && (
                    <>
                    <p className="font-Pangolin mb-2 pb-2">
                        and here's a little bit about me.
                    </p>
                    <p className="text-xl font-Pangolin text-justify tracking-wider pr-6 pl-6 leading-loose">
                        I am a Computer Science Graduate Student at Binghamton University, New York.
                        Currently working as a DevOps Intern at Tesla for the summer.
                    </p>                     
                    </>
                )
            }


                </div>
                <div className="col-span-1 justify-end overflow-hidden">
                    <div className="rounded-md flex justify-end">
                        <img src="/photo2.png" alt="Description" className="object-contain" />
                    </div>
                </div>
            </div>    
    )
}
export default Home;