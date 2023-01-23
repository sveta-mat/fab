import "./Search.css";
import { useState } from "react";

const Search = ({ search,handleSearch}) => {
  return (
    <div className="search-group">
      <div className="panel">
        <input
        type='text'
          placeholder="Որոնում "
          className="inputSearch"
          value={search}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};
export default Search;
