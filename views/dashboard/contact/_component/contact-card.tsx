import { Card, CardHeader } from "@/components/ui/card";
import Image, {StaticImageData} from "next/image";
import placeImage from "@/assets/images/Bitmap (8).png";
import { FaMessage } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { LuMail } from "react-icons/lu";


interface CardProps {
  name: string;
  email: string;
  image: StaticImageData
}

export default function ContactCard({name, email, image}: CardProps) {
  return (
    <Card className="w-auto py-0">
      <div>
        <Image
          src={image}
          alt=""
          width={300}
          height={300}
          className="w-full rounded-xl-t rounded-t-lg"
        />
      </div>
      <div className="flex flex-col items-center space-y-3 pb-5">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-[#202224]/60">{email}</p>
        <Button variant="outline" size="sm" className="">
          <LuMail /> Message
        </Button>
      </div>
    </Card>
  );
}
