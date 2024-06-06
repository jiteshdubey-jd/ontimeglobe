import { Button } from "../ui/button";
import Image from "../ui/image";
import Anchor from "../../assets/anchor.svg"

const About = () => {
  return (
    <div className="py-20 bg-white">
      <div className="w-4/5 m-auto min-h-[60vh] ">
        <div className="flex flex-row gap-6">
          <div className="w-full text-left grow">
            <h5 className="text-[#0E33CB] text-xs font-bold">ABOUT US</h5>
            <p className="my-4"></p>
            <h1 className="text-[#121D50] text-5xl font-semibold">
              EMPOWERING YOUR BUSINESS WITH TAILORED LOGISTICS SOLUTIONS
            </h1>
            <p className="my-4"></p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              libero laborum voluptas nulla aliquid eveniet! Numquam quas ex
              maiores provident cupiditate voluptates dolores reprehenderit.
              Nesciunt autem est, architecto minus commodi veritatis pariatur
              similique aperiam mollitia numquam illo blanditiis quam odio
              impedit facilis, cupiditate ex. Mollitia accusamus optio fuga
              sequi adipisci.
            </p>
            <p className="my-4"></p>
            <Button
              type="submit"
              className="bg-[#EC4621] hover:bg-[#FF6A35] px-16"
            >
              LEARN MORE
            </Button>
          </div>
          <div className="w-full">
            <div className="relative bg-[#121D50] w-full h-full rounded-lg">

            <div className="bg-white rounded-lg absolute bottom-8 left-8 p-4 pt-10">
                <Image link={Anchor} className="absolute top-[-15%]"/>
                <h3 className="text-[#121D50] font-bold text-5xl mb-4">647+</h3>
                <div className="bg-[#0E33CB] text-white rounded-lg max-w-36 py-2">
                    <p className="text-xl">AWARDS WINNING</p>
                </div>
            </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-8 mt-16">
          <div className="flex flex-row bg-[#090E23] rounded-lg text-white px-8 py-6 justify-center items-center">
            <h1 className="text-6xl font-bold border-dashed border-r-2 pr-6">
              01
            </h1>
            <h2 className="ml-6 font-semibold text-2xl text-left">
              EXPERTISE AND EXPERIENCE
            </h2>
          </div>
          <div className="flex flex-row bg-[#090E23] rounded-lg text-white px-8 py-6 justify-center items-center">
            <h1 className="text-6xl font-bold border-dashed border-r-2 pr-6">
              02
            </h1>
            <h2 className="ml-6 font-semibold text-2xl text-left">
              COMMITTED TO QUALITY
            </h2>
          </div>
          <div className="flex flex-row bg-[#090E23] rounded-lg text-white px-8 py-6 justify-center items-center">
            <h1 className="text-6xl font-bold border-dashed border-r-2 pr-6">
              03
            </h1>
            <h2 className="ml-6 font-semibold text-2xl text-left">
              COMPREHENSIVE SERVICES
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
