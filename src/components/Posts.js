import React from "react";
import { deletePost } from "../api";

const Posts = ({ posts, token, getPosts, isLoggedIn }) => {
  return (
    <>
      <h1 id="post-title">The Things</h1>
      {posts.map((post) => {
        // console.log("POST", post);
        // console.log(post.isAuthor);
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

            {post.isAuthor ? (
              <>
                <button
                  onClick={async () => {
                    const result = await deletePost(post._id, token);
                    {
                      result.success
                        ? getPosts()
                        : console.log("rerender failed");
                    }
                  }}
                >
                  Delete
                </button>
                <button>Edit</button>
              </>
            ) : isLoggedIn ? (
              <button>Send Message</button>
            ) : null}
          </div>
        );
      })}
    </>
  );
};
export default Posts;
