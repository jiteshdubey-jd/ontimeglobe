import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-center items-center ">
        <p className=" border-dotted border-r-2 border-r-black pr-2">info@ontimeglobe.com</p>
        <p className="pl-2">+91 123 4567 89</p>
      </div>
      <Button className="bg-[#EC4621] hover:bg-[#FF6A35]">GET QUOTE</Button>
    </div>
  );
};
