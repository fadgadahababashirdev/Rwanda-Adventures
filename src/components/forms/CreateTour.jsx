import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

const CreateTour = () => {
  const [loading, setLoading] = useState(false);

  const mySchema = yup.object().shape({
    heading: yup.string().required('This input field is required'),
    tourDescription: yup.string().required('This  input field is required'),
    tourImage: yup.mixed(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(mySchema),
  });

  const handle = async (data) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('heading', data.heading),
        formData.append('tourDescription', data.tourDescription);
      formData.append('tourImage', data.tourImage[0]);
      const url = 'https://rvbbackend.onrender.com/addTour';
      const response = await axios.post(url, formData);
      toast.success('Registered successfully');
      
      alert('tour created successfully');
    } catch (error) {
      console.log('The tour could not be created', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <form
        className="bg-white w-1/3  flex justify-center py-5 pb-5 rounded-md shadow-2xl"
        onSubmit={handleSubmit(handle)}
      >
        <div className="text-center absolute top-[-1px] bg-white p-3 mt-3 rounded-full cursor-pointer"></div>
        <div>
          <h1 className="text-2xl font-sans font-bold text-center py-5">
            Create Tour
          </h1>
          <div>
            <label htmlFor="heading">Heading</label>
            <div>
              <input
                type="text"
                placeholder="Heading"
                className="rounded-md py-2 px-2"
                style={{ width: '22rem', outline: 'none' }}
                id="Heading"
                {...register('heading')}
              />
              <br />
              {errors.heading && (
                <p className="text-red-500 text-xs text-start">
                  {errors.heading.message}
                </p>
              )}

              <p className="text-red-500 text-xs text-start"></p>
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="description">Tour Description</label>
              <div>
                <textarea
                  type="text"
                  placeholder="Tour Description"
                  className="rounded-md py-2 px-2"
                  style={{ width: '22rem', outline: 'none' }}
                  id="description"
                  {...register('tourDescription')}
                />
                <br />
                {errors.tourDescription && (
                  <p className="text-red-500 text-xs text-start">
                    {errors.tourDescription.message}
                  </p>
                )}

                <p className="text-red-500 text-xs text-start"></p>
              </div>
            </div>

            <div>
              <label htmlFor="image">Tour Image</label>
              <div>
                <input
                  type="file"
                  placeholder="Tour image"
                  className="rounded-md py-2 px-2"
                  style={{ width: '22rem', outline: 'none' }}
                  id="image"
                  {...register('tourImage')}
                />
                <br />
                {errors.tourImage && (
                  <p className="text-red-500 text-xs text-start">
                    {errors.tourImage.message}
                  </p>
                )}

                <p className="text-red-500 text-xs text-start"></p>
              </div>
            </div>

            <button
              className="bg-blue-400 text-white font-sans mt-5 rounded-md py-2 px-2 cursor-pointer"
              style={{ width: '22rem', outline: 'none' }}
              disabled={loading}
            >
              {loading ? <ClipLoader /> : 'Create Tour'}
            </button>

            <Link to="/Tours">
              {' '}
              <p className="text-xs ">Back to home</p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTour;
