import React, { useState, useEffect } from 'react';
import { MdDashboard } from 'react-icons/md';
import { MdAddHomeWork } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { FcCollaboration } from 'react-icons/fc';
import { VscSignOut } from 'react-icons/vsc';
import { FaHome } from 'react-icons/fa';
import { SiPrintables } from 'react-icons/si';
import { MdDelete } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { useContext } from 'react';
import { Activ } from '../contexts/ActivityContext';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import axios from 'axios';

const Activities = () => {
  // loadgin state
  const [loading, setLoading] = useState(false);
  const { activities } = useContext(Activ);
  console.log(activities);
  const [page, setPage] = useState(false);

  //   handle update section
  const [selected, setSelected] = useState(null);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      tourName: selected ? selected.tourName : '',
      tourImage: selected ? selected.tourImage : '',
    },
  });

  useEffect(() => {
    reset(selected);
  }, [selected]);

  //   function to update

  const handleActivity = async (data) => {
    try {
      setLoading(true);
      const url = `https://rvbbackend.onrender.com/updateActivity/${selected._id}`;
      const response = await axios.put(url, data);
      console.log('The response is ', response);
      toast.success('Activity updated Successfully');
      window.location.reload(true);
    } catch (error) {
      toast.warning('Activity update denied!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //   delete function
  const handleDelete = async (id) => {
    try {
      const url = `https://rvbbackend.onrender.com/removeActivity/${id}`;
      const response = await axios.delete(url);
      confirm('Are you sure to remove this activity , Ok');
      toast.success('Activity deleted successfully');
      window.location.reload(true);
    } catch (error) {
      toast.warning('The delete of the user could not be made');
      console.log(error);
    }
  };
  return (
    <div className="relative w-full h-full">
      <div className="flex bg-slate-100 w-full pr-5 relative">
        <div
          className="bg-gray-600 mt-5 mb-5 ml-5 w-48 rounded-l-lg p-2 text-white "
          style={{ height: '90vh' }}
        >
          <div>
            <h1 className="text-1xl">Rwanda Ventures</h1>
          </div>

          <hr />

          <div className="flex items-center text-1xl mt-5 mx-5">
            <h1>
              <MdDashboard />
            </h1>
            <h1 className="mx-2">Dashboard</h1>
          </div>
          <div className="flex items-center text-1xl mt-5 mx-5">
            <h1>
              <SiPrintables />
            </h1>
            <h1 className="mx-2">Tables</h1>
          </div>
          <div className="flex items-center text-1xl mt-5 mx-5">
            <h1>
              <MdAddHomeWork />
            </h1>
            <h1 className="mx-2 font-sans">Activities</h1>
          </div>
          <div className="flex items-center text-1xl mt-5 mx-5">
            <h1>
              <FaUsers />
            </h1>
            <h1 className="mx-2">Users</h1>
          </div>
          <div className="flex items-center text-1xl mt-5 mx-5">
            <h1>
              <FcCollaboration />
            </h1>
            <h1 className="mx-2">Partners</h1>
          </div>
          <div className="flex items-center text-1xl mt-5 mx-5">
            <h1>
              <VscSignOut />
            </h1>
            <h1 className="mx-2">Logout</h1>
          </div>
          <div className="flex items-center text-1xl mt-5 mx-5">
            <h1>
              <MdDashboard />
            </h1>
            <h1 className="mx-2">Dashboard</h1>
          </div>
        </div>

        <div className="flex flex-col w-full">
          {/* navbarb */}
          <div className="bg-white w-full ml-5 mt-5 h-16 mr-4 px-2 flex items-center">
            <div className="w-full flex justify-between">
              <div>
                <div className="flex items-center">
                  <FaHome /> / <h1 className="text-sm">Dashboard</h1>
                </div>
                <h1 className="text-2xl text-bold ml-4">PlacesActivities</h1>
              </div>
            </div>
            <Link to="/createActivity">
              {' '}
              <div className="pr-10 text-xs text-green-400 border-blue-50 font-bold">
                Create Activity
              </div>
            </Link>
          </div>

          {/* end of navbar */}

          {/* table */}
          <table className="w-scree bg-white mx-5 mt-3">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  TourActivity
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  TourImage
                </th>

                <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300"></th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => {
                return (
                  <tr key={activity._id}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                      <div className="text-sm leading-5 text-gray-900">
                        {activity.activityName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                      <div className="text-sm leading-5 text-gray-900">
                        {activity.activityImage}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-300 text-sm leading-5 font-medium flex justify-center">
                      <button
                        className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline text-2xl cursor-pointer"
                        onClick={() => {
                          setPage(true);
                          setSelected(activity);
                        }}
                      >
                        <MdEdit />
                      </button>
                      <button
                        className="ml-2 text-red-600 hover:text-red-900 focus:outline-none focus:underline text-2xl"
                        onClick={() => handleDelete(activity._id)}
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/*table */}
        </div>
      </div>
      <div
        className={`${
          page
            ? 'w-full h-full opacity-400 absolute flex justify-center top-0 left-0 items-center '
            : ''
        }`}
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        {page && (
          <form
            className="bg-white w-1/3  flex justify-center py-5 pb-5 rounded-md shadow-2xl absolute top-0 mt-8"
            onSubmit={handleSubmit(handleActivity)}
          >
            <div
              className="text-center absolute top-[-1px] bg-white p-3 mt-1 rounded-full cursor-pointer"
              onClick={() => setPage(false)}
            >
              <FaTimes />
            </div>
            <div>
              <h1 className="text-2xl font-sans font-bold text-center py-5">
                Edit Activity
              </h1>
              <div>
                <label htmlFor="placeName">Activity Name</label>
                <div>
                  <input
                    type="text"
                    placeholder="ActivityName"
                    className="rounded-md py-2 px-2"
                    style={{ width: '22rem', outline: 'none' }}
                    {...register('activityName')}
                  />
                  <br />

                  <p className="text-red-500 text-xs text-start"></p>
                </div>
              </div>
              <div>
                <label htmlFor="tourImage">Activity Image</label>
                <div>
                  <input
                    type="file"
                    placeholder="Place for the image"
                    className="rounded-md py-2 px-2"
                    style={{ width: '22rem', outline: 'none' }}
                    {...register('activityImage')}
                  />
                </div>

                <br />

                <button
                  className="bg-blue-400 text-white font-sans mt-5 rounded-md py-2 px-2"
                  style={{ width: '22rem', outline: 'none' }}
                  disabled={loading}
                >
                  {loading ? <ClipLoader /> : 'Edit Activity'}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Activities;
