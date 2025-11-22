"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { StaticImageData } from 'next/image';

interface SwiperProps {
  slide: StaticImageData;
}

export default function BasicSwiper({slide}: SwiperProps ) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        spaceBetween={20}
        slidesPerView={1}
        className="mySwiper"
      >
        <SwiperSlide>{slide}</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>

      <button className="swiper-button-prev-custom absolute left-4 top-1/2  z-10 bg-[#E2EAF8] hover:bg-[#E2EAF8]/50 rounded-full p-3 transition-all">
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      
      <button className="swiper-button-next-custom absolute right-4 top-1/2  z-10 bg-[#E2EAF8] hover:bg-[#E2EAF8]/50 rounded-full p-3 transition-all">
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
}