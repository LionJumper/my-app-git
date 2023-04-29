import React from "react";
import post from './Post.module.css';

const Post =(props)=>{
    console.log(props.message);
    //debugger - глянуть
    return(
        <div className={post.item}> 
        <img src="avadimass.jpg" alt="" />    
        I'm started learn to React development
                <div>
                    <span>like</span>
                </div>
            </div>
    );

}

export default Post;