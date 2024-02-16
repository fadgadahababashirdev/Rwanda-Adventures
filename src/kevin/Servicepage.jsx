import React from "react";
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
import { FaArrowRight } from "react-icons/fa";

const Page = [
    {
        title: "Virunga National Park",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam laudantium illo optio architecto voluptatum, possimus recusandae suscipit. Minus et quisquam repudiandae magni, iure rerum quo ipsam maiores, sunt beatae porro.",
        image: myImage8
    },
    
    {
        title: "Akagera National Park",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam laudantium illo optio architecto voluptatum, possimus recusandae suscipit. Minus et quisquam repudiandae magni, iure rerum quo ipsam maiores, sunt beatae porro.",
        image: myImage2
    },
    
    {
        title: "Nyungwe National Park",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam laudantium illo optio architecto voluptatum, possimus recusandae suscipit. Minus et quisquam repudiandae magni, iure rerum quo ipsam maiores, sunt beatae porro.",
        image: myImage1
    },
    
];
const activities = [
    {
    title: "Hiking",
image: myImage4,
    },
    {
    title: "Camping",
    image: myImage5,
},
{
    title: "Bird Watching",
    image: myImage6,
},
{
    title: "Game Drive",
    image: myImage9,
},
{
    title: "Boat Cruise",
    image: myImage7,
},
{
    title: "Canopy Walk",
    image: myImage10,
},  
];

export default function ServicePage() {
    return (
    <div className="mx-10" >
        <div>
        <h1 className="text-center text-3xl  font-semibold pt-10">Our Services</h1>
        <div className="flex flex-row justify-between">
        <h3 className=" text-3xl mt-2">Tours</h3>
        <p className="border-b border-gray-500 w-full sm:w-1/2 pt-4 pb-4"></p>
        </div>
          
        <div className="flex flex-col gap-5 items-center">
            <div className="flex flex-col md:flex-row gap-2 mx-2 items-center">
                <div className="flex flex-col items-center"> 
                    <h1 className="text-2xl">{Page[0].title}</h1>
                    <div className="h-72 w-72 md:w-auto overflow-hidden rounded-md">
                        <img src={Page[0].image} alt="Guided Tour" className="h-full w-full object-cover" />
                    </div>
                </div>
                <div className="bg-gray-100 px-4 py-6 max-w-xl">
                    <p className="text-xl text-center">{Page[0].description}</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 mx-2 items-center">
                <div className="flex flex-col items-center"> 
                    <h1 className="text-2xl">{Page[1].title}</h1>
                    <div className="h-72 w-72 md:w-auto overflow-hidden rounded-md">
                        <img src={Page[1].image} alt="Guided Tour" className="h-full w-full object-cover" />
                    </div>
                </div>
                <div className="bg-gray-100 px-4 py-6 max-w-xl">
                    <p className="text-xl text-center">{Page[1].description}</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 mx-2 items-center">
                <div className="flex flex-col items-center"> 
                    <h1 className="text-2xl">{Page[2].title}</h1>
                    <div className="h-72 w-72 md:w-auto overflow-hidden rounded-md">
                        <img src={Page[2].image} alt="Guided Tour" className="h-full w-full object-cover" />
                    </div>
                </div>
                <div className="bg-gray-100 px-4 py-6 max-w-xl">
                    <p className="text-xl text-center">{Page[2].description}</p>
                </div>
            </div>
        </div>
        <div className="flex  flex-col md:flex-row justify-between py-10">
        <h3 className=" text-xl mt-2">Other Activities</h3>
        <div className="">
        <p className="border-b border-gray-500 w-1/2 sm:w-1/2 pt-4 pb-5"></p>
        <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, fugiat non rerum vel ut vitae nobis. Eligendi odio libero delectus quo quis obcaecati quibusdam non consequuntur, ipsam in. Dolore, nam!</p>
        </div>
       
        </div>
        <div className=" flex flex-col md:grid grid-cols-3 lg:grid-cols-3 justify-evenly  gap-10 ">
            <div className="flex flex-col md:flex-row gap-2 mx-2 items-center  ">
                <div className="flex flex-col items-center"> 
                    <h1 className="text-2xl">{activities[0].title}</h1>
                    <div className="h-72 w-72 md:w-auto overflow-hidden rounded-md">
                        <img src={activities[0].image} alt="Guided Tour" className="h-full w-full object-cover transition-transform transform hover:scale-110 " />
                    </div>
                </div>
               
            </div>
            <div className="flex flex-col md:flex-row gap-2 mx-2 items-center">
                <div className="flex flex-col items-center"> 
                    <h1 className="text-2xl">{activities[1].title}</h1>
                    <div className="h-72 w-72 md:w-auto overflow-hidden rounded-md">
                        <img src={activities[1].image} alt="Guided Tour" className="h-full w-full object-cover transition-transform transform hover:scale-110 " />
                    </div>
                </div>
               
            </div>
            <div className="flex flex-col md:flex-row gap-2 mx-2 items-center">
                <div className="flex flex-col items-center"> 
                    <h1 className="text-2xl">{activities[2].title}</h1>
                    <div className="h-72 w-72 md:w-auto overflow-hidden rounded-md">
                        <img src={activities[2].image} alt="Guided Tour" className="h-full w-full object-cover transition-transform transform hover:scale-110 " />
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 mx-2 items-center">
                <div className="flex flex-col items-center"> 
                    <h1 className="text-2xl">{activities[3].title}</h1>
                    <div className="h-72 w-72 md:w-auto overflow-hidden rounded-md">
                        <img src={activities[3].image} alt="Guided Tour" className="h-full w-full object-cover transition-transform transform hover:scale-110 " />
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 mx-2 items-center">
                <div className="flex flex-col items-center"> 
                    <h1 className="text-2xl">{activities[4].title}</h1>
                    <div className="h-72 w-72 md:w-auto overflow-hidden rounded-md">
                        <img src={activities[4].image} alt="Guided Tour" className="h-full w-full object-cover transition-transform transform hover:scale-110 " />
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 mx-2 items-center">
                <div className="flex flex-col items-center"> 
                    <h1 className="text-2xl">{activities[5].title}</h1>
                    <div className="h-72 w-72 md:w-auto overflow-hidden rounded-md">
                        <img src={activities[5].image} alt="Guided Tour" className="h-full w-full object-cover transition-transform transform hover:scale-110 " />
                    </div>
                </div>
            </div>
            
        </div>
        </div>
        <button className="bg-green-700 hover:bg-green-900 text-white px-8 py-2 rounded-md mt-4 flex items-center">
                        Book Here
                        <FaArrowRight className="ml-2 w-5 h-5" />
                    </button> 
    </div>
      
    );
}
