import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
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
          <h1 className="text-center font-bold text-2xl">Login</h1>
          <div>
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
          <div>
            <div>
              <label htmlFor="password" className="font-bold text-sm">
                password
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
        <button className="text-white  bg-blue-500 font-bold py-1 w-72 mt-4 rounded">
          Login
        </button>

        <div className="mt-3 text-center">
          {' '}
          Don't have an account ?<Link to="/Register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
