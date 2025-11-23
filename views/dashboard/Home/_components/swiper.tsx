"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import type { Swiper as SwiperType } from "swiper";

interface Product {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
}

interface SwiperProps {
  products: Product[];
  onSlideChange: (index: number) => void;
}

export default function BasicSwiper({ products, onSlideChange }: SwiperProps) {
  const handleSlideChange = (swiper: SwiperType) => {
    onSlideChange(swiper.realIndex);
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        spaceBetween={20}
        slidesPerView={1}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="grid place-items-center">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="swiper-button-prev-custom absolute left-0 top-1/2 z-20 bg-[#E2EAF8] hover:bg-[#E2EAF8]/50 rounded-full p-2 transition-all">
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button className="swiper-button-next-custom absolute right-0 top-1/2 z-20 bg-[#E2EAF8] hover:bg-[#E2EAF8]/50 rounded-full p-2 transition-all">
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
}
