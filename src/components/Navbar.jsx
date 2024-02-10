import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="relative">
      <div className=" flex justify-between navbar">
        <h1 className="text-2xl font-serif text-white font-extrabold flex-nowrap">
          Rwanda Ventures
        </h1>
        <ul className="flex">
          <Link
            to="LandingPage"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <li className="text-serif text-white font-extrabold mx-5">Home</li>
          </Link>
          <li className="text-serif text-white font-extrabold mx-5">lorem</li>{' '}
          <li className="text-serif text-white font-extrabold mx-5">lorem</li>{' '}
          <li className="text-serif text-white font-extrabold mx-5">lorem</li>{' '}
          <Link to="/Login">
            <li className="text-serif text-white font-extrabold mx-5">Login</li>
          </Link>
          <img
            src="../public/menu.svg"
            alt=""
            className="w-5"
            onClick={() => setToggle(!toggle)}
          />
        </ul>
      </div>
      {toggle && (
        <div
          className="bg-white absolute top-0  flex justify-between px-3 pt-3"
          style={{ height: '450px', width: '100%' }}
        >
          <div>
          <ul className="mt-11">
          <Link
            to="LandingPage"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
           <Link to ="/">Home</Link>
          </Link>
          <li className="text-serif ">lorem</li>{' '}
          <li className="text-serif ">lorem</li>{' '}
          <li className="text-serif ">lorem</li>{' '}
          <Link to="/Login">
            <li className="text-serif">Login</li>
          </Link>
         
        </ul>
          </div>
          <h2 onClick={() => setToggle(false)} style={{ cursor: 'pointer' }}>
            X
          </h2>
        </div>
      )}
    </div>
  );
};

export default Navbar;
