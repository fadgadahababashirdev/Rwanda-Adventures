import { FaTiktok } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
export default function Footer() {

  return (
    <div className="bg-gray-100 text-black   relative p-4 flex flex-col h-96 font-thin">

      <div>
        <p className="text-3xl" >RWANDA VENTURES</p>
      </div>
      <div className='flex flex=col  gap-48 '>
        <div className='flex flex-col gap-6'>
          <p className="text-2xl">Work with us</p>
          <p className="text-l text-gray-700 font-thin">Country tour</p>
          <p className="text-l text-gray-700 font-thin">Camping</p>
          <p className="text-l text-gray-700 font-thin">Hiking</p>

        </div>
        <div className='flex flex-col gap-5'>
          <h1 className="text-3xl text-center pt-5">Connect</h1>
          <div className='flex flex-row gap-10 text-center pt-10'>
            <FaTiktok className="text-xl" />
            <FaFacebookF className="text-xl" />
            <FaXTwitter className="text-xl" />
            <IoLogoInstagram className="text-xl" />
            <FaYoutube className="text-xl" /></div>

        </div>

      </div>
      <div className='flex flex-row justify-evenly pt-32 text-gray-700 font-thin'>
        <div><p>© RwandaVentures.com 2024</p></div>
        <div><p>Terms of use</p></div>
        <div><p>Privacy statement </p></div>
        <div><p>Accessibility</p></div>
        <div><p>Cookies</p></div>
        <div><p>Feedback</p></div>
        <div className='flex flex-row gap-2 font-thin'>
          <p>Back to top</p>
          <FaArrowUp />
        </div>
      </div>
</div>
      );
}
