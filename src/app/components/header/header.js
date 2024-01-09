import React from "react";
import Link from "next/link";

function Header() {
  const Button = 'btn border border-neutral-700 bg-neutral-900 rounded-xl py-2 px-4 text-white font-bold hover:text-neutral-500';

  return (
    <header>
      <div className='bg-[rgb(35,35,35)] shadow-lg shadow-neutral-900 py-1'>
        <div className="flex items-center justify-center space-x-4">
          <Link className={Button} href='/'>Home</Link>
          <Link className={Button} href='/about'>About</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
