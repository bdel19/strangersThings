import React, { useState } from "react";

const SearchBar = (posts) => {
  const [searchTerm, setSearchTerm] = useState("");

  // console.log("SearchBar posts", posts);
  // {
  //   posts.map((post) => {
  //     console.log(post.title);
  //   });
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm);

    // {
    //   posts.filter((post) => {
    //     const postName = post.title.toLowerCase();
    //     const included = postName.includes(searchTerm);
    //   });
    // }
    // console.log(included);
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
  pull in posts
  create search term useState
  form with onChange event.target.value to setSearchTerm
  on submit 
*/
