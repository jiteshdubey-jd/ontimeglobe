import { Separator } from "../ui/separator";
import NewsLetterForm from "./NewsLetterForm";

const Footer = () => {
  return (
    <div className="bg-[#090E23] text-white pt-10 pb-7">
      <div className="w-4/5 m-auto flex gap-3 justify-between">
        <section className="text-left max-w-[45%]">
            <h2 className="font-bold text-3xl pb-5">ON TIME GLOBE</h2>
            <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora porro a eaque inventore architecto cumque quibusdam consequuntur modi culpa ut?</p>
        </section>
        <section className="text-left">
            <h2 className="font-bold text-base pb-2">NAVIGATION</h2>
            <p className="text-sm">Home</p>
            <p className="text-sm">About Us</p>
            <p className="text-sm">Services</p>
            <p className="text-sm">Contact Us</p>
        </section>
        <section className="text-left">
            <h2 className="font-bold text-base whitespace-nowrap pb-2">RECENT PROJECT</h2>
            
        </section>
        <section className="text-left min-w-60">
            <h2 className="font-bold text-base whitespace-nowrap pb-2">SUBSCRIBE US</h2>
            <NewsLetterForm />
            
        </section>
      </div>
      <Separator className={"w-4/5 m-auto my-6"} />
      <div className="w-4/5 m-auto flex justify-between">
        <h3>COPYRIGHT @ 2023</h3>
        <h3>DESIGNED BY OTG</h3>
      </div>
    </div>
  );
};

export default Footer;
