import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoSearch } from 'react-icons/io5';

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="flex justify-end mt-4 mb-4 pr-4">
      <div className="relative flex items-center">

        <div className="flex items-center justify-center w-8 h-10 text-white shadow-md bg-primary rounded-l-xl">
          <IoSearch className="text-ternary mr-1" />

        </div>
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleChange}
          className="h-10 pl-2 border-2 shadow-md border-primary focus:outline-none rounded-r-xl"
        />

        <div className="bg-primary text-white font-Philosopher p-2 flex items-center h-10 w-[70px]">
          <span className="text-white font-BreeSerif">Search</span>
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
