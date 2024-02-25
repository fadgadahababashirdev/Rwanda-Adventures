import React from 'react';
import myImage1 from '../images/tea-plantation-7344892_1280.jpg';
import myImage2 from '../images/savannah-8079856_1280.jpg';
import myImage3 from '../images/download (2).jpeg';
import myImage4 from '../images/Volcano-Hiking-Rwanda.jpg';
import myImage5 from '../images/camping-4303357_1280.jpg';
import myImage6 from '../images/kingfisher-6374507_1280.jpg';
import myImage7 from '../images/lake-balaton-1608516_1280.jpg';
import myImage8 from '../images/mount-kilimanjaro-7287230_1280.jpg';
import myImage9 from '../images/elephant-6824511_1280.jpg';
import myImage10 from '../images/bridge-2203661_1280.jpg';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Tou } from '../components/contexts/Tou';
import { Activ } from '../components/contexts/ActivityContext';
import './shadow.css';

const Page = [
  {
    title: 'Virunga National Park',
    description:
      '  Encounter awe-inspiring volcanoes, rare mountain gorillas, and breathtaking landscapes in this adventure-filled park.',
    image: myImage8,
  },
  {
    title: 'Akagera National Park',
    description:
      'Discover vast savannahs, scenic lakes, and a rich tapestry of wildlife in this diverse landscape.',
    image: myImage2,
  },
  {
    title: 'Nyungwe National Park',
    description:
      ' Explore lush rainforests, diverse wildlife, and captivating canopy walks in this natural wonderland.',
    image: myImage1,
  },
];

export default function ServicePage() {
  const { tours } = useContext(Tou);
  const { activities } = useContext(Activ);

  const ServiceButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/booking');
    };

    return (
      <div>
        <button onClick={handleClick}>Book Here</button>
      </div>
    );
  };

  return (
    <div className="mx-10 text-white">
      <div>
        <h1 className="text-center text-3xl  font-semibold pt-10 text-black">
          Our Services
        </h1>
        <div className="flex flex-row justify-between">
          <h3 className=" text-2xl text-center  font-bold  text-black">
            Tours
          </h3>
          <p className="border-b border-gray-500 w-full sm:w-1/2 pt-4 pb-4"></p>
        </div>

        {tours.map((tour, index) => (
          <div className="flex flex-col gap-5 items-center" key={index}>
            <div className="flex flex-col md:flex-row gap-2 mx-2 items-center">
              <div className="relative">
                <div className="h-72 w-72 md:w-auto overflow-hidden rounded-md">
                  <img
                    src={tour.image}
                    alt="Guided Tour"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-10 text-center bg-white bg-opacity-0">
                  <h1 className="text-2xl font-bold ">{tour.title}</h1>
                </div>
              </div>
              <div className=" px-4 py-6 max-w-xl">
                <p className="text-xl text-center text-black">
                  {tour.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-col md:flex-row justify-between py-10">
          <h3 className="text-2xl font-bold mt-2 md:w-1/2"> Activities</h3>
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

        <div className=" flex flex-col md:grid grid-cols-3 lg:grid-cols-3 justify-evenly  gap-10 ">
          {activities.map((activity, index) => (
            <div className="flex flex-col md:flex-row gap-2 mx-2 items-center" key={index}>
              <div className="relative">
                <div className="h-72 w-72 md:w-auto overflow-hidden rounded-md shadow">
                  <img
                    src={activity.image}
                    alt="Guided Tour"
                    className="h-full w-full object-cover transition-transform transform hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-10 text-center bg-white bg-opacity-0">
                  <h1 className="text-2xl font-bold">{activity.title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="bg-white  hover:bg-green-900 text-black px-8 py-2 rounded-md mt-4 flex items-center">
        <ServiceButton />
        <FaArrowRight className="ml-2 w-5 h-5" />
      </button>
    </div>
  );
}
