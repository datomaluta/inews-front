import { useState } from "react";
import HeaderLogo from "../headerComponents/HeaderLogo";
import HeaderNavbar from "../headerComponents/HeaderNavbar";
import Theme from "../headerComponents/Theme";
import SearchInput from "../headerComponents/SearchInput";
import SearchIconHeader from "../headerComponents/SearchIconHeader";
import BurgerIcon from "../icons/BurgerIcon";
import MobileHeaderContent from "../headerComponents/MobileHeaderContent";

const Header = (props) => {
  const [headerModalIsOpen, setHeaderModalIsOpen] = useState(false);
  const [searchInputIsOpen, setSearchInputIsOpen] = useState(false);

  const modalOpenerHandler = () => {
    setHeaderModalIsOpen(true);
  };
  const modalCloserHandler = () => {
    setHeaderModalIsOpen(false);
  };

  const searchInputChangeHandler = () => {
    setSearchInputIsOpen((currentState) => !currentState);
  };

  return (
    <header className="flex text-white h-16 animate-smoothLoad items-center justify-between bg-primary py-3 px-8 sm:px-3 sm:py-0 rounded-b fixed z-50 top-0 left-1/2 -translate-x-1/2 max-w-[75rem] w-full shadow-2xl">
      {!headerModalIsOpen && (
        <button onClick={modalOpenerHandler} className="hidden lg:block">
          <BurgerIcon />
        </button>
      )}
      <HeaderLogo />
      {headerModalIsOpen && <MobileHeaderContent closer={modalCloserHandler} />}

      <HeaderNavbar />

      <div className="flex items-center relative h-full gap-2 sm:gap-1">
        <SearchIconHeader
          searchInputChangeHandler={searchInputChangeHandler}
          searchInputIsOpen={searchInputIsOpen}
        />

        {searchInputIsOpen && (
          <SearchInput searchInputChangeHandler={searchInputChangeHandler} />
        )}

        <Theme />
      </div>
    </header>
  );
};

export default Header;
