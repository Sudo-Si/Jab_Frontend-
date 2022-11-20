// import React from 'react'
import {useLocation} from 'react-router'
import {useContext, useEffect, useState} from 'react'
import image from '../images/Tech.png';

import { axiosInstance } from "../config";
import { Link } from "react-router-dom";
import { Context } from '../context/Context';
export default function SinglePost() {
  const { user } = useContext(Context);
  const [title , setTilte] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const PF = "http://localhost:5000/images/";
  const location = new useLocation();
 const path = location.pathname.split("/")[2];
 const [post, setPost] = useState([])
 useEffect(()=>{
  const getPost = async ()=>{
    const res = await axiosInstance.get("/posts/"+ path);
    setPost(res.data);
    setTilte(res.data.title);
    setDesc(res.data.desc);
  };
  getPost()
 },[path]);
 const handleDelete = async()=>{
  try {
      await axiosInstance.delete(`/posts/${post._id}` ,{
         data:{username:user.username}
        });
      window.location.replace("/" );
  } catch (err) {
    
  }
 }
 const handleUpdate = async()=>{
  try {
    await axiosInstance.put(`/posts/${post._id}` ,{
      username:user.username, title, desc});
    window.location.reload( );
} catch (err) {
  
}
 }
  return (

    <div classnaName="singlePost">
       <div className="singlePostWrapper">     
        {post.photo &&(<img className='singlePageImg' src={ PF+ post.photo} alt=""/>)}
        {
        updateMode ? (<input type="text" value={title} className="uWriteInput" autoFocus onChange={(e)=>setTilte(e.target.value)}/>
        )
        :(        <h1 className="singlePostTitle"> 
        {post.title}   
         {post.username === user?.username &&
         (<div className="singlePostEdit" >  
         <i class="singlePostIcon fa-solid fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i> 
         <i class="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
         </div>
         )}
      </h1>
      )}
     
        <div className="singlePostInfo"> 
        <span className="singlePostAuthor"> Author:<Link className ="lnk" to={`/?user=${post.username}`}><b>{post.username}</b></Link> </span>
        <span className="singlePostDate"><em>{new Date(post.createdAt).toDateString()} </em> </span>
        </div>
        {updateMode ? (
        <textarea type="text" className=" uWriteInput" value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
        )
        :(
        <p className=" usinglePostDesc">  {desc}
        </p>)}
        {updateMode &&(<button className='singlePostButton' type="submit" onClick={handleUpdate}> Update Post</button>)}
       </div>
      </div>
     

  )
}
