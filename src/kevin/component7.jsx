import React from 'react';
import myImage2 from '../images/Finland_Aurora_dome_Jeris_Antti_Pietikäinen.12422788202013340987_optimized.jpg';
   
    const page = {
        heading: "Inspiration for your next trip",
        text: "Explore all articles",
        text1: "Not sure what to do on your next trip to Finland? No worries. We have gathered a selection of curated journeys from different parts of the country. Find interesting sights to see, places to visit, and restaurants to dine in.",
    };

export default function Component7() {
 
    return (
        <div>
            <div className='flex flex-col lg:flex-row'>
                <div className="lg:w-1/2">
                    <div>
                        <p className="border-b w-1/2 border-gray-500 sm:w-full pt-4 pb-4"></p>
                    </div>
                    <h1 className="text-3xl font-bold pt-4">{page.heading}</h1>
                </div>
                <div className="lg:w-1/2 px-10">
                    <p className="pt-10">{page.text1}</p>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full lg:w-3/4 mx-auto">
                
                    <div className="grid grid-cols-5 gap-4">
                        <img src={myImage2} alt="Download (4)" className="object-cover rounded-md" />
                    </div>
                   
                    
                    <div className="flex justify-between mt-4">
                        {/* <button>{left}</button> */}
                        {/* <button>{Right}</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
