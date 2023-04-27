import React from "react";

const Profile = ({ userData }) => {
  console.log("userData", userData);
  const { messages, posts } = userData;
  console.log("messages", messages);
  console.log("posts", posts);
  return (
    <>
      {posts
        ? posts.map((post) => {
            if (post.active === true) {
              console.log("ACTIVE POST? ", post.active);
              console.log("Message", post.messages);
              //   const messages = post.messages;
              console.log(messages);
              return (
                <React.Fragment key={post._id}>
                  <div id="post-container">
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
                      <b>Delivery Available?</b>{" "}
                      {post.willDeliver ? "Yes" : "No"}
                    </p>
                    {post.messages
                      ? post.messages.map((message) => {
                          return (
                            <div key={post._id}>
                              <p id="post-text">
                                <b>Message:</b> {message.content}
                              </p>
                              <p id="post-text">
                                <b>From:</b> {message.fromUser.username}
                              </p>
                            </div>
                          );
                        })
                      : null}
                  </div>
                </React.Fragment>
              );
            }
          })
        : null}
    </>
  );
};

export default Profile;
