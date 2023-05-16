import { Link, NavLink } from "react-router-dom";
import NavbarLink from "./NavbarLink";

const HeaderNavbar = () => {
  return (
    <nav className="flex gap-4 text-base font-bpg lg:hidden">
      <NavbarLink text="ყველა სიახლე" href="/allnews" />
      <NavbarLink text="საზოგადოება" href="/society" />
      <NavbarLink text="პოლიტიკა" href="/politics" />
      <NavbarLink text="სპორტი" href="/sport" />
      <NavbarLink text="სხვა" href="/other" />
    </nav>
  );
};

export default HeaderNavbar;
