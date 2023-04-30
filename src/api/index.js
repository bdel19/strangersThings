//Ajax Requests
export const COHORT_NAME = "2301-FTB-ET-WEB-PT";
export const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
// import { username, password } from "../components";

// const returned = await fetch(`${BASE_URL}/posts`);
// console.log(returned);

export const fetchPosts = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    // console.log("fetchPosts Results", result.data.posts);
    return result.data.posts;
  } catch (err) {
    console.error(err);
  }
};

export const registerUser = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user,
      }),
    });
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const login = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user,
      }),
    });
    const result = await response.json();
    console.log("login result", result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const myData = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log("myData Result", result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const makePost = async (post, token) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post,
      }),
    });
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const deletePost = async (postID, token) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log("deletePost result", result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const updatePost = async (postId, token, updatedPost) => {
  console.log("updatePost postID", postId);
  console.log("updatePost token", token);
  console.log("updatePost updatedPost", updatedPost);
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: updatedPost,
      }),
    });
    const result = await response.json();

    console.log("updatePost result", result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const postMessage = async (postID, token, message) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postID}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message,
      }),
    });
    const result = await response.json();
    console.log("postMessage Result", result);
    console.log("postMessage Token", token);
    return result;
  } catch (err) {
    console.error(err);
  }
};
