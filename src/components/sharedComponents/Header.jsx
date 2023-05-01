import { Link } from "react-router-dom";
import Burger from "./Burger";
import PlusIcon from "./PlusIcon";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="text-blue-500 font-bold text-5xl">
        <Link to="/">inews</Link>
      </div>
      <button className="hidden sm:block">
        <Burger />
      </button>
      <nav className="flex gap-4 text-2xl font-archy sm:hidden">
        <Link className="hover:text-blue-500 transition-all" to="/news">
          სიახლეები
        </Link>
        <Link
          to="/add"
          className="flex items-center hover:text-blue-500 transition-all"
        >
          დამატება
        </Link>
      </nav>
    </header>
  );
};

export default Header;
