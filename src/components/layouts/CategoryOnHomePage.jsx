import { Link } from "react-router-dom";

const CategoryOnHomePage = (props) => {
  return (
    <div className="font-bpg mb-6 sm:mb-4">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 block bg-secondary rounded shrink-0"></span>
        <Link className="text-lg mt-1">{props.categoryName}</Link>
        <div className="h-[0.01rem] w-full bg-secondary ml-2"></div>
      </div>
      {props.children}
    </div>
  );
};

export default CategoryOnHomePage;
