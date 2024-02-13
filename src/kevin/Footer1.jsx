import React from 'react';
import { FaTiktok } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
export default function Footer1() {

    return (
        <div className=" bg-blue-100 text-black  md:h-full lg:h-full  relative   font-thin px-5">


            <div className='flex flex-col gap-2'>
                <div className=''>
                    <p className="text-2xl lg:mr-48 font-semibold lg:flex flex-row justify-start" >RWANDA VENTURES</p>
                </div>
                <div>
                    <div className='lg:flex flex-row  gap-28'><div className='flex flex-col gap-2 font-sans'>
                        <p className="text-2xl font-sans">Work with us</p>
                        <p className="text-lg  font-thin font-sans">Country tour</p>
                        <p className="text-lg  font-thin font-sans">Camping</p>
                        <p className="text-lg  font-thin font-sans">Hiking</p>

                    </div>
                        <div className='flex flex-col gap-5'>
                            <h1 className="text-2xl text-center pt-2 font-sans">Connect</h1>

                            <div className=' flex flex-row gap-10 justify-center'>
                                <FaTiktok className="text-xl" />
                                <FaFacebookF className="text-xl" />
                                <FaXTwitter className="text-xl" />
                                <IoLogoInstagram className="text-xl" />
                                <FaYoutube className="text-xl" />
                            </div>
                            <div> <h1 className="text-2xl text-center pt-2 font-sans">Contact Us</h1></div>
                        </div></div>

                </div>

                <div className=' font-sans lg:flex flex-row justify-between lg:mt-10'>
                    <div><p className='font-sans text-sm'>Terms of use</p></div>
                    <div><p className='font-sans text-sm'>Privacy statement </p></div>
                    <div><p className='font-sans  text-sm'>Accessibility</p></div>
                    <div><p className='font-sans text-sm'>Cookies</p></div>
                    <div><p className='font-sans text-sm'>Feedback</p></div>
                    <div><p className='font-sans text-sm hidden md:block lg:block'>© RwandaVentures.com 2024</p></div>
                    <div className='flex flex-row gap-2  font-thin  text-sm'>
                        <div><p className='font-sans text-sm md:hidden lg:hidden'>© RwandaVentures.com 2024</p></div>
                        <p className='font-sans text-sm flex flex-row'>Back to top  </p>
                        <a href="#first"> <FaArrowUp className='font-sans text-sm mb-0.5 lg:mb-0' /></a>
                    </div>
                </div>
            </div>

        </div>
    );
}