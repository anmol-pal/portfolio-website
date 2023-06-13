import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { GoDesktopDownload } from "react-icons/go";
import { VscProject } from "react-icons/vsc";
import { IoMdBuild } from 'react-icons/io';
import { CgWorkAlt } from 'react-icons/cg';
import { IoIosSchool } from 'react-icons/io';

 
function Header(props){

    return(
        <>
            <div class="w-screen flex items-center">
            <div class="grid grid-flow-row gap-10 w-full mt-6">
                <div class="flex items-center justify-around">
                <div class="flex items-center mouse transition ease-in duration-200 focus:outline-none transition-colors hover:text-yellow-700 focus:text-blue-500 ">
                        <AiOutlineHome className="text-3xl" />
                        <span className="pr-2 pl-2">Home</span>
                </div>
                <div class="flex items-center mouse transition ease-in duration-200 focus:outline-none transition-colors hover:text-yellow-700 focus:text-blue-500 ">
                        <IoMdBuild className="text-3xl" />
                        <span className="pr-2 pl-2">Skills</span>
                </div>
                <div class="flex items-center mouse transition ease-in duration-200 focus:outline-none transition-colors hover:text-yellow-700 focus:text-blue-500 ">
                        <VscProject className="text-3xl" />
                        <span className="pr-2 pl-2">Projects</span>
                </div>
                <div class="flex items-center mouse transition ease-in duration-200 focus:outline-none transition-colors hover:text-yellow-700 focus:text-blue-500 ">
                        <CgWorkAlt className="transition-colors hover:text-blue-500 focus:text-blue-500 text-3xl" />
                        <span className="pr-2 pl-2">Work</span>
                </div>
                <div class="flex items-center mouse transition ease-in duration-200 focus:outline-none transition-colors hover:text-yellow-700 focus:text-blue-500 ">
                        <IoIosSchool className="text-3xl" />
                        <span className="pr-2 pl-2">Education</span>
                </div>
                <div className="flex items-center">
                        <a href="AnmolPalResume2023.pdf" download="anmol_pal.pdf" className="flex items-center space-x-2 mouse transition ease-in duration-200 focus:outline-none transition-colors hover:text-yellow-700 focus:text-blue-500">
                                <GoDesktopDownload className="text-3xl" />
                                <span className="pr-2 pl-2">Download Resume</span>
                        </a>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Header;