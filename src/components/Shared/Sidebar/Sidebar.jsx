import {
  FaAngleRight,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Sidebar = () => {
  return (
    <div className="menu p-4 w-80 min-h-full bg-navbar-bg space-y-10 pt-12">
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className=" text-[#9ea0aa] space-y-5">
        {/* Navbar menu content here */}
        {/* home  */}
        <div className="text-lg font-medium flex items-center justify-between border-b pb-2 border-b-navbar-text w-full">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-primary" : "w-full"
            }
          >
            Home
          </NavLink>
          <FaAngleRight />
        </div>
        {/* service  */}
        <div className="text-lg font-medium flex items-center justify-between border-b pb-2 border-b-navbar-text w-full">
          <NavLink
            to="/service"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-primary" : "w-full"
            }
          >
            Service
          </NavLink>
          <FaAngleRight />
        </div>
        {/* blog  */}
        <div className="text-lg font-medium flex items-center justify-between border-b pb-2 border-b-navbar-text w-full">
          <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-primary" : "w-full"
            }
          >
            Blog
          </NavLink>
          <FaAngleRight />
        </div>
        {/* Pages  */}
        <div className="text-lg font-medium dropdown dropdown-hover w-full">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-2 w-full justify-between"
            >
              Pages <FaAngleRight />
              {/* dropdown pages  */}
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu bg-navbar-bg p-6 shadow-xl mt-40 space-y-5 bg- w-80 -ml-6 rounded-none"
              >
                {/* about  */}
                <div className="text-lg font-medium">
                  <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "border-b-2 border-primary"
                        : ""
                    }
                  >
                    About
                  </NavLink>
                </div>
                {/* contact  */}
                <div className="text-lg font-medium">
                  <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "border-b-2 border-primary"
                        : ""
                    }
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
      </div>
      {/* social links  */}
      <div className="flex items-center gap-10 mx-auto">
        <div className="border border-primary text-primary cursor-pointer rounded-full p-3">
          <FaFacebookF size={20} />
        </div>
        <div className="border border-primary text-primary cursor-pointer rounded-full p-3">
          <FaTwitter size={20} />
        </div>
        <div className="border border-primary text-primary cursor-pointer rounded-full p-3">
          <FaLinkedinIn size={20} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
