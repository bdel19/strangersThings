import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updatePost } from "../api";

const UpdatePost = ({
  setUpdatedPost,
  post,
  updatingPost,
  setPostId,
  token,
  getPosts,
}) => {
  const { title, description, price, location, willDeliver } = post;
  const navigate = useNavigate();
  const [newTitle, setTitle] = useState(title);
  const [newDescription, setDescription] = useState(description);
  const [newPrice, setPrice] = useState(price);
  const [newLocation, setLocation] = useState(location);
  const [newWillDeliver, setWillDeliver] = useState(willDeliver);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPost = {
      title: newTitle,
      description: newDescription,
      price: newPrice,
      location: newLocation,
      willDeliver: newWillDeliver,
    };

    const result = await updatePost(post._id, token, newPost);
    if (result.success) {
      getPosts();
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit} id="updatePostForm">
      <input
        type="text"
        value={newTitle}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        value={newDescription}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        type="text"
        value={newPrice}
        onChange={(event) => setPrice(event.target.value)}
      />
      <input
        type="text"
        value={newLocation}
        onChange={(event) => setLocation(event.target.value)}
      />
      <input
        type="checkbox"
        onChange={(event) => setWillDeliver(event.target.checked)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default UpdatePost;
