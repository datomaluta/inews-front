import { Link } from "react-router-dom";
import Burger from "./Burger";
import MobileHeaderContent from "./MobileHeaderContent";
import { useState } from "react";
import HeaderLogo from "../headerComponents/HeaderLogo";
import HeaderNavbar from "../headerComponents/HeaderNavbar";
import Theme from "../headerComponents/Theme";
import SearchInput from "../headerComponents/SearchInput";
import SearchIconHeader from "../headerComponents/SearchIconHeader";

const Header = (props) => {
  const [headerModalIsOpen, setHeaderModalIsOpen] = useState(false);
  const [searchInputIsOpen, setSearchInputIsOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  const modalOpenerHandler = () => {
    setHeaderModalIsOpen(true);
  };
  const modalCloserHandler = () => {
    setHeaderModalIsOpen(false);
  };

  const searchInputChangeHandler = () => {
    setSearchInputIsOpen((currentState) => !currentState);
  };

  const lightModeChangeHandler = () => {
    setLightMode((currState) => !currState);
    console.log("clicekd");
    console.log(lightMode);
  };

  return (
    <header className="flex h-16 animate-smoothLoad items-center justify-between bg-primary py-3 px-8 sm:px-3 sm:py-0 rounded-b fixed z-50 top-0 left-1/2 -translate-x-1/2 max-w-[75rem] w-full shadow-2xl">
      {!headerModalIsOpen && (
        <button onClick={modalOpenerHandler} className="hidden lg:block">
          <Burger />
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

        <Theme changeHandler={lightModeChangeHandler} lightMode={lightMode} />
      </div>
    </header>
  );
};

export default Header;
