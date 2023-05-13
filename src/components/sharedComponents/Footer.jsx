import { Link } from "react-router-dom";
import FbIcon from "../icons/FbIcon";
import InstagramIcon from "../icons/TwitterIcon";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 px-8 sm:px-3 py-4 rounded-t flex items-center justify-between ">
      <div className="text-xl bg-blue-600 px-2 py-1 rounded-lg hover:text-blue-600 hover:bg-white transition-all">
        inews
      </div>
      <div className="text-center">© Developed by Davit Malutashvili</div>
    </footer>
  );
};

export default Footer;
