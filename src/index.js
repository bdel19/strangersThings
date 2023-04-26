import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components";

/* 
set up components for posts(fetching, posting, patching, deleting, separate out into separate components? ), 
for users(login, register, get/me?, possibly separate out into multiple components),
api folder for all api calls? 

password
  -set minimum un and pw length, set required, display error message, show minimum requirements

makeHeaders? 

login
  -send message if incorrect information is put in(login result, error.message)

Authenticated post view
  -pulling only own posts - My Posts? 
    -<Fragment> {post.isAuthor ? null : render post} </>
    -delete button
    -messages
    -exclude posts where isAuthor = false
    -myData()
    -isLoggedIn useState
 
  -delete, update post, message 
    - onClick, set postId 

  -message
    -header, post id, token, message content
  
  -update post
    -token, post id, method
  
Loading user object
  -token check, useEffect

Search Form
  -searchTerm useState
  -postsToDisplay map
  
  -loose sample attempt:

        const [posts, setPosts] = useState([]);
        const [searchTerm, setSearchTerm] = useState('');

        function postMatches(post, text) {
          // return true if any of the fields you want to check against include the text
          // strings have an .includes() method 
        }

        const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
        const postsToDisplay = searchTerm.length ? filteredPosts : posts;

        // then, in our jsx below... map over postsToDisplay instead of posts
  




*/

const root = createRoot(document.querySelector("#app"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
