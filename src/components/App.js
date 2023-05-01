import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import {
  Posts,
  Register,
  Login,
  Logout,
  MakePost,
  Message,
  Profile,
  UpdatePost,
  SearchBar,
  SearchResult,
} from "./";
import { fetchPosts, myData, updatePost } from "../api";

const App = () => {
  const [token, setToken] = useState("");
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [post, setPost] = useState("");
  const [userData, setUserData] = useState({});
  const [updatedPost, setUpdatedPost] = useState({});
  const [postId, setPostId] = useState("");
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const getToken = () => {
    {
      window.localStorage.getItem("token")
        ? (setToken(window.localStorage.getItem("token")), setIsLoggedIn(true))
        : null;
    }
  };

  const getPosts = async () => {
    const result = await fetchPosts(token);
    setPosts(result);
  };

  const getMyData = async () => {
    const result = await myData(token);
    setUserData(result.data);
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
        <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      </header>
    );
  };

  /////////////////////////////////////////////////
  useEffect(() => {
    getToken();
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
                setPostId={setPostId}
              />
            }
          />
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
          <Route
            exact
            path={`/updatepost/:postID`}
            element={
              <UpdatePost
                token={token}
                post={post}
                setUpdatedPost={setUpdatedPost}
                getPosts={getPosts}
                setPostId={setPostId}
              />
            }
          />
          <Route
            exact
            path={"/searchresult"}
            element={
              <SearchResult
                posts={posts}
                searchTerm={searchTerm}
                isLoggedIn={isLoggedIn}
                setPostId={setPostId}
                token={token}
                getPosts={getPosts}
                setPost={setPost}
              />
            }
          />
        </Routes>
      </div>
    </main>
  );
};

export default App;
