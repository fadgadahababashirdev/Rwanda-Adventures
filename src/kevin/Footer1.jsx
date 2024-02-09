import { FaTiktok } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
export default function Footer1() {

  return (
    <div className="bg-gray-100 text-black  md:h-full lg:h-full  relative p-4 flex flex-col  font-thin">

      <div>
        <p className="text-3xl" >RWANDA VENTURES</p>
      </div>
      <div className='flex flex-col  gap-2 lg:gap-2 md:gap-32'>
        <div className='flex flex-col gap-6 font-sans'>
          <p className="text-2xl font-sans">Work with us</p>
          <p className="text-l text-gray-700 font-thin font-sans">Country tour</p>
          <p className="text-l text-gray-700 font-thin font-sans">Camping</p>
          <p className="text-l text-gray-700 font-thin font-sans">Hiking</p>

        </div>
        <div className='flex flex-col gap-5'>
          <h1 className="text-3xl text-center pt-2 font-sans">Connect</h1>

          <div className=' flex flex-col md:flex-col  lg:flex-row gap-10 text-center pt-10'>
            <FaTiktok className="text-xl" />
            <FaFacebookF className="text-xl" />
            <FaXTwitter className="text-xl" />
            <IoLogoInstagram className="text-xl" />
            <FaYoutube className="text-xl" />
          </div>

        </div>
        <div className='flex  flex-col gap-2 md:flex-row  justify-evenly pt-32 text-gray-700 font-mono '>
          <div><p className='font-sans'>© RwandaVentures.com 2024</p></div>
          <div><p className='font-sans'>Terms of use</p></div>
          <div><p className='font-sans'>Privacy statement </p></div>
          <div><p className='font-sans'>Accessibility</p></div>
          <div><p className='font-sans'>Cookies</p></div>
          <div><p className='font-sans'>Feedback</p></div>
          <div className='flex flex-row gap-2 font-thin'>
            <p className='font-sans'>Back to top</p>
            <FaArrowUp className='font-sans' />
          </div>
        </div>
      </div>

    </div>
  );
}