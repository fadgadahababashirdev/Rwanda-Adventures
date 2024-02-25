import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Tou } from '../components/contexts/Tou';
import { Activ } from '../components/contexts/ActivityContext';
import './shadow.css';

const ServicePage = () => {
  const { tours } = useContext(Tou);
  console.log('The test to see if tours work', tours);
  const { activities } = useContext(Activ);
  const navigate = useNavigate();

  const ServiceButton = () => {
    const handleClick = () => {
      navigate('/booking');
    };

    return (
      <button
        onClick={handleClick}
        className="bg-white hover:bg-green-900 text-black px-8 py-2 rounded-md flex items-center"
      >
        Book Here <FaArrowRight className="ml-2 w-5 h-5" />
      </button>
    );
  };

  return (
    <div className="mx-10 text-white">
      <div>
        <h1 className="text-center text-3xl font-semibold pt-10 text-black">
          Our Services
        </h1>
        <div className="flex flex-row justify-between">
          <h3 className="text-2xl text-center font-bold text-black">Tours</h3>
          <p className="border-b border-gray-500 w-full sm:w-1/2 pt-4 pb-4"></p>
        </div>

        {tours.map((tour) => (
          <div
            className="flex flex-col gap-5 items-center mt-10 relative "
            key={tour._id}
          >
            <div className="flex flex-col md:flex-row gap-2 mx-2 items-center ">
              <div className="relative aspect-w-1 aspect-h-1">
                <div className="h-full w-full overflow-hidden rounded-md">
                  <img
                    src={tour.tourImage}
                    alt="Guided Tour"
                    style={{ width: '36em' }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-10 text-center bg-white bg-opacity-0">
                  <h1 className="text-2xl font-bold ">{tour.heading}</h1>
                </div>
              </div>
              <div className="px-4 py-6 max-w-xl">
                <p className="text-xl text-center text-black">
                  {tour.tourDescription}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-col md:flex-row justify-between py-10">
          <h3 className="text-2xl  text-black font-bold mt-2 md:w-1/2">
            Activities
          </h3>
          <div className="flex flex-col md:flex-col w-full md:w-1/2 justify-between items-center">
            <div className="border-t border-black">
              <p className="text-lg h-1/2 w-1/2 md:w-auto text-black">
                In Rwanda, beyond its renowned national parks, immerse yourself
                in vibrant cultural experiences, thrilling outdoor adventures,
                and captivating historical sites. Explore bustling markets,
                embark on scenic hikes, and engage with local communities for an
                unforgettable journey.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:grid grid-cols-3 lg:grid-cols-3 justify-evenly gap-10">
          {activities.map((activity, index) => (
            <div
              className="flex flex-col md:flex-row gap-2 mx-2 items-center"
              key={activity._id}
            >
              <div className="relative aspect-w-1 aspect-h-1">
                <div className="h-full w-full overflow-hidden rounded-md shadow">
                  <img
                    src={activity.activityImage}
                    alt="Image not found"
                    className="object-cover transition-transform transform hover:scale-110"
                    style={{ height: '400px' }}
                    
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-10 text-center bg-white bg-opacity-0">
                  <h1 className="text-2xl font-bold">
                    {activity.activityName}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ServiceButton />
    </div>
  );
};

export default ServicePage;
