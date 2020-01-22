//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
 // console.log(props) // console is showing an object array of dummyData
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
     {props.postData.map(p =>(
       <div>
     <Post 
     post={p}
     />
      </div>
       ))}
  </div>
  );
};

export default PostsPage;

