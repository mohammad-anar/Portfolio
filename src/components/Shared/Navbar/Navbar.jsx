import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Navlinks from "./Navlinks";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full pr-5 ">
      {/* logo */}
      <div className="px-2 mx-2">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      {/* links */}
      <div className="flex-none hidden lg:block">
        <Navlinks />
      </div>
      {/* button */}
      <button className="btn btn-md flex items-center hover:border-0 border-primary hover:bg-primary duration-500 btn-outline text-lg text-primary font-semibold border rounded-full w-32 xs:w-36">
        Hire me
        <MdKeyboardDoubleArrowRight />
      </button>
    </div>
  );
};

export default Navbar;
