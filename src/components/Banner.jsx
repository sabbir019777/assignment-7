import React from 'react';
import Vector1 from "../assets/vector1.png";

const Banner = ({ inProgressCount = 0, resolvedCount = 0 }) => {
  return (
   <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-10 px-4 bg-gray-50">

  <div className="w-full md:w-[48%] lg:w-[650px] h-[250px] sm:h-[320px] md:h-[380px] rounded-lg shadow-2xl relative overflow-hidden flex items-center justify-center p-4">
    <div className="absolute inset-0 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-opacity-90 z-0"></div>

     <img 
     src={Vector1} 
      alt="In Progress Left Pattern"
    className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-[320px] object-cover z-10 opacity-90 sm:opacity-100"
    />
     <img 
          src={Vector1} 
          alt="In Progress Right Pattern"
     className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-[320px] object-cover z-10 scale-x-[-1] opacity-90 sm:opacity-100"
        />

   <div className="relative z-20 text-white text-center flex flex-col items-center justify-center">
     <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">In-Progress</h2>
       <p className="text-5xl sm:text-6xl md:text-7xl font-extrabold">{inProgressCount}</p>
        </div>
      </div>

     
   <div className="w-full md:w-[48%] lg:w-[650px] h-[250px] sm:h-[320px] md:h-[380px] rounded-lg shadow-2xl relative overflow-hidden flex items-center justify-center p-4">
   <div className="absolute inset-0 bg-gradient-to-br from-[#54CF68] to-[#00827A] bg-opacity-90 z-0"></div>

    <img 
          src={Vector1} 
          alt="Resolved Left Pattern"
   className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-[320px] object-cover z-10 opacity-90 sm:opacity-100"
    />
      <img 
          src={Vector1} 
      alt="Resolved Right Pattern"
   className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-[320px] object-cover z-10 scale-x-[-1] opacity-90 sm:opacity-100"
    />

  <div className="relative z-20 text-white text-center flex flex-col items-center justify-center">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Resolved</h2>
    <p className="text-5xl sm:text-6xl md:text-7xl font-extrabold">{resolvedCount}</p>
    </div>
  </div>

    </div>
  );
};

export default Banner;
