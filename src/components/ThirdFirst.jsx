// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useContext } from 'react';
import { Context } from './TouristContext';
import { Link } from 'react-router-dom';


export default () => {

  const {images} =useContext(Context)
  return (
    <div className="h-screen mt-4 ml-10 latest">
      <hr className="w-72" />
      <div className="text-serif">
        <h2 className="text-sm mt-4 ml-10"> Latest tours with...</h2>
      </div>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3.5}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        autoplay={{ delay: 3000 }}
      >
        {images.map((image) => {
          return (
            <SwiperSlide className="mt-5"key={image.id}>
              <Link to={`${image.id}`}><img src={image.img} alt="" /></Link>
              <h4 className="ml-1">{image.title}</h4>
              <p className="font-sans text-sm ml-1">{image.description}</p>
            </SwiperSlide>
          );
        })}
        ...
      </Swiper>
    </div>
  );
};
