import WithNavigation from "../with/withNavigation";
import homeNavigation from "@/data/homeNavigation";
import { Link } from "react-router-dom";
import { NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import Image from "../ui/image";
import bars from "../../assets/bars-solid.svg"

const Navigation = ({currentPage, setCurrentPage}) => {
  return (
    <WithNavigation>
      {homeNavigation.map((nav, idx) => (
        <Link className="hidden sm:inline" key={`${nav.name}_${idx}`} to={nav.link} legacyBehavior passHref>
          <NavigationMenuLink active={currentPage === nav.name} onClick={() => setCurrentPage(nav.name)} className={navigationMenuTriggerStyle("bg-transparent") } >
            {nav.name}
          </NavigationMenuLink>
        </Link>
      ))}
      <Image link={bars} className="w-8 h-8 sm:hidden"/>
    </WithNavigation>
  );
};

export default Navigation;
