import watch from "@/assets/images/Bitwatch.png";
import SwiperComponent from "@/components/shared/swiper";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import {
  MdOutlineFavoriteBorder,
  MdStarOutline,
  MdStarRate,
  MdOutlineFavorite,
} from "react-icons/md";


const productInfo = [
  {
    id: 1,
    name: "Apple watch Series 4",
    price: 120.0,
    ratings: 4,
    peoplerating: 134,
    image1: watch,
    image2: watch,
  },
  {
    id: 2,
    name: "Air-Max-270",
    price: 60.0,
    ratings: 5,
    peoplerating: 131,
    image1: watch,
    image2: watch,
  },
  {
    id: 3,
    name: "Minimal Chair Tool",
    price: 24.59,
    ratings: 5,
    peoplerating: 132,
    image1: watch,
    image2: watch,
  },
  {
    id: 4,
    name: "Amazfit Vip",
    price: 75.0,
    ratings: 5,
    peoplerating: 132,
    image1: watch,
    image2: watch,
  },
  {
    id: 5,
    name: "Gumbo Mouse",
    price: 32.0,
    ratings: 5,
    peoplerating: 132,
    image1: watch,
    image2: watch,
  },
  {
    id: 6,
    name: "Camera Tripod",
    price: 120.0,
    ratings: 5,
    peoplerating: 132,
    image1: watch,
    image2: watch,
  },
];

export default function FavoriteCard() {
  return (
    <React.Fragment>
      {productInfo.map((product) => (
        <Card key={product.id}>
          <SwiperComponent
            autoplay={true}
            loop={true}
            showArrows
            showDots={false}
            className="rounded-xl"
          >
            <Image
              src={product.image1}
              alt=""
              width={200}
              height={250}
              className="object-fit w-full"
            />
            <Image
              src={product.image2}
              alt=""
              width={200}
              height={250}
              className="object-cover w-full"
            />
          </SwiperComponent>

          <CardFooter className="flex flex-col items-start">
            <div className="flex justify-between items-center w-full">
              <div className="space-y-1">
                <h2 className="text-xs md:text-xl font-semibold">
                  {product.name}
                </h2>
                <p className="text-xs md:text-base text-[#4880FF] font-semibold">
                  ${product.price}
                </p>
              </div>
              <div className="md:p-3 p-1 text-sm rounded-full md:text-lg bg-[#F9F9F9] text-[#F93C65] cursor-pointer">
                <MdOutlineFavorite />
              </div>
            </div>
            <div className="flex gap-1 mt-2 max-md:text-sm items-center">
              <span className="text-[#FF9500]">
                <MdStarRate />
              </span>
              <span className="text-[#FF9500]">
                <MdStarRate />
              </span>
              <span className="text-[#FF9500]">
                <MdStarRate />
              </span>
              <span className="text-[#FF9500]">
                <MdStarRate />
              </span>
              <span className="text-black/20">
                <MdStarRate />
              </span>
              <p className="text-sm text-black/40 max-md:text-xs">({product.peoplerating})</p>
            </div>
            <div className="mt-2.5">
              <Button className="bg-[#E2EAF8] text-black max-md:text-xs max-md:p-2 hover:bg-[#E2EAF8]/70 cursor-pointer">
                Edit Product
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </React.Fragment>
  );
}
