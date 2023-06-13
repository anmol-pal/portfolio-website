import {React} from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Home(){  
    return (
        <div className='ml-10 mr-10 pt-6 grid grid-cols-2 gap-4 h-5/6'>
            <div className='col-span-1 font-custom text-center pt-10 '>
                <p className="text-5xl font-Pangolin mb-2">
                    Hi ! 
                    This is Anmol
                </p>
                <p className="text-3xl font-Pangolin mb-2">
                    and here's a little bit about me.
                </p>
                <p className="text-2xl font-Pangolin">
                    I am a Computer Science Graduate Student at Binghamton University, New York.
                    I work as a DevOps Intern at Tesla, and I enjoy getting my hands dirty in new-er technologies 
                </p>
            </div>

            <div className="col-span-1 justify-end overflow-hidden">
                    <TransformWrapper>
                        <TransformComponent>
                            <div className="rounded-md flex justify-end">
                                <img src="/photo2.png" alt="Description" className="object-contain" />
                            </div>
                        </TransformComponent>
                    </TransformWrapper>
            </div>
        </div>    
    )
}
export default Home;