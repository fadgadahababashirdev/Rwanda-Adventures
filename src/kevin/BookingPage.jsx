import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './bookingstyles.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
export default function Bookingpage() {
  const [loading, setLoading] = useState(false);

  const bookingSchema = yup.object().shape({
    fullName: yup.string().required('This input field is required'),
    email: yup.string().email().required('This field is required'),
    phone: yup
      .number()
      .required('This input field is required')
      .min(12)
      .integer(),
    numberOfPeople: yup
      .number('This must be a real number')
      .min(2)
      .integer('This field must have integer')
      .required('This input fiel is required'),
    date: yup.string().required('This field is required'),
    message: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingSchema),
  });

  const ServiceButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/');
    };
  };

  const handleBooking = async (data) => {
    try {
      setLoading(true);
      const url = 'https://rvbbackend.onrender.com/book';
      const formData = new FormData();
      const response = await axios.post(url, data);
      console.log(response);
      toast.success('Your booking request is sent!');
    } catch (error) {
      toast.warning('The booking could not be created');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="book container  mx-auto px-4  py-4 mb-10 h-screen ">
      <button className="bg-green-700 hover:bg-green-900 text-white px-2 py-2 rounded-md mt-4 flex items-center">
        <FaArrowLeft className="mr-2 w-5 h-5" />
        <ServiceButton />
      </button>
      <h2 className="text-4xl font-semibold flex items-center justify-center text-white mb-4">
        Book Your Tour
      </h2>
      <div className="container flex justify-center mx-auto px-4 py-8 h-screen ">
        <form
          className="  form rounded-tl-lg rounded-br-md w-full  max-h-72  md:w-3/4 lg:w-1/2 xl:w-1/2 "
          onSubmit={handleSubmit(handleBooking)}
        >
          <div className="grid grid-cols-1 gap-6">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="input"
              {...register('fullName')}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs text-start">
                {errors.fullName.message}
              </p>
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input"
              {...register('email')}
            />

            {errors.email && (
              <p className="text-red-500 text-xs text-start">
                {errors.email.message}
              </p>
            )}
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="input"
              {...register('phone')}
            />

            {errors.phone && (
              <p className="text-red-500 text-xs text-start">
                {errors.phone.message}
              </p>
            )}
            <input
              type="number"
              name="numberOfPeople"
              className="input"
              {...register('numberOfPeople')}
            />

            {errors.numberOfPeople && (
              <p className="text-red-500 text-xs text-start">
                {errors.fullName.message}
              </p>
            )}
            <input
              type="date"
              name="date"
              className="input"
              {...register('date')}
            />

            {errors.date && (
              <p className="text-red-500 text-xs text-start">
                {errors.date.message}
              </p>
            )}
            {/* <textarea
              name="message"
              placeholder="Message"
              className="input h-32"
             
            ></textarea> */}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-3 px-6 mt-8 rounded-md hover:bg-blue-600 transition duration-300"
            disabled={loading}
          >
            {loading ? <ClipLoader /> : 'Book'}
          </button>
        </form>
      </div>
    </div>
  );
}
