import SwiperComponent from "@/components/shared/swiper";
import { Card } from "@/components/ui/card";
import bgimage from "@/assets/images/Image.png"
import Image from "next/image";

export default function ProductCarousel() {
  return (
    <div className="@conatiner/main">
      <SwiperComponent
        autoplay
        loop
        showArrows
        showDots
        className="h-[250px] rounded-xl"
      >
        <div className="h-[280px] w-full bg-red-500">
            <Image src={bgimage} alt='backgroundImage' fill sizes="100vw" className="object-cover relative" quality={95} priority/>
        </div>
        <div>slide2</div>
      </SwiperComponent>
    </div>
  );
}
