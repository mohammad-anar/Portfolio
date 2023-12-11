import { Link } from "react-router-dom";
import Logo from "../Shared/Logo/Logo";

const Footer = () => {
    return (
        <div className="bg-navbar-bg flex flex-col md:flex-row items-start md:items-end justify-between px-12 py-6 pt-12 lg:px-20 text-navbar-text gap-6 ">
            <p>&copy; copyright 2023 || All Rights Reserved</p>
            <div className="flex flex-col items-start gap-2 order-first md:order-last">
                <Link to="/"><Logo/></Link>
                <div className="flex items-center gap-5 text-lg ">
                    <a className="hover:underline text-navbar-text" href="#">Terms & Condition</a>
                    <a className="hover:underline text-navbar-text" href="#">Privacy Policy</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;