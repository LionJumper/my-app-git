import React from 'react';
import picture from './Picture.module.css';

const Picture = () =>{
    return(
    <div className={picture.picture}>
    <div><img className={picture.Tree} src="https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDY1OTc2fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"></img></div>
   
    </div>
);
}

export default Picture;