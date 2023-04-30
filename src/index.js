import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components";

/* 
set up components for posts(fetching, posting, patching, deleting, separate out into separate components? ), 
for users(login, register, get/me?, possibly separate out into multiple components),
api folder for all api calls? 

password
  -set minimum un and pw length, set required, display error message, show minimum requirements

login
  -send message if incorrect information is put in(login result, error.message)
  
  -update post
    -token, post id, method


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
  
Patch route
  -token, post id, method
  -patch component
        -react
        -useParams - react-router-dom
        -useState
        -let { userId } = useParams();
  -setup route with post id --- :id ? -- "id" can be anything
        -let { id } = useParams()
  -on post component
        -onclick, setup :id to post._id
  -setup filter on posts to return single post via post._id
  -destructure and setup usestate with post properties
  -ternary {}
  -form, inputs for post properties, 
  type text value={properties} onchange useState handle submit
  -art collector, loading component? 
  -manual set updated post properties to updated state
  -


*/

const root = createRoot(document.querySelector("#app"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
