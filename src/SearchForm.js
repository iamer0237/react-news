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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange ={handleChange} value={search} />
        <button  >Search</button>
        <h2>Search Results:</h2>
      </form>
    </div>
  );
};
export default SearchForm;
