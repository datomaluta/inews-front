import { Link, NavLink } from "react-router-dom";
import NavbarLink from "./NavbarLink";

const HeaderNavbar = () => {
  return (
    <nav className="flex gap-4 text-base font-bpg lg:hidden">
      <NavbarLink text="ყველა სიახლე" href="/allnews" />
      <NavbarLink text="საზოგადოება" href="/allnews/society" />
      <NavbarLink text="პოლიტიკა" href="/allnews/politic" />
      <NavbarLink text="სპორტი" href="/allnews/sport" />
    </nav>
  );
};

export default HeaderNavbar;
