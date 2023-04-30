import React, { useState } from "react";
import { makePost } from "../api";
import { useNavigate } from "react-router-dom";

const MakePost = ({ token, getPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  const navigate = useNavigate();
  //   const post = { title, description, price, willDeliver };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const post = { title, description, price, willDeliver };
    const result = await makePost(post, token);
    console.log("makePost Result", result);
    if (result.success) {
      getPosts();
      navigate("/");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      {/* <select
        type="text"
        value={willDeliver}
        onChange={(event) => {
          setWillDeliver(event.target.value);
        }}
      >
        <option value={"No"}>No</option>
        <option value={"Yes"}>Yes</option>
      </select> */}
      <label htmlFor="accept">
        Willing to Deliver?
        <input
          type="checkbox"
          onChange={(event) => setWillDeliver(event.target.checked)}
        />
        {/* Willing to Deliver? */}
      </label>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default MakePost;
