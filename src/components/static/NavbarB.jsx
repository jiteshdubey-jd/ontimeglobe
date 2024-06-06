import Logo from "./Logo";
import Navigation from "./Navigation";

const NavbarB = () => {

  return (
    <div className={`absolute w-full top-0 `}>
      <div className="py-2 mx-auto w-3/4 flex  justify-between">
        <Logo />
        <Navigation/>
      </div>
    </div>
  );
};

export default NavbarB;
