import { Flare, Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import { ChangeEvent } from "react";

const SearchBar = ({ onChange }: { onChange: (inp: string) => any }) => {

  let timeout = -1;
  const changeHandler = (c: ChangeEvent<HTMLInputElement>) => {
    const value = c.target.value;
    clearTimeout(timeout);
    timeout = setTimeout(() => onChange(value), 200) as any;
  };

  return (
    <input
      placeholder="Search"
      onChange={changeHandler}
    />
  );
};

export default SearchBar;
