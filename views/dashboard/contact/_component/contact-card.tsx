import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import placeImage from "@/assets/images/Bitmap (8).png";

export default function ContactCard() {
  return (
    <Card className="relative">
      <div className=" top-0">
        <Image
          src={placeImage}
          alt=""
          width={250}
          height={250}
          className="w-full"
        />
      </div>
    </Card>
  );
}
