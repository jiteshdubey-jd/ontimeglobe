import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import contactDetails from "@/data/contactDetails";

export const Navbar = () => {
  return (
    <div className="pt-2 flex justify-between pb-2 w-[90%] mx-auto md:w-4/5">
      <div className="flex justify-center items-center space-x-4">
        <p className="text-sm md:text-base">{contactDetails.email}</p>
        <Separator className="w-[3px] hidden sm:block" orientation="vertical"/>
        <p className="text-sm hidden md:text-base sm:block">{contactDetails.phoneNumber}</p>
      </div>
      <Button className="bg-[#EC4621] hover:bg-[#FF6A35] text-sm">GET QUOTE</Button>
    </div>
  );
};
