import React from 'react';
import p8 from '../../images/p8.jpg'
import Image from 'next/image';

const Header= () => {
  return (
    <nav className="bg-red-800 flex justify-between items-center p-4">
      <div className="menu flex items-center">
        <Image src={p8} alt="" width={150}/>

        </div>
      <div className="links hidden md:flex items-center">
        <a href="#home" className="text-white hover:bg-gray-700 p-4">Home</a>
        <a href="#home #about me" className="text-white hover:bg-gray-700 p-4">About Me</a>
        <a href="#what i have learn" className="text-white hover:bg-gray-700 p-4">What I Have Learn</a>
        <a href="#projects" className="text-white hover:bg-gray-700 p-4">Projects</a>
        <a href="#follow me" className="text-white hover:bg-gray-700 p-4">Follow Me</a>
      </div>
   </nav>
  )};

export default Header;