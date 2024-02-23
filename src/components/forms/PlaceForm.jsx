import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
const PlaceForm = () => {
  const [loading, setLoading] = useState(false);
  const placeSchema = yup.object().shape({
    placeName: yup.string().required('This input field is required'),
    placeImage: yup.mixed().required('This input field is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(placeSchema),
  });

  const addPlace = async (data) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('placeName', data.placeName);
      formData.append('placeImage', data.placeImage[0]);
      console.log(formData.get("placeImage"));
      const url = 'https://rvbbackend.onrender.com/place';
      const response = await axios.post(url, formData);
      toast.success("New place created successfully")
    } catch (error) {
      toast.warning("The Place is not registered");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      {/* form */}
      <form
        className="bg-white w-1/3  flex justify-center py-5 pb-5 rounded-md shadow-2xl"
        onSubmit={handleSubmit(addPlace)}
      >
        <div>
          <h1 className="text-2xl font-sans font-bold text-center py-5">
            Create Aplace
          </h1>
          <div>
            <label htmlFor="placeName">Place Name</label>
            <div>
              <input
                type="text"
                placeholder="PlaceName"
                className="rounded-md py-2 px-2"
                style={{ width: '22rem', outline: 'none' }}
                {...register('placeName')}
              />
              <br />
              {errors.placeName && (
                <p className="text-red-500 text-xs text-start">
                  {errors.placeName.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="placeName">Place Image</label>
            <div>
              <input
                type="file"
                placeholder="Place for the image"
                className="rounded-md py-2 px-2"
                style={{ width: '22rem', outline: 'none' }}
                {...register('placeImage')}
              />
            </div>
            <br />
            {errors.placeImage && (
              <p className="text-red-500 text-xs text-start">
                {errors.placeImage.message}
              </p>
            )}
            <button
              className="bg-blue-400 text-white font-sans mt-5 rounded-md py-2 px-2"
              style={{ width: '22rem', outline: 'none' }}
              disabled={loading}
            >
              {loading ? <ClipLoader /> : 'Create a place'}
            </button>

            <Link to="/places">
              <h1 className="mt-3">Back to Home</h1>
            </Link>
          </div>
        </div>
      </form>
      {/* form */}
    </div>
  );
};

export default PlaceForm;
