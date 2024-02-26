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
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
import { useContext } from 'react';
import { Book } from '../contexts/Book';

const Bookings = () => {
  const { booking } = useContext(Book);
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState(false);
  const [page, setPage] = useState(false);
  const [selected, setSelected] = useState(null);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      fullName: selected ? selected.fullName : '',
      email: selected ? selected.email : '',
      phone: selected ? selected.phone : '',
      date: selected ? selected.date : '',
      numberOfPeople: selected ? selected.fullName : '',
      message: selected ? selected.fullName : '',
    },
  });
  useEffect(() => {
    reset(selected);
  }, [selected]);

  const handleUpdate = async (data) => {
    try {
      setLoading(true);
      const url = `https://rvbbackend.onrender.com/updateBook/${selected._id}`;
      const response = await axios.put(url, data);
      toast.success('Data updated successfully');
      console.log(response);
    } catch (error) {
      toast.warning('could not update a booking');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
   
  const handleDelete = async(id)=>{
    try {
      const url = `https://rvbbackend.onrender.com/book/${id}`
      const response = await axios.delete(url)
      confirm("Do you really want to delete this booking ? , OK ")
      toast.success("Booking deleted successfully")
      window.location.reload(true)
    } catch (error) {
      toast.warning("Could not delete booking")
      console.log(error)
    }
  }
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
                <h1 className="text-2xl text-bold ml-4">Bookings</h1>
              </div>
            </div>
            <Link to="/createPlace">
              {' '}
              <div className="pr-10 text-xs text-green-400 border-blue-50 font-bold">
                Create Place
              </div>
            </Link>
          </div>

          {/* end of navbar */}

          {/* table */}
          <table className="w-scree bg-white mx-5 mt-3">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  FullName
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Number of people
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>

                {/* <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Message
                </th> */}
                <th className="px-6 py-3 border-b-2 border-gray-300"></th>
              </tr>
            </thead>
            <tbody>
              {booking.map((book) => {
                return (
                  <tr key={book._id}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                      <div className="text-sm leading-5 text-gray-900">
                        {book.fullName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                      <div className="text-sm leading-5 text-gray-900">
                        {book.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                      <div className="text-sm leading-5 text-gray-900">
                        {book.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                      <div className="text-sm leading-5 text-gray-900">
                        {book.numberOfPeople}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                      <div className="text-sm leading-5 text-gray-900">
                        {book.date}
                      </div>
                    </td>
                    {/* <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                      <div className="text-sm leading-5 text-gray-900">
                        {book.message}
                      </div>
                    </td> */}
                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-300 text-sm leading-5 font-medium flex justify-center">
                      <button
                        className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline text-2xl cursor-pointer"
                        onClick={() => {
                          setPage(true);
                          setSelected(book);
                        }}
                      >
                        <MdEdit />
                      </button>
                      <button className="ml-2 text-red-600 hover:text-red-900 focus:outline-none focus:underline text-2xl">
                        <MdDelete 
                        onClick={()=>handleDelete(book._id)}
                        />
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
            className="bg-red-500 my-5 w-1/2  flex justify-center py-5 pb-5 rounded-md shadow-2xl"
            onSubmit={handleSubmit(handleUpdate)}
          >
            <div
              className="text-center absolute top-[-1px] bg-white p-3 mt-3 rounded-full cursor-pointer"
              onClick={() => setPage(false)}
            >
              <FaTimes />
            </div>
            <div>
              <h1 className="text-2xl font-sans font-bold text-center py-5">
                Edit Booking
              </h1>
              {/* divi */}
              <div className="flex justify-between ">
                <div>
                  <label htmlFor="placeName">Full Name</label>
                  <div>
                    <input
                      type="text"
                      className="rounded-md py-2 px-2 "
                      style={{ width: '22rem', outline: 'none' }}
                      {...register('fullName')}
                    />
                    <br />

                    <p className="text-red-500 text-xs text-start"></p>
                  </div>
                </div>
                <div>
                  <label htmlFor="placeName">Email</label>
                  <div>
                    <input
                      type="email"
                      className="rounded-md py-2 px-2"
                      style={{ width: '22rem', outline: 'none' }}
                      {...register('email')}
                    />
                    <br />

                    <p className="text-red-500 text-xs text-start"></p>
                  </div>
                </div>
              </div>
              {/* div */}
              {/* div */}
              <div className="flex justify-between ">
                <div>
                  <label htmlFor="placeName">Phone</label>
                  <div>
                    <input
                      type="text"
                      className="rounded-md py-2 px-2"
                      style={{ width: '22rem', outline: 'none' }}
                      {...register('phone')}
                    />
                    <br />

                    <p className="text-red-500 text-xs text-start"></p>
                  </div>
                </div>
                <div>
                  <label htmlFor="placeName">Number Of People</label>
                  <div>
                    <input
                      type="text"
                      className="rounded-md py-2 px-2"
                      style={{ width: '22rem', outline: 'none' }}
                      {...register('numberOfPeople')}
                    />
                    <br />

                    <p className="text-red-500 text-xs text-start"></p>
                  </div>
                </div>
              </div>
              {/* div */}

              {/* div */}
              <div className="flex justify-between ">
                <div>
                  <label htmlFor="placeName">Date</label>
                  <div>
                    <input
                      type="date"
                      className="rounded-md py-2 px-2"
                      style={{ width: '22rem', outline: 'none' }}
                      {...register('date')}
                    />
                    <br />

                    <p className="text-red-500 text-xs text-start"></p>
                  </div>
                </div>
                <div>
                  <label htmlFor="placeName">Message</label>
                  <div>
                    <input
                      type="text"
                      className="rounded-md py-2 px-2"
                      style={{ width: '22rem', outline: 'none' }}
                      {...register('message')}
                    />
                    <br />

                    <p className="text-red-500 text-xs text-start"></p>
                  </div>
                </div>
              </div>
              {/* div */}
              {/* div */}

              <div>
                <button
                  className="bg-blue-400 text-white font-sans mt-5 rounded-md py-2 px-2"
                  style={{ width: '22rem', outline: 'none' }}
                  disabled={loading}
                >
                  {loading ? <ClipLoader size={20} color="white" /> : 'Edit'}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Bookings;
