import React, { useState } from "react";
import { postMessage } from "../api";
import { useNavigate } from "react-router-dom";

const Message = ({ post, token }) => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const message = { content };

  return (
    <div key={post._id} id="post-container">
      <h2 id="post-text">{post.title}</h2>
      <p id="post-text">{post.description}</p>
      <p id="post-text">
        <b>Price:</b> {post.price}
      </p>
      <p id="post-text">
        <b>The Stranger:</b> {post.author.username}
      </p>
      <p id="post-text">
        <b>Location:</b> {post.location}
      </p>
      <p id="post-text">
        <b>Delivery Available?</b> {post.willDeliver ? "Yes" : "No"}
      </p>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const result = await postMessage(post._id, token, message);
          {
            result.success ? navigate("/") : console.log("sendMessage failed");
          }
        }}
      >
        <input
          type="text"
          placeholder="Enter Message"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default Message;
