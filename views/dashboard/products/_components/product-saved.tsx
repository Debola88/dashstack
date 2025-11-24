import SwiperComponent from "@/components/shared/swiper";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function ProductSaved() {
  return (
    <Card>
      <SwiperComponent
        autoplay
        loop
        showArrows
        className="h-[250px] rounded-xl"
      >
        <Image src={} alt="" fill />
        <Image src={} alt="" fill />
      </SwiperComponent>
    </Card>
  );
}
