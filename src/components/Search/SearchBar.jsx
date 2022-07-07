import React, { useEffect } from "react";
import classes from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = ({ placeholder }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState();

  const search = (e) => {
    if (value) {
      navigate(`/result/${value}`);
    }
  };

  return (
    <div className={classes.search}>
      <form onSubmit={search} className={classes.searchInputs}>
        <input
          onChange={(e) => setValue(e.target.value)}
          className={classes.inp}
          type="text"
          placeholder={placeholder}
        />
        <div className={classes.searchIcon}>
          {" "}
          <SearchIcon />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
