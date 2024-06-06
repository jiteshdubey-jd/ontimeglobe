import LogoIpsum from "../../assets/logoipsum.svg"
import Image from "../ui/image"

const Companies = () => {
  return (
    <div className="p-20 bg-[#1F45E4]">
        <div className="w-4/5 m-auto flex justify-between">
            <Image link={LogoIpsum} />
            <Image link={LogoIpsum} />
            <Image link={LogoIpsum} />
            <Image link={LogoIpsum} />
            <Image link={LogoIpsum} />
        </div>
    </div>
  )
}

export default Companies