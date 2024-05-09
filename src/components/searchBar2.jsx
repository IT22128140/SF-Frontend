import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

const SearchBar = ({ data, setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredData = data.filter(item =>
      item.materialType.toLowerCase().includes(searchTerm)
    );
    setSearchResults(filteredData);
  };

  return (
    <div className="flex justify-end pr-4 mt-4 cursor-pointer">
      <div className="flex flex-row p-3.5">
        <div className="flex items-center justify-center w-8 h-10 text-white shadow-md bg-primary rounded-l-xl">
          <CiSearch className="text-[20px]" />
        </div>
        <div className="bg-primary text-white font-Philosopher p-2 flex items-center h-10 w-[70px]">Search</div>
        <input
          className="h-10 pl-2 border-2 shadow-md border-primary focus:outline-none rounded-r-xl"
          value={searchTerm}
          placeholder="Search by material type"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
