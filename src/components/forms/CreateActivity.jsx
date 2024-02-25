import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
const CreateActivity = () => {
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    activityName:yup.string().required("This input fiels is required"),
    activityImage:yup.mixed().required("This input field is required")
  })
  const {register , handleSubmit , formState:{errors}} = useForm({
    resolver:yupResolver(schema)
  })

  const handleTour = async(data)=>{
    try {
        setLoading(true)
        const formData = new FormData()
        formData.append("activityName" , data.activityName)
        formData.append("activityImage" ,data.activityImage[0])
        const url = "https://rvbbackend.onrender.com/createActivity"
        console.log(formData.get("activityImage")) 
        const response = await axios.post(url , formData)
        toast.success("Tour registered successfully")
        window.location.reload(true)
        console.log(response)
        
    } catch (error) {
        toast.warning("Tour could not be redgisterd!")
        console.log(error)
    }finally{
        setLoading(false)
    }
  }
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      {/* form */}
      <form className="bg-white w-1/3  flex justify-center py-5 pb-5 rounded-md shadow-2xl"
      onSubmit={handleSubmit(handleTour)}
      >
        <div>
          <h1 className="text-2xl font-sans font-bold text-center py-5">
            Create Activity
          </h1>
          <div>
            <label htmlFor="placeName">Activity Name</label>
            <div>
              <input
                type="text"
                placeholder="PlaceName"
                className="rounded-md py-2 px-2"
                style={{ width: '22rem', outline: 'none' }}
                {...register("activityName")}
              /> 
              {errors.activityName && <p className='text-red-500 text-start text text-xs'>{errors.activityName.message}</p>}
              <br />
            </div>
          </div>
          <div>
            <label htmlFor="placeName">Activity Image</label>
            <div>
              <input
                type="file"
                placeholder="Place for the image"
                className="rounded-md py-2 px-2"
                style={{ width: '22rem', outline: 'none' }}
                {...register("activityImage")}
              />
            </div>
            <br />

            <button
              className="bg-blue-400 text-white font-sans mt-5 rounded-md py-2 px-2"
              style={{ width: '22rem', outline: 'none' }}
              disabled={loading}

            >
              {loading ? <ClipLoader /> : 'Create Activity'}
            </button>

            <Link to="/activities">
              <h1 className="mt-3">Back to Home</h1>
            </Link>
          </div>
        </div>
      </form>
      {/* form */}
    </div>
  );
};

export default CreateActivity;
