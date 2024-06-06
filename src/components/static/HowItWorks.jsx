import Box from "../../assets/box.svg";
import Image from "../ui/image";

const HowItWorks = () => {
  return (
    <div className="py-20 bg-white">
      <div className="w-4/5 m-auto">
        <div className="flex flex-row gap-6 border-dashed border-b-2 border-[#5C6C7B] pb-10 mb-10">
          <div className="w-full">
            <div className="relative bg-[#121D50] w-full h-full rounded-lg"></div>
          </div>
          <div className="w-full text-left grow">
            <h5 className="text-[#0E33CB] text-xs font-bold">HOW IT WORKS</h5>
            <p className="my-4"></p>
            <h1 className="text-[#121D50] text-5xl font-semibold">
              SIMPLIFY YOUR SHIPPING WITH OUR EASY STEP PROCESS
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
          </div>
        </div>
        <div className="flex flex-row gap-6">
          <div className="flex flex-col gap-6 items-center px-10">
            <div className="border border-[#EDF0F3] px-4 rounded-full w-min ">
              <p className="text-nowrap">Step 1</p>
            </div>
            <Image link={Box} />
            <h2 className="text-2xl font-bold text-[#121D50]">
              REQUEST A QUOTE
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              accusantium expedita quasi ullam. Eum, numquam? Recusandae eveniet
              pariatur expedita iure.
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center px-10">
            <div className="border border-[#EDF0F3] px-4 rounded-full w-min ">
              <p className="text-nowrap">Step 2</p>
            </div>
            <Image link={Box} />
            <h2 className="text-2xl font-bold text-[#121D50]">
              PROVIDE DETAILS
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              accusantium expedita quasi ullam. Eum, numquam? Recusandae eveniet
              pariatur expedita iure.
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center px-10">
            <div className="border border-[#EDF0F3] px-4 rounded-full w-min ">
              <p className="text-nowrap">Step 3</p>
            </div>
            <Image link={Box} />
            <h2 className="text-2xl font-bold text-[#121D50]">
              SCHEDULE PICK-UP
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              accusantium expedita quasi ullam. Eum, numquam? Recusandae eveniet
              pariatur expedita iure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
