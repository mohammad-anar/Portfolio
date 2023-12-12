import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
const Navlinks = () => {
    return (
        <div className="menu menu-horizontal text-[#9ea0aa] flex items-center gap-8">
          {/* Navbar menu content here */}
          {/* home  */}
          <div className="text-lg font-medium">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-primary"
                  : ""
              }
            >
              Home
            </NavLink>
          </div>
          {/* portfolio  */}
          <div className="text-lg font-medium">
            <NavLink
              to="/portfolio"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-primary"
                  : ""
              }
            >
              Portfolio
            </NavLink>
          </div>
          {/* blog  */}
          <div className="text-lg font-medium">
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-b-2 border-primary"
                  : ""
              }
            >
              Blog
            </NavLink>
          </div>
          {/* Pages  */}
          <div className="text-lg font-medium dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-2"
            >
              Pages <FaChevronDown />
              {/* dropdown pages  */}
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu bg-navbar-bg p-6 shadow-xl mt-56 space-y-5 bg- w-60 rounded-none"
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
    );
};

export default Navlinks;