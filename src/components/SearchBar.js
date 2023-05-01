import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/searchresult");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search the Things"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchBar;

/*
onChange updates searchTerm, which causes rerender, causing input to lose focus...? 
*/
