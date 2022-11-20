import { useEffect, useState } from "react";
import {useLocation} from 'react-router'
import Header from "../components/Header";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import axios from "axios"
export default function Home (){
   
    const[posts, setPosts] = useState([]); 
    const {search} = new useLocation();
    console.log(location);
    useEffect(()=>{
        const fetchPosts= async ()=>{
            const res = await axios.get("/posts"+search);
            setPosts(res.data);
        }
        fetchPosts()
    },[search])
    return (
            <> 
            <Header />
            <div className="home"> 
                <Posts posts={posts}/>
                <Sidebar />
            </div>
            </>
            )
}
