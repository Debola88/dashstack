import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import placeImage from "@/assets/images/Bitmap (8).png";
import { FaMessage } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { LuMail } from "react-icons/lu";


export default function ContactCard() {
  return (
    <Card className="w-[300px] py-0">
      <div>
        <Image
          src={placeImage}
          alt=""
          width={300}
          height={300}
          className="w-full rounded-xl-t rounded-t-lg"
        />
      </div>
      <div className="flex flex-col items-center space-y-3 pb-5">
        <p className="font-semibold">Jason Price</p>
        <p>kuhlman.jermey@yahoo.com</p>
        <Button variant="outline" size="sm" className="">
          <LuMail /> Message
        </Button>
      </div>
    </Card>
  );
}
