import { Link, useLocation } from "react-router-dom";

const NavbarLink = (props) => {
  const location = useLocation();
  return (
    <Link
      className={`hover:text-blue-200 transition-all border-b border-transparent hover:border-blue-300 ${
        location.pathname === props.href ? "border-blue-300" : ""
      }`}
      to={props.href}
    >
      {props.text}
    </Link>
  );
};

export default NavbarLink;
