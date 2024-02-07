import React from 'react';

const Secondfirst = () => {
  return (
    <div className="relative w-screen h-screen flex justify-center mt-5">
      <div className="flex items-center">
        <div className="bg-blue-100 h-96 flex z-10 absolute left-0 ml-12 w-96 justify-center rounded px-10">
          <div className="mt-24">
            <h1 className="text-2xl">
              Experience summer in Rwanda ,with Rwanda Ventures
            </h1>
            <p className="font-sans mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              eos.
            </p>
            <button className="text-white text-lg font-serif bg-green-600 rounded text-center p-2 mt-5">
              see more
            </button>
          </div>
        </div>
      </div>
      <img src="img.jpg" alt="" />
    </div>
  );
};

export default Secondfirst;
