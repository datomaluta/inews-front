import { Link } from "react-router-dom";
import FbIcon from "../icons/FbIcon";
import InstagramIcon from "../icons/TwitterIcon";
import logo from "../../assets/images/logo-white.png";
import blueLogo from "../../assets/images/logo-blue.png";
import useColorMode from "../../hooks/theme/useColorMode";

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-neutral-800 px-8 sm:px-3 py-2 rounded-t flex items-center justify-between ">
      <div className="text-xl px-2 py-2 rounded-lg hover:text-blue-600 hover:bg-white transition-all">
        {<img className="h-6 md:h-4" src={logo} alt="logoimg" />}
      </div>
      <div className="text-center md:text-sm font-bold">
        © Developed by Davit Malutashvili
      </div>
    </footer>
  );
};

export default Footer;
