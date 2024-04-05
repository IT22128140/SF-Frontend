import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="px-4 py-1 text-white rounded-lg bg-sky-800 w-fit">
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
};

export default BackButton;
