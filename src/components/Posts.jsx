import React from "react";
import posts from'./Posts.module.css';
import Post from "./Post/Post";

const Posts = ()=>{
    return(
        <div className={posts.post}>
            <p className={posts.head}>My Posts</p>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Add post</button>
            <button>Remove</button>
            <div>
            <p className={posts.new}>New Posts</p>
            <div className={posts.posts}>

               <Post message="'Allabadi'"/>
               <Post />
               <Post />
               <Post />
               <Post />
               <Post />
   
            </div>
            </div>


        </div>
    );
}

export default Posts;