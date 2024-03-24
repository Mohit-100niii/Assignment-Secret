import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import "../styles/searchbar.sass"

const Searchbar = () => {
  return (
    <div className="search-bar">
      <IoSearchOutline className="search-icon" />
      {/* Use placeholder attribute for input text */}
      <input  className="search-input-bar"type="text" placeholder="Search Something" /> 
    </div>
  );
};

export default Searchbar;
