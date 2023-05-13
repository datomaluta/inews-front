import { Link } from "react-router-dom";
import Burger from "./Burger";
import MobileHeaderContent from "./MobileHeaderContent";
import { useState } from "react";

const Header = (props) => {
  const [headerModalIsOpen, setHeaderModalIsOpen] = useState(false);

  const modalOpenerHandler = () => {
    setHeaderModalIsOpen(true);
  };
  const modalCloserHandler = () => {
    setHeaderModalIsOpen(false);
  };

  return (
    <header className="flex animate-smoothLoad items-center justify-between bg-blue-600 px-8 sm:px-3 py-2 rounded-b fixed z-50 top-0 left-1/2 -translate-x-1/2 max-w-[75rem] w-full shadow-2xl">
      <div className=" font-bold text-5xl">
        <Link to="/">inews</Link>
      </div>
      {headerModalIsOpen && <MobileHeaderContent closer={modalCloserHandler} />}
      {!headerModalIsOpen && (
        <button onClick={modalOpenerHandler} className="hidden sm:block">
          <Burger />
        </button>
      )}
      <nav className="flex gap-4 text-2xl font-archy sm:hidden">
        <Link className="hover:text-blue-500 transition-all" to="/">
          სიახლეები
        </Link>
        <Link
          to="/admin/news"
          className="flex items-center hover:text-blue-500 transition-all"
        >
          ადმინკა
        </Link>
      </nav>
    </header>
  );
};

export default Header;
