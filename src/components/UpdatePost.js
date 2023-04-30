import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updatePost } from "../api";

// function UpdatePost({ post, token, getPosts }) {
//   const navigate = useNavigate();
//   const { postID } = useParams();

//   const [post] = posts.filter((post) => post._id === postID);

//   const { title, description, price, location, willDeliver } = post ? post : {};
//   console.log(title);
//   const [updatedTitle, setTitle] = useState(title);
//   const [updatedDescription, setDescription] = useState(description);
//   const [updatedPrice, setPrice] = useState(price);
//   const [updatedLocation, setLocation] = useState(location);
//   const [updatedWillDeliver, setWillDeliver] = useState(willDeliver);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const updatedPost = {
//       title: updatedTitle,
//       description: updatedDescription,
//       price: updatedPrice,
//       location: updatedLocation,
//       willDeliver: updatedWillDeliver,
//     };

//     const results = await updatePost(postID, token, updatedPost);
//     if (results.success) {
//       getPosts();
//       navigate("");
//     } else {
//       setErrorMessage(results.error.message);
//     }
//   };

//   return (
//     <>
//       {post ? (
//         <>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               value={updatedTitle}
//               onChange={(event) => setTitle(event.target.value)}
//             />
//             <input
//               type="text"
//               value={updatedDescription}
//               onChange={(event) => setDescription(event.target.value)}
//             />
//             <input
//               type="text"
//               value={updatedPrice}
//               onChange={(event) => setPrice(event.target.value)}
//             />
//             <input
//               type="text"
//               value={updatedLocation}
//               onChange={(event) => setLocation(event.target.value)}
//             />
//             <input
//               type="checkbox"
//               onChange={(event) => setWillDeliver(event.target.checked)}
//             />
//             <button type="submit">Save Changes</button>
//           </form>
//           {errorMessage && <p>{errorMessage}</p>}
//         </>
//       ) : (
//         <h1>Post does not exist</h1>
//       )}
//     </>
//   );
// }

const UpdatePost = ({
  setUpdatedPost,
  post,
  updatingPost,
  setPostId,
  token,
  getPosts,
}) => {
  const { title, description, price, location, willDeliver } = post;
  console.log("Old Post", post);
  const navigate = useNavigate();
  //   setPostId(post._id);
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

    // console.log(newPrice);
    // setUpdatedPost(newPost);
    // console.log("UpdatePost", newPost);
    // updatingPost();

    const result = await updatePost(post._id, token, newPost);
    if (result.success) {
      getPosts();
      navigate("/");
    }
  };

  // const updatingPost = async () => {
  //   console.log("updatingPost", updatedPost);
  //   const result = await updatePost(postId, token, updatedPost);
  //   if (result.success) {
  //     getPosts();
  //     navigate("/");
  //   }
  // };

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
