import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import contactDetails from "@/data/contactDetails";

export const Navbar = () => {
  return (
    <div className="pt-2 flex justify-between bg-white pb-2 w-4/5 mx-auto">
      <div className="flex justify-center items-center space-x-4">
        <p>{contactDetails.email}</p>
        <Separator className="w-[3px]" orientation="vertical"/>
        <p>{contactDetails.phoneNumber}</p>
      </div>
      <Button className="bg-[#EC4621] hover:bg-[#FF6A35]">GET QUOTE</Button>
    </div>
  );
};
