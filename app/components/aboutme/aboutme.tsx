import React from "react";
import p7 from "../../images/p7.jpg"
import Image from 'next/image';

const Aboutme=()=>{
   return(
          <div className="container flex items-center p-12 max-w-10xl mx-auto bg-white shadow-md">
            <div className="image-container flex-1 pr-5">
              <Image
                src={p7}
                alt="About Us Image"
                className="w-full rounded-lg shadow-sm"
              />
            </div>
            <div className="text-container flex-1 pl-5">
              <h6 className="text-4xl font-bold text-black">About Me</h6>
              <h1 className="text-4xl my-10 text-black">
                Welcome to My<span className="text-green-400 font-bold"> Protfolio </span>.
              </h1>
              <p className="mb-4 text-gray-600">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
              <p className="mb-4 text-gray-600">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                lorem sit clita duo justo magna dolore erat amet.
              </p>
              <a
                className="inline-block px-5 py-3 bg-green-400 text-white rounded hover:text-green"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
)
};
export default Aboutme;