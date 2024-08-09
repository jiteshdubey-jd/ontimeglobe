import Logo from "./Logo";
import Navigation from "./Navigation";

const NavbarB = ({currentPage, setCurrentPage}) => {

  return (
    <div className={`absolute w-full top-0 `}>
      <div className="py-2 mx-auto w-[90%] flex  justify-between md:w-4/5">
        <Logo />
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  );
};

export default NavbarB;
