import { FaArrowRight } from "react-icons/fa";
import React from "react";
import myImage from '../images/wallpaper.jpg';
const page = {
    heading: "Get to know Rwanda",
    text: "Explore all articles",
    text1: "Here are a few things to help you get acquainted with this unique hilly country.",
};
export default function Component6() {
    return (
        <div className="py-20 relative ">
            <div className="h-screen relative ">
                <div className="absolute inset-0">
                    <img src={myImage} alt="Background" className="h-screen w-full object-cover" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="flex flex-col  p-10   pt-40 text-white relative gap-10 ">
                    <h1 className="text-5xl font-bold">{page.heading}</h1>
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
