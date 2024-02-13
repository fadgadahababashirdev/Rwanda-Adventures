import React from "react";
import myImage1 from '../images/tea-plantation-7344892_1280.jpg';
import myImage2 from '../images/savannah-8079856_1280.jpg';
import myImage3 from '../images/download (2).jpeg';
const Page = [
    {
        title: "Virunga National Park",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam laudantium illo optio architecto voluptatum, possimus recusandae suscipit. Minus et quisquam repudiandae magni, iure rerum quo ipsam maiores, sunt beatae porro.",
        image: myImage3
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

export default function ServicePage() {
    return (
        <div className="flex flex-col gap-5 items-center">
            <h1 className="text-center text-4xl mt-10">Our Services</h1>
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
    );
}
