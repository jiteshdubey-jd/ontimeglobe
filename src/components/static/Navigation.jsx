import WithNavigation from "../with/withNavigation";
import homeNavigation from "@/data/homeNavigation";
import { Link } from "react-router-dom";
import { NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu";

const Navigation = () => {
  return (
    <WithNavigation>
      {homeNavigation.map((nav, idx) => (
        <Link key={`${nav.name}_${idx}`} to={nav.link} legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle("bg-transparent") }>
            {nav.name}
          </NavigationMenuLink>
        </Link>
      ))}
    </WithNavigation>
  );
};

export default Navigation;
