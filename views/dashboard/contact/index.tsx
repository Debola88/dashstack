import ContactCard from "./_component/contact-card";
import firstman from "@/assets/images/Bitmap (8).png";

const contactInfo = [
  {
    name: "jason Price",
    email: "kuhlman.jermey@yahoo.com",
    image: firstman,
  },
  {
    name: "jason Price",
    email: "kuhlman.jermey@yahoo.com",
    image: firstman,
  },
  {
    name: "jason Price",
    email: "kuhlman.jermey@yahoo.com",
    image: firstman,
  },
    {
    name: "jason Price",
    email: "kuhlman.jermey@yahoo.com",
    image: firstman,
  },
    {
    name: "jason Price",
    email: "kuhlman.jermey@yahoo.com",
    image: firstman,
  },
    {
    name: "jason Price",
    email: "kuhlman.jermey@yahoo.com",
    image: firstman,
  },
];

export default function DashboardContactView() {
  return (
    <div>
      <h1 className="font-semibold text-2xl lg:px-3 mb-2">Contact</h1>
      <div className="flex flex-1 flex-col ">
        <div className="@container/main flex flex-wrap max-md:flex-col gap-4">
          {contactInfo.map((info, index) => (
            <ContactCard
              key={index}
              name={info.name}
              email={info.email}
              image={info.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
