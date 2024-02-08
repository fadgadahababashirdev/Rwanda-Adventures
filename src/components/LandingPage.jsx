import { useState, useEffect } from 'react';
import React from 'react';
import colora from './colora.mp4';
import { HashLink as Link } from 'react-router-hash-link';

const LandingPage = () => {
  const [links, setLinks] = useState(false);
  return (
    <div className="relative w-full h-full">
      <video src={colora} autoPlay muted loop className="object-cover" />
      <div className="bg-black w-full h-full opacity-35 z-10 top-0 absolute"></div>
      <div className="z-10 absolute top-0 flex  w-full justify-between px-5 mt-5 containe text-white">
        <h1>Rwanda Ventures</h1>
        <ul className="flex unordered">
          <li className="mx-2">Rwanda</li>
          <Link to="/Team">
            <li className="mx-2">Team</li>
          </Link>
          <li className="mx-2">Rwanda</li>
          <li className="mx-2">Rwanda</li>
          <img
            src="../public/menu.svg"
            className="w-5 toggle"
            onClick={() => setLinks(!links)}
          />
        </ul>
      </div>

      {links && (
        <div className="bg-slate-200 z-10 absolute top-0 right-5 mt-16">
          <ul className="block p-3">
            <li className="mx- 2 text-black text-sm">Rwanda</li>
            <li className="mx- 2 text-black text-sm">Rwanda</li>
            <li className="mx- 2 text-black text-sm">Rwanda</li>
            <li className="mx- 2 text-black text-sm">Rwanda</li>
          </ul>
        </div>
      )}

      <div className="top-0 absolute w-full flex justify-center items-center h-full z-20">
        <div className="text-white">
          <p className="text-center text-sm">Rwanda ,Hospitality is our aim</p>
          <h2 className="">
            The happiest and safesty country in <br />{' '}
            <span className="flex justify-center">the world</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
