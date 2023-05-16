import LightModeIcon from "../icons/LightModeIcon";
import NightModeIcon from "../icons/NightModeIcon";

const Theme = (props) => {
  return (
    <button
      onClick={props.changeHandler}
      className="h-8 sm:h-7 w-8 sm:w-7 flex items-center justify-center bg-white rounded-full group hover:bg-secondary overflow-hidden"
    >
      {!props.lightMode && <NightModeIcon />}
      {props.lightMode && <LightModeIcon />}
    </button>
  );
};

export default Theme;
