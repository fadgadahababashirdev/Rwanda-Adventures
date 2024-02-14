import React from 'react';
import colora from './beautifull.mp4';
import Navbar from './Navbar';

const LandingPage = () => {
  return (
    <div id='first' className="landigpage w-full h-full relative">
      <div className="video">
        <video src={colora} autoPlay loop muted></video>
      </div>
      <div className="absolute top-0 w-full py-3 px-3 z-20">
        <Navbar />
      </div>
      <div className="color w-full h-screen bg-black absolute top-0 opacity-45"></div>
      <div className="content w-full h-full absolute top-0 flex justify-center items-center mt">
        <div className="text center centerContent">
          <h1 className="text-white text-center">
            Rwanda the country of a thousand hills
          </h1>
          <div className="h1andp block ">
            <h2 className="text-white text-center text-4xl ">
              The safesty Country in the world to
            </h2>
            <br></br>
            <h3 className="text text-white text-center text-4xl honetwo">
              {' '}
              explore and enjoy holidays
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
