import SearchIcon from "../icons/SearchIcon";

const SearchIconHeader = (props) => {
  return (
    <div className="h-full w-8 flex items-center justify-center group overflow-hidden">
      {!props.searchInputIsOpen && (
        <button
          onClick={props.searchInputChangeHandler}
          className="h-8 sm:h-7 w-full sm:w-7 flex items-center justify-center bg-white rounded-full overflow-hidden  group-hover:bg-secondary transition-all"
        >
          <SearchIcon />
        </button>
      )}
    </div>
  );
};
export default SearchIconHeader;
