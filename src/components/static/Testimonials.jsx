import quotes from "../../assets/quotes.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import star from "../../assets/star.svg"

const Testimonials = () => {
  return (
    <div className="w-3/4 m-auto text-left py-20">
      <h5 className="text-[#0E33CB] text-xs font-bold">TESTIMONIALS</h5>
      <div className="flex flex-row gap-24 justify-between">
        <div className="w-1/2 flex flex-col justify-between">
          <h1 className="text-[#121D50] text-5xl font-semibold">
            OUR CLIENTS SPEAK <br/> FOR US
          </h1>
          <div className="w-full aspect-video bg-[#121D50] rounded-md relative mt-10">
            <img
              src={quotes}
              alt="quotes"
              className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 h-20 w-20"
            />
          </div>

          <Card className="bg-[#090E23] text-white">
            <CardHeader>
              <CardTitle className="flex"><img src={star} /><img src={star} /><img src={star} /><img src={star} /><img src={star} /></CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. A vero mollitia doloribus voluptatibus, molestiae nulla, aliquid dolore quos laudantium, sint repellat maxime commodi. Ipsa, facere eum! Laborum fugit voluptatem quia temporibus, autem, reprehenderit vel at tenetur dolores praesentium cum consectetur rem aspernatur! Sapiente sunt officiis tempore iste dolores, nesciunt sit.</p>
            </CardContent>
            <CardFooter>
              <h4 className="font-bold">JOHN DOE, IMPT PERSON</h4>
            </CardFooter>
          </Card>
        </div>
        <div className="w-1/3 flex flex-col gap-5">
          

          <Card className="">
            <CardHeader>
              <CardTitle className="flex"><img src={star} /><img src={star} /><img src={star} /><img src={star} /><img src={star} /></CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. A vero mollitia doloribus voluptatibus, molestiae nulla, aliquid dolore quos laudantium, sint repellat maxime commodi. Ipsa, facere eum! Laborum </p>
            </CardContent>
            <CardFooter>
              <h4 className="font-bold">JOHN DOE, IMPT PERSON</h4>
            </CardFooter>
          </Card>

          <Card className="">
            <CardHeader>
              <CardTitle className="flex"><img src={star} /><img src={star} /><img src={star} /><img src={star} /><img src={star} /></CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. A vero mollitia doloribus voluptatibus, molestiae nulla, aliquid dolore quos laudantium, sint repellat maxime commodi. Ipsa, facere eum! Laborum </p>
            </CardContent>
            <CardFooter>
              <h4 className="font-bold">JOHN DOE, IMPT PERSON</h4>
            </CardFooter>
          </Card>

          <Card className="">
            <CardHeader>
              <CardTitle className="flex"><img src={star} /><img src={star} /><img src={star} /><img src={star} /><img src={star} /></CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. A vero mollitia doloribus voluptatibus, molestiae nulla, aliquid dolore quos laudantium, sint repellat maxime commodi. Ipsa, facere eum! Laborum </p>
            </CardContent>
            <CardFooter>
              <h4 className="font-bold">JOHN DOE, IMPT PERSON</h4>
            </CardFooter>
          </Card>
        </div>
        {/* <div>
                <h1>OUR CLIENTS SPEAK FOR US</h1>
                <div className="h-36 w-full bg-[#121D50] rounded-md">

                </div>
            </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
