import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import placeImage from "@/assets/images/Bitmap (8).png";
import { FaMessage } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

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
      <div className="flex flex-col items-center">
        <p className="font-semibold">Jason Price</p>
        <p>kuhlman.jermey@yahoo.com</p>
        <Button variant="outline" size="sm">
          <FaMessage /> Message
        </Button>
      </div>
    </Card>
  );
}
