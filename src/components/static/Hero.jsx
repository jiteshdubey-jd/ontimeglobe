import Image from "../ui/image";
import NavbarB from "./NavbarB";
import Owner from "../../assets/person.png";
import Truck from "../../assets/truck.png";
import TrackingForm from "./TrackingForm";
import { useState } from "react";

const Hero = () => {
  const [currentPage, setCurrentPage] = useState("HOME");
  return (
    <div className={`h-[100vh] bg-[#121D50] relative`}>
      <NavbarB currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        {/* <Image link={Truck} className="top-20 right-0 absolute h-4/5 z-10" />
        <div className="w-4/5 m-auto">
          <div className="flex flex-row py-10 gap-4">
            <div className="w-full mt-40 text-left">
              <div className="">
                <h3 className="text-white">WE ARE THE BEST LOGISTICS COMPANY</h3>
                <p className="py-2"></p>
                <h1 className="text-white font-bold text-4xl">
                  STREAMLINE YOUR SHIPPING WITH OUR CARGO SERVICES
                </h1>
                <p className="py-2"></p>
                <p className="text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Pariatur praesentium porro dolorem, repudiandae nisi laborum
                  unde cumque, magnam, iure eius amet aperiam excepturi
                  architecto. Saepe?
                </p>
              </div>
              <p className="py-4"></p>
              <div className="flex flex-row gap-4 text-white items-center">
                <Image link={Owner} className="h-20" />
                <div className="flex flex-col justify-center border-dashed border-r-2 pr-4 h-min">
                  <div>
                    <h2 className="text-3xl font-bold">26 K</h2>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center h-min">
                  <div>
                    <h2 className="text-3xl font-bold">12 +</h2>
                    <p>Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex items-end">
              <div className="z-20 w-full">
                <div className="bg-[#090E23] rounded-t-2xl w-fit">
                  <h4 className="text-[#EC4621] px-4 py-3">TRACKING</h4>
                </div>
                <div className="bg-[#090E23] py-6 px-6 rounded-b-2xl rounded-tr-2xl">
                  <TrackingForm />
                  <p className="py-2"></p>
                  <p className="text-white text-left">
                    See your tracking id on the shipping document
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default Hero;
