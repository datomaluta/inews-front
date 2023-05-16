import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-white.png";

const HeaderLogo = () => {
  return (
    <div className="font-bold text-5xl ">
      <Link className="sm:text-3xl" to="/">
        <img src={logo} className="h-7 sm:h-5" alt="" />
      </Link>
    </div>
  );
};
export default HeaderLogo;
