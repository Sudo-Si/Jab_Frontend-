import axios from 'axios';
import React, { useContext, useRef, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Context } from '../context/Context'

export default function settings() {
    const {user}= useContext(Context);
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [success, setSuccess] = useState(false);
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      username: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
        setSuccess(true);
      } catch (err) {console("prob "+ err.Context)} 
    }
    try {
    //  await axios.put("/users/", +user._id, updatedUser);
     await axios.put(`/users/${user._id}`, updatedUser);
  
    } catch (err) {}
    console.log(user._id)
  };
  return (
    <div className='settings'>
        <div className='settingsWrapper'> 
        <div className='settingsTitle'>
            <span className='settingsUpdateTitle'>Update Your Account</span> 
            <span className='settingsDeleteTitle'>Delete Your Account</span> 
            </div>
            <form className='settingsForm' onSubmit={handleSubmit}>
                <label> Profile Picture</label>
                <div className='settingsPP' > 
                <img src={file?  URL.createObjectURL(file): user.profilePic} />
                <label htmlFor='fileInput'>  

                <i class="settingsPPIcon fa-solid fa-user-circle"> </i>
                </label>
                <input type="file" 
                id="fileInput" 
                className='writeInput'
                style={{display:"none"}}
                onChange={(e) => setFile(e.target.files[0])}
                />
               
                </div>
                <label>  Username</label>
            <input type="text" placeholder={user.username}  onChange={e=>setUsername(e.target.value)}/>
                <label >  Email</label>
            <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)}/>
                <label >  Password</label>
            <input type="password" onChange={e=>setPassword(e.target.value)}  />
            <button className='settingsButton' type="submit" >Update</button>
            {success&& <span>Profile has been updated</span>}

            </form>
        </div>
            <Sidebar />
        
   
    </div>
  )
}
