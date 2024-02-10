// import Swiper core and required modules
import React from 'react';
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

export default () => {

    const breakpoints = {

        768: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
        720: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
        }
    };
    const images = [
        {
            img: '../public/forest.jpg',
            Name: 'Member1',
            title: 'lorem Ipsum',
            description:
                'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
        },
        {
            img: '../public/frog.jpg',
            Name: 'Member1',
            title: 'Member1',
            description:
                'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
        },
        {
            img: '../public/gollira.jpg',
            Name: 'Member2',
            title: 'lorem Ipsum',
            description:
                'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
        },
        {
            img: '../public/ima.jpg',
            Name: 'Member1',
            title: 'lorem Ipsum',
            description:
                'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
        },
        {
            img: '../public/iman.jpg',
            Name: 'Member3',
            title: 'lorem Ipsum',
            description:
                'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
        },
        {
            img: '../public/img.jpg',
            Name: 'Member4',
            title: 'lorem Ipsum',
            description:
                'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
        },
        {
            img: '../public/monkey.jpg',
            Name: 'Member5',
            title: 'lorem Ipsum',
            description:
                'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
        },
        {
            img: '../public/mountain.jpg',
            Name: 'Member6',
            title: 'lorem Ipsum',
            description:
                'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
        },
        {
            img: '../public/waterfalls.jpg',
            Name: 'Member7',
            title: 'lorem Ipsum',
            description:
                'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
        },
    ];
    return (
        <div className="h-screen mt-4 ml-10 latest" id="Team">
            <div className='flex flex-col lg:flex-row'>
                <div className="lg:w-1/2">
                    <div>
                        <p className="border-b w-1/2 border-gray-500 sm:w-full pt-4 pb-4"></p>
                    </div>
                    <h1 className="text-3xl font-bold pt-4">OUR TEAM</h1>
                </div>
                <div className="lg:w-1/2 px-10">
                    <p className="pt-10">At Explorer Rwanda, our team is the heart and soul of everything we do. Comprised of passionate individuals with diverse backgrounds and expertise, we come together to achieve one common goal: delivering exceptional results for our clients..</p>
                </div>
            </div>

            <hr className="w-72" />


            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={40}
                slidesPerView={3.2}
                breakpoints={breakpoints}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{ delay: 3000 }}
            >
                {images.map((image) => {
                    return (
                        <SwiperSlide className="mt-5">
                            <img src={image.img} alt="" className="rounded-t-xl" />
                            <h3 className="ml-1">{image.Name}</h3>
                            <h4 className="ml-1">{image.title}</h4>
                            <p className="font-sans text-sm ml-1">{image.description}</p>
                        </SwiperSlide>
                    );
                })}
        
            </Swiper>
  </div>
    );
            }