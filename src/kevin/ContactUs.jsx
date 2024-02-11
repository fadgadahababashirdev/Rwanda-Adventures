import React from "react";
export default function ContactUs() {
    return (
        <div className="">
<form className="flex flex-col border-2 justify-evenly text-center  hover:border-blue-500 w-1/2 h-72 ml-10  bg-blue-200">
<div> <h1 className="text-xl text-center font-sans">Contact Us</h1></div>
<input type="text" placeholder="full Names" className=" text-center"/> 
<input type="text" placeholder="Email" className="text-center"/>
<input type="text" placeholder="Your Message " className="h-1/2 text-center"/>
<button className=" bg-blue-300 w-2/12 rounded-lg hover:bg-blue-400" type="submit"  >submit</button>
</form>
           </div> );}