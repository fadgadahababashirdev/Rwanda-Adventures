import { FaTiktok } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
export default function Footer() {
  return (
    <div className="bg-gray-100 text-black   relative p-4 flex flex-col h-auto font-thin">
      <div>
        <p className="text-3xl">RWANDA VENTURES</p>
      </div>
      <div className="flex flex=col  gap-48 ">
        <div>
          <p className="text-2xl font-sans">Work with us</p>
          <p
            className="text-l text-gray-700 font-sans"
            style={{ fontSize: '15px' }}
          >
            Country tour
          </p>
          <p className="text-l text-gray-700 font-sans">Camping</p>
          <p className="text-l text-gray-700 font-sans">Hiking</p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl text-center font-sans">Connect</h1>
          <div className="flex flex-row gap-10 text-center">
            <FaTiktok className="text-xl" />
            <FaFacebookF className="text-xl" />
            <FaXTwitter className="text-xl" />
            <IoLogoInstagram className="text-xl" />
            <FaYoutube className="text-xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-evenly text-gray-700 font-sans">
        <div>
          <p className="font-sans">© RwandaVentures.com 2024</p>
        </div>
        <div>
          <p className="font-sans">Terms of use</p>
        </div>
        <div>
          <p className="font-sans">Privacy statement </p>
        </div>
        <div>
          <p className="font-sans">Accessibility</p>
        </div>
        <div>
          <p className="font-sans">Cookies</p>
        </div>
        <div>
          <p className="font-sans">Feedback</p>
        </div>
        <div className="flex flex-row gap-2 font-thin">
          <p className="font-sans">Back to top</p>
          <FaArrowUp />
        </div>
      </div>
    </div>
  );
}
