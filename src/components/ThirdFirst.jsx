import React from 'react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useContext } from 'react';
import { Context } from './TouristContext';
import { Link } from 'react-router-dom';

export default () => {
  const { images } = useContext(Context);
  return (
    <div id='third' className="h-full mt-4 latest">
      <hr className="w-72" />
      <div className="text-serif">
        <h2 className="text-sm mt-4  text-center"> Latest tours with...</h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          460: {
            slidesPerView: 2,
          },
          673: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1633: {
            slidesPerView: 8,
          }
        }}
      >
        {images.map((image) => {
          return (
            <SwiperSlide className="mt-5 " key={image.id}>
              <Link to={`${image.id}`}>
                <img
                  src={image.img}
                  alt=""
                  style={{ width: '100vh', height: '50vh' }}
                />
              </Link>
              <h4 className="ml-1">{image.title}</h4>
              <p className="font-sans text-sm text-start">
                {image.description}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
