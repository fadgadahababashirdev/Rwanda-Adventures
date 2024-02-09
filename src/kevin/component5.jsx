import { FaArrowRight } from "react-icons/fa";
import React from "react";
import myImage from '../images/savannah-8079856_1280.jpg';
import myImage1 from '../images/Masterclass__1200x675_hero.jpg';
import myImage2 from '../images/Finland_Aurora_dome_Jeris_Antti_Pietikäinen.12422788202013340987_optimized.jpg';
import myImage3 from '../images/Riisitunturi_by_Julia_Kivela-8894_optimized.jpg';
import myImage4 from '../images/Finland_Lapland_winter_Sunset snowshoeing_Levi_optimized.jpg';
import myImage5 from '../images/Savoy-Interior-7.jpeg';
import myImage6 from '../images/___Lapland_People_Sami_Mikko Ryhänen.12414660736871135524.jpg'
import { CiHeart } from "react-icons/ci";

const page = {
    heading: "Get to know Rwanda",
    text: "Explore all articles",
    text1: "Here are a few things to help you get acquainted with this unique hilly country.",
};

export default function Component5() {
    return (

        <div className="py-10 bg-slate-100 sm:h-full mx-10 mb-20">
            <div className="py-10 bg-slate-100 h-screen sm:h-full mx-10">
                <div className="flex flex-col sm:flex-row justify-between">
                    <div className="w-full sm:w-1/2 sm:flex-col">
                        <p className="border-b border-gray-500 w-full sm:w-1/2 pt-4 pb-4"></p>
                        <h1 className="text-3xl font-bold pt-4">{page.heading}</h1>
                        <div className="flex flex-row gap-2">
                            <p className="text-green-700 font-semibold">{page.text}</p>
                            <FaArrowRight style={{ width: '64px' }} className="pt-2 text-green-700 h-4" />
                        </div>
                    </div>
                    <div>
                        <p className="pt-10">{page.text1}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2  mb-24  md:grid-cols-2 lg:grid-cols-3  h-96   gap-14 lg:mx-50  pt-10">
                    <div className=" h-52  flex flex-col justify-center items-cente ">
                        <div className="relative">
                            <img src={myImage1} alt="Download (4)" className="h-full object-cover rounded-md transition-transform transform hover:scale-110 p-4" />
                            <div className="absolute bottom-0 right-0">
                                <CiHeart className="bg-black text-white"/>
                            </div>
                        </div>
                        <p className="text-center bg-white">Happiness has been defined in multiple ways...</p>

                 </div>
                 <div className=" h-52  flex flex-col justify-center items-cente  ">
                        <div className="relative">
                            <img src={myImage2} alt="Download (4)" className="h-full object-cover rounded-md transition-transform transform hover:scale-110 p-4" />
                            <div className="absolute bottom-0 right-0">
                                <CiHeart className="bg-black text-white"/>
                            </div>
                        </div>
                        <p className="text-center bg-white">Happiness has been defined in multiple ways...</p>

                 </div>
                 <div className=" h-52  flex flex-col justify-center items-cente  ">
                        <div className="relative">
                            <img src={myImage2} alt="Download (4)" className="h-full object-cover rounded-md transition-transform transform hover:scale-110 p-4" />
                            <div className="absolute bottom-0 right-0">
                                <CiHeart className="bg-black text-white"/>
                            </div>
                        </div>
                        <p className="text-center bg-white">Happiness has been defined in multiple ways...</p>

                 </div>
                
                 <div className=" h-52 flex flex-col justify-center items-cente ">
                        <div className="relative">
                            <img src={myImage4} alt="Download (4)" className="h-full object-cover rounded-md transition-transform transform hover:scale-110 p-4" />
                            <div className="absolute bottom-0 right-0">
                                <CiHeart className="bg-black text-white"/>
                            </div>
                        </div>
                        <p className="text-center bg-white">Happiness has been defined in multiple ways...</p>

                 </div>
                 <div className=" h-52  hidden md:flex flex-col  lg:flex-col justify-center items-cente ">
                        <div className="relative">
                            <img src={myImage5} alt="Download (4)" className="h-full object-cover rounded-md transition-transform transform hover:scale-110 p-4" />
                            <div className="absolute bottom-0 right-0">
                                <CiHeart className="bg-black text-white"/>
                            </div>
                        </div>
                        <p className="text-center bg-white">Happiness has been defined in multiple ways...</p>

                 </div>
                 <div className="  h-52  hidden md:flex flex-col  lg:flex-col justify-center items-center ">
                        <div className="relative">
                            <img src={myImage6} alt="Download (4)" className="h-full object-cover rounded-md transition-transform transform hover:scale-110 p-4" />
                            <div className="absolute bottom-0 right-0">
                                <CiHeart className="bg-black text-white"/>
                            </div>
                        </div>
                        <p className="text-center bg-white">Happiness has been defined in multiple ways...</p>

                 </div>

                </div>

            </div>
        </div>
    );
}
