import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className=" bg-white xw-screen h-screen flex justify-center items-center relative">
      <Link to="/">
        {' '}
        <span className="bg-black text-white absolute top-0 homelarge mt-3 left-0 ml-10 p-1 rounded-sm ">
          Home
        </span>
      </Link>
      <form className="rounded-md shadow-2xl justify-center items-center p-5 bg-blue-100">
        <div>
          <h1 className="text-center font-bold text-2xl">Sign Up</h1>

          <div className="flexarise">
            <div className="flexa">
              <div>
                <label htmlFor="username" className=" font-bold text-sm">
                  Username
                </label>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="outline-none py-1 w-72 rounded-sm px-1 out"
                  id="username"
                />
              </div>
            </div>

            <div className="flexa">
              <div>
                <label htmlFor="email" className=" font-bold text-sm">
                  Email
                </label>
              </div>

              <div>
                <input
                  type="Email"
                  placeholder="Email"
                  className="outline-none py-1 w-72 rounded-sm px-1 out"
                  id="email"
                />
              </div>
            </div>
          </div>

          <div className="flexarise">
            <div className="flexa">
              <div>
                <label htmlFor="phone" className=" font-bold text-sm">
                  Phone
                </label>
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="outline-none py-1 w-72 rounded-sm px-1 out"
                  id="phone"
                />
              </div>
            </div>

            <div className="flexa">
              <div>
                <label htmlFor="password" className=" font-bold text-sm">
                  Password
                </label>
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="outline-none py-1 w-72 rounded-sm px-1 out"
                  id="password"
                />
              </div>
            </div>
          </div>

          <div className="flexa">
            <div>
              <input
                type="file"
                placeholder="Password"
                className="outline-none py-1 w-72 rounded-sm px-1 out bg-white mt-3 "
                id="password"
              />
            </div>
          </div>
        </div>

        <button className="text-white  bg-blue-500 font-bold py-1 w-72 mt-4 rounded fle btn flexa">
          Sign Up
        </button>

       <Link to="/Login"><div className="mt-3 text-center"> Login with existing account!</div></Link>
      </form>
    </div>
  );
};

export default Register;
