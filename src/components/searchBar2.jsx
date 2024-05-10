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

        <div className="bg-white p-2 flex items-center h-[45px] border-t border-l border-b border-black">
          <IoSearch className="text-ternary mr-1" />

        </div>
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleChange}
          className="px-2 py-2 w-[300px] h-[45px] font-BreeSerif border-t border-r border-b border-black focus:outline-none focus:ring-0  flex-grow"
        />

        <div className="bg-black p-2 flex items-center h-[45px]">
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
