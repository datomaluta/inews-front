import { useEffect, useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import { useNavigate } from "react-router-dom";

const SearchInput = (props) => {
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search?query=${search}`);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-52 sm:w-72 absolute h-full sm:h-auto right-0 top-0 sm:top-1/2 sm:-translate-y-1/2 z-30"
    >
      <input
        onChange={searchChangeHandler}
        className="w-full font-arial text-sm h-full sm:h-auto relative rounded-lg bg-secondary  focus:outline-none 
    border border-transparent focus:border-white placeholder:text-neutral-100 pl-2 px-6 py-1
     animate-smoothLengthGrow"
        placeholder="საძიებო სიტყვა..."
      />
      <button type="submit" className="hidden"></button>
      <button
        className="absolute top-1/2 right-2 -translate-y-1/2 z-40 opacity-0 animate-smallDelay"
        onClick={props.searchInputChangeHandler}
      >
        <CloseIcon />
      </button>
    </form>
  );
};

export default SearchInput;
