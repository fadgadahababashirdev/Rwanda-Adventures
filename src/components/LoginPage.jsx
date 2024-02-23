import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
const LoginPage = () => {
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const LoginSchema = yup.object().shape({
    email: yup
      .string()
      .required('This input field is required')
      .email('must be an email type'),
    password: yup.string().required('Please enter your password'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const LoginFunction = async (data) => {
    try {
      setLoading(true)
      const url = 'https://rvbbackend.onrender.com/Login';
      const response = await axios.post(url ,data);
      toast.success('user has logged in successfully');
      navigate("/Alltb")
      toast.warning("invalid password or email")
      console.log(response.data);
    } catch (error) {
      toast.warning(error);
    }finally{
      setLoading(false)
    }
  };
  return (
    <div className=" bg-white xw-screen h-screen flex justify-center items-center relative  backgrou">
      <Link to="/"> </Link>
      <form className="rounded-md shadow-2xl justify-center items-center p-5 bg-white"
      onSubmit ={handleSubmit(LoginFunction)}
      >
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
                {...register("email")}
              />
              <br />
              {errors.email && <p className='text-xs text-red'>{errors.email.message}</p>}
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
                {...register("password")}
              />
              <br />
              {errors.password && <p className='text-xs text-red-500'>{errors.password.message}</p>}
            </div>
          </div>
        </div>
        <button className="text-white  bg-blue-500 font-bold py-1 w-72 mt-4 rounded"
        disabled={loading}
        >
          {loading ?<ClipLoader/> : "Login"}
        </button>

        <Link to="/">
          <div className="text-center mt-3">back to home</div>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
