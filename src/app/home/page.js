// src/pages/Home.js
import Image from 'next/image';
import React from 'react';
import { BiLogoDiscordAlt, BiLogoGithub } from "react-icons/bi";


function Home() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center relative'>
      <div className='h-auto mt-[-100px]'>
        <Image className='size-80 rounded-full shadow-lg shadow-neutral-900' src="/indoali.png" alt='me'></Image>
      </div>
      <div className='h-auto mt-5'>
        <div className='flex flex-row justify-center'>
        <a
          href="https://github.com/VoltenX5x"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <BiLogoGithub className='size-16 text-white'/>
        </a>
        <a
          href="https://discord.com/users/845015272058257468"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <BiLogoDiscordAlt className='size-16 text-white'/>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
