import React, { useState } from "react";
import { makePost } from "../api";
import { useNavigate } from "react-router-dom";

const MakePost = ({ token, getPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const post = { title, description, price, willDeliver };
    const result = await makePost(post, token);
    if (result.success) {
      getPosts();
      navigate("/");
    }
  };
  return (
    <form id="makePost-container" onSubmit={handleSubmit}>
      <input
        id="makePost-text"
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        id="makePost-text"
        type="text"
        placeholder="Enter Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        id="makePost-text"
        type="text"
        placeholder="Enter Price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <label htmlFor="accept" id="makePost-text">
        Willing to Deliver?
        <input
          id="makePost-text"
          type="checkbox"
          onChange={(event) => setWillDeliver(event.target.checked)}
        />
      </label>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default MakePost;
