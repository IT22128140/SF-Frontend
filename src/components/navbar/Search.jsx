import { useEffect, useState } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [Loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/items")
      .then((response) => {
        setLoading(false);
        setOptions(response.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const filteredOptions = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const filteredData = options.filter((opt) =>
      opt.name.toLowerCase().includes(inputValue)
    );
    setKeyword(e.target.value);
    setFilteredData(filteredData);
  };

  if (Loading) {
    return <Spinner />;
  }
  return (
    <div className="group relative cursor-pointer ">
      <div className="flex flex-row p-3.5">
        <input
          className=" h-10 border-2 border-primary rounded-l-xl shadow-md focus:outline-none pl-2"
          value={keyword}
          onChange={(e) => filteredOptions(e)}
        ></input>
        <div className=" bg-primary text-white h-10 w-10  rounded-r-xl shadow-md">
          <CiSearch className=" text-[35px] mt-0.5" />
        </div>
      </div>
      {keyword && (
        <div className="absolute z-50 flex w-full flex-col bg-bgc rounded-md text-ternary shadow-xl">
          {filteredData.map((opt) => (
            <Link
              to={`/ProductPage/${opt._id}`}
              key={opt._id}
              className=" rounded-md p-2 my-2 block font-semibold text-ternary hover:bg-primary"
            >
              {opt.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
