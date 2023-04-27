import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Posts, Register, Login, Logout, MakePost, Message, Profile } from "./";
import { fetchPosts, myData } from "../api";

const App = () => {
  const [token, setToken] = useState("");
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [post, setPost] = useState("");
  const [userData, setUserData] = useState({});

  // console.log("TOKEN", token);

  const getToken = () => {
    // console.log("PRE-getToken", token);
    {
      window.localStorage.getItem("token")
        ? (setToken(window.localStorage.getItem("token")), setIsLoggedIn(true))
        : null;
    }
    // console.log("POST getToken", token);
  };

  const getPosts = async () => {
    const result = await fetchPosts(token);
    setPosts(result);
    // console.log("POSTS UseEffect", result);
  };

  const getMyData = async () => {
    const result = await myData(token);
    setUserData(result.data);
  };

  const updatePost = async () => {
    const result = await updatePost();
  };

  const Navigation = () => {
    return (
      <header>
        <p id="title">Stranger's Things</p>
        <nav>
          <Link id="link" to="/">
            Posts
          </Link>
          {/* <Link id='link' to="/posts">Posts</Link> */}
          {token ? (
            <>
              <Link id="link" to="/profile">
                My Profile
              </Link>
              <Link
                id="link"
                to="/logout"
                onClick={() => {
                  window.localStorage.removeItem("token");
                  setToken("");
                  setIsLoggedIn(false);
                }}
              >
                Logout
              </Link>
              <Link id="link" to="/makepost">
                Create New Post
              </Link>
            </>
          ) : (
            <>
              <Link id="link" to="/register">
                Register
              </Link>
              <Link id="link" to="/login">
                Login
              </Link>
            </>
          )}
        </nav>
      </header>
    );
  };

  /////////////////////////////////////////////////
  useEffect(() => {
    // console.log("LOGGED IN?", isLoggedIn);
    getToken();
    console.log("LOGGED IN?", isLoggedIn);
    getPosts();
    {
      isLoggedIn ? getMyData() : console.log("getMyData Failed");
    }
  }, [token]);
  /////////////////////////////////////////////////

  return (
    <main>
      <Navigation />
      <div className="app">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Posts
                posts={posts}
                token={token}
                getPosts={getPosts}
                isLoggedIn={isLoggedIn}
                setPost={setPost}
              />
            }
          />
          {/* <Route exact path="/posts" element={<Posts />} /> */}
          <Route
            exact
            path="/register"
            element={
              <Register setToken={setToken} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route
            exact
            path="/login"
            element={
              <Login setToken={setToken} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route
            exact
            path="/logout"
            element={<Logout setToken={setToken} />}
          />
          <Route
            exact
            path="/makepost"
            element={<MakePost token={token} getPosts={getPosts} />}
          />
          <Route
            exact
            path={`/posts/:postID`}
            element={<Message post={post} token={token} />}
          />
          <Route
            exact
            path={"/profile"}
            element={<Profile userData={userData} />}
          />
        </Routes>
      </div>
    </main>
  );
};

export default App;
