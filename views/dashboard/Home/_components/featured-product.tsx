"use client"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BasicSwiper from "./swiper";
import headphone from "@/assets/images/headphones.png";
import watch from "@/assets/images/Bitmap (1).png";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Beats Headphone 2022",
    price: 89.0,
    image: headphone,
  },
  {
    id: 2,
    name: "Apple Watch Series 8",
    price: 399.0,
    image: watch,
  },
];

export default function FeaturedProduct() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProduct = products[currentIndex];

  return (
    <Card className="@container/card bg-white" suppressHydrationWarning>
      <CardHeader>
        <CardTitle className="text-2xl max-md:text-xl font-semibold tabular-nums">
          Featured Product
        </CardTitle>
      </CardHeader>
      <CardContent>
        <BasicSwiper products={products} onSlideChange={setCurrentIndex} />
      </CardContent>
      <CardFooter className="text-center gap-3 text-sm">
        <div className="w-full">
          <h3 className="text-base">{currentProduct.name}</h3>
          <p className="text-sm font-bold text-[#4880FF]">
            ${currentProduct.price.toFixed(2)}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
