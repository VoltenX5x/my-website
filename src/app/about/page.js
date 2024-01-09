import React from 'react';
import Header from '../components/header/header.js';

import { BiLogoJavascript, BiLogoPython, BiLogoReact, BiLogoTailwindCss} from "react-icons/bi";
import { SiLua } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import Image from 'next/image.js';


function About() {
  return (
    <>
      <Header />
      <div className='flex flex-col justify-center items-center h-screen w-auto m-10'>
        <div className='h-[50%] bg-[rgb(35,35,35)] w-[50%] m-10 mt-[-75px] rounded-3xl shadow-lg shadow-neutral-900'>
          <div className='flex flex-col justify-center'>
            <div className='flex flex-row'>
              <div className='image'>
                <Image className='size-72 rounded-3xl shadow-lg shadow-neutral-900 m-4' src="/indoali.png" alt='me'></Image>
              </div>
              <div className='h-auto w-64 mt-4 ml-3'>
                <div className='flex h-10 items-center justify-center'>
                  <p className='text-white font-bold text-xl'>Hi! i am Junin Do Morro</p>
                </div>
                <div className='h-[40%] mt-2'>
                  <h1 className='text-white text-sm'>
                    A new developer born in Brazil, I'm looking to improve and perfect my programming languages, I intend to be a front-end, back-end or full-stack developer.
                  </h1>
                </div>

                <div className='h-[40%] mt-2'>
                  <h1 className='text-white text-sm'>
                    At the moment I am learning certain languages, such as: Lua, JavaScript, C# and Python, and frameworks such as React, Next.js, Vue.js, Vite.js and Tailwind CSS.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center h-[20%] bg-[rgb(35,35,35)] w-[30%] m-10 mt-[-15px] rounded-3xl shadow-lg shadow-neutral-900'>
          <div className='h-8 w-28 m-3'> 
            <p className='text-2xl text-white font-bold'>My Skills:</p>
          </div>

          <div className='flex flex-row h-[50%] m-1'>
            <SiLua className='size-12 text-blue-800 ml-1'/>
            <BiLogoJavascript className='size-12 text-yellow-400 ml-1'/>
            <TbBrandCSharp className='size-12 text-fuchsia-900 ml-1'/>
            <BiLogoPython className='size-12 text-yellow-400 ml-1'/>
            <BiLogoReact className='size-12 text-sky-500 ml-1'/>
            <BiLogoTailwindCss className='size-12 text-blue-500 ml-1'/>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
