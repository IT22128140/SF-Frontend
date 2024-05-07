import { useState } from "react";
import PropTypes from "prop-types";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const SearchBar = ({ data, navigate, placeholder }) => {
  const [keyword, setKeyword] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const filteredOptions = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const filteredData = data.filter((opt) =>
      opt.name.toLowerCase().includes(inputValue)
    );
    setKeyword(e.target.value);
    setFilteredData(filteredData);
  };

  return (
    <div className="flex justify-end mt-4 pr-4 cursor-pointer ">
      <div className="flex flex-row p-3.5">
      <div className="bg-primary text-white h-10 w-8 rounded-l-xl shadow-md">
          <CiSearch className="text-[35px] mt-0.5" />
        </div>
        <div  className="bg-primary text-white font-Philosopher p-2 flex items-center h-10 w-[70px]">Search</div>
        <input
          className="h-10 border-2 border-primary shadow-md focus:outline-none pl-2 rounded-r-xl"
          value={keyword}
          placeholder={placeholder}
          onChange={(e) => filteredOptions(e)}
        ></input>
      </div>
      {keyword && (
        <div className="absolute z-50 flex w-[10%] flex-col bg-bgc rounded-md text-ternary shadow-xl">
          {filteredData.map((opt, index) => (
            <Link
              to={`${navigate}${opt._id}`}
              key={index}
              className="rounded-md p-2 my-2 block font-semibold text-ternary hover:bg-primary"
            >
              {opt.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  navigate: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.array,
};

export default SearchBar;