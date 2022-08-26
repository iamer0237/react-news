import React, { useState } from "react";

const SearchForm = (props) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault()
props.setQuery (search)
  };


  return (
    <div className="searchContainer">
      <form onSubmit={handleSubmit}>
        <input className="searchInput" type="text" onChange ={handleChange} value={search} />
        <button className="searchButton">Search</button>
      </form>
    </div>
  );
};
export default SearchForm;
