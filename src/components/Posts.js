import React from "react";
import { deletePost } from "../api";
import { useNavigate, useParams } from "react-router-dom";

const Posts = ({ posts, token, getPosts, isLoggedIn, setPost, setPostId }) => {
  const navigate = useNavigate();
  let { postID } = useParams();
  return (
    <>
      <h1 id="post-title">The Things</h1>
      {posts.map((post) => {
        // console.log("POST", post);
        // console.log(post.isAuthor);
        // let postID = post._id;
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
                <button
                  onClick={() => {
                    postID = post._id;
                    setPost(post);
                    // console.log("edit onClick post", post);
                    navigate(`/updatepost/${postID}`);
                  }}
                >
                  Edit
                </button>
              </>
            ) : isLoggedIn ? (
              <button
                onClick={() => {
                  // let { postID } = useParams();
                  postID = post._id;
                  setPost(post);
                  setPostId(post._id);
                  navigate(`/posts/${postID}`);
                }}
              >
                Send Message
              </button>
            ) : null}
          </div>
        );
      })}
    </>
  );
};
export default Posts;
