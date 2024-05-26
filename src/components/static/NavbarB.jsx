import Logo from "./Logo";
import Navigation from "./Navigation";

const NavbarB = () => {
  return (
    <div className="pt-2 pb-2 mx-auto w-3/4 flex  justify-between">
      <Logo />
      <Navigation />
    </div>
  );
};

export default NavbarB;
