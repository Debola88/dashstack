import SwiperComponent from "@/components/shared/swiper";
import { Card } from "@/components/ui/card";
import bgimage from "@/assets/images/Image.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ProductCarousel() {
  return (
    <div className="@container/main">
      <SwiperComponent
        autoplay={true}
        loop
        showArrows
        showDots
        className="h-[280px] rounded-xl overflow-hidden"
      >
        <div className="relative h-[280px] w-full bg-blue-500">
          <div className="absolute inset-0 lg:py-10 lg:px-20 p-5 text-white z-10">
            <p className="mb-2 max-md:text-sm">September 12-22</p>
            <h2 className="font-bold text-3xl max-md:text-2xl">Enjoy free home</h2>
            <h2 className="font-bold text-3xl max-md:text-2xl">delivery in this summer</h2>
            <p className="my-2 max-md:text-sm">
              Designer Dresses - Pick from trendy Designer Dress
            </p>
            <Button className="text-white bg-[#FF8743]">Get Started</Button>
          </div>
        </div>
        <div className="relative h-full w-full bg-blue-500">
          <div className="absolute inset-0 lg:py-10 lg:px-20 p-5 text-white z-10">
            <p className="mb-2 max-md:text-sm">September 12-22</p>
            <h2 className="font-bold text-3xl max-md:text-2xl">Lorem text</h2>
            <h2 className="font-bold text-3xl max-md:text-2xl">delivery in this summer</h2>
            <p className="my-2 max-md:text-sm">
              Designer Dresses - Pick from trendy Designer Dress
            </p>
            <Button className="text-white bg-[#FF8743]">Get Started</Button>
          </div>
        </div>
      </SwiperComponent>
    </div>
  );
}
