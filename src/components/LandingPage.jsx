import React from 'react';
import colora from './colora.mp4';
import Navbar from './Navbar';
const LandingPage = () => {
  return (
    <div className="landigpage w-full h-full relative">
      <div className="video">
        <video src={colora} autoPlay loop muted></video>
      </div>
      <div className="absolute top-0 w-full py-3 px-3 z-20">
        <Navbar />
      </div>
      <div className="color w-full h-screen bg-black absolute top-0 opacity-45"></div>
      <div className="content w-full h-full absolute top-0 flex justify-center items-center mt">
        <div className="text center centerContent">
          <p className="text-white text-center">
            Rwanda the country of a thousand hills
          </p>
          <div className="h1andp block ">
            <h1 className="text-white text-center text-2xl ">
              The safesty Country in the world to
            </h1>
            <br></br>
            <h1 className="text text-white text-center text-2xl honetwo">
              {' '}
              explore and enjoy holidays
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
