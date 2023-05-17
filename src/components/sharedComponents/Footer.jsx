import { Link } from "react-router-dom";
import FbIcon from "../icons/FbIcon";
import InstagramIcon from "../icons/TwitterIcon";
import logo from "../../assets/images/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 px-8 sm:px-3 py-4 rounded-t flex items-center justify-between ">
      <div className="text-xl bg-blue-600 px-2 py-2 rounded-lg hover:text-blue-600 hover:bg-white transition-all">
        <img className="h-6 md:h-4" src={logo} alt="logoimg" />
      </div>
      <div className="text-center md:text-sm">
        © Developed by Davit Malutashvili
      </div>
    </footer>
  );
};

export default Footer;
