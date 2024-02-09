import { FaArrowRight } from "react-icons/fa";
import React from "react";
import myImage from '../images/wallpaper.jpg';
import '../components/bg.css'
const page = {
    heading: "Get to know Rwanda",
    text: "Explore all articles",
    text1: "Here are a few things to help you get acquainted with this unique hilly country.",
};
export default function Component6() {
    return (
        <div className=" background">
            <div className="sm:h-full relative ">
                
                <div className="flex flex-col  p-10  pt-40 text-white  gap-10 ">
                    <h1 className="  text-3xl md:text-5xl font-bold">{page.heading}</h1>
                    <p className="text-2xl pt-4">{page.text1}</p>
                    <div>
                        <button className="bg-white text-green-700 px-8 py-2 rounded-md mt-4 flex items-center">
                        Learn More
                        <FaArrowRight className="ml-2 w-5 h-5" />
                    </button>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}
