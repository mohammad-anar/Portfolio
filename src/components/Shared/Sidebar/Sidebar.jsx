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
    <div className="menu p-4 w-80 min-h-full bg-navbar-bg space-y-10">
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className=" text-[#9ea0aa] space-y-5">
        {/* Navbar menu content here */}
        {/* home  */}
        <div className="text-lg font-medium flex items-center justify-between border-b pb-2 border-b-navbar-text">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-primary" : ""
            }
          >
            Home
          </NavLink>
          <FaAngleRight />
        </div>
        {/* service  */}
        <div className="text-lg font-medium flex items-center justify-between border-b pb-2 border-b-navbar-text">
          <NavLink
            to="/service"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-primary" : ""
            }
          >
            Service
          </NavLink>
          <FaAngleRight />
        </div>
        {/* blog  */}
        <div className="text-lg font-medium flex items-center justify-between border-b pb-2 border-b-navbar-text">
          <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-primary" : ""
            }
          >
            Blog
          </NavLink>
          <FaAngleRight />
        </div>
        {/* Pages  */}
        <div className="text-lg font-medium flex items-center justify-between border-b pb-2 border-b-navbar-text dropdown dropdown-hover">
          <NavLink
            to="/pages"
            tabIndex={0}
            role="button"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-primary"
                : "flex items-center gap-2"
            }
          >
            Pages
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu bg-navbar-bg p-6 shadow-xl mt-56 space-y-5 bg- w-60 rounded-none"
            >
              {/* about  */}
              <div className="text-lg font-medium flex items-center justify-between border-b pb-2 border-b-navbar-text">
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-primary" : ""
                  }
                >
                  About
                </NavLink>
                <FaAngleRight />
              </div>
              {/* contact  */}
              <div className="text-lg font-medium flex items-center justify-between border-b pb-2 border-b-navbar-text">
                <NavLink
                  to="/contact"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-primary" : ""
                  }
                >
                  Contact
                </NavLink>
                <FaAngleRight />
              </div>
            </div>
          </NavLink>
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
