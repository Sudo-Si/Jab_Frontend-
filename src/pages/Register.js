import {useState} from 'react';
import axios from 'axios'
import{ Link} from 'react-router-dom';
const  Register =()=>{

    const [username, setUsername]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [error, setError]= useState(false);

// const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
      try{  const res = await axios.post("/auth/register", {
            username, 
            email,
            password,
        });
        res.data && window.location.replace("/login")
        }catch(err){ 
            console.log(err);
            setError(true)
        }
        // console.log(res)
    };
    return( 
    <div className="register"> 
    <span className="registerTitle"> Register</span>
             <form className='registerForm'
            //   onSubmit={handleSubmit}
             >
         
                <label >  username</label>
            <input className="registerInput"
             type="text"
              placeholder='Username' 
              onChange={e=>setUsername(e.target.value)}
              />
                <label >  Email</label>
            <input className="registerInput" type="email" placeholder='Email'
              onChange={e=>setEmail(e.target.value)} 
              />
                <label >  Password</label>
            <input className="registerInput" type="password" placeholder='Password'  
             onChange={e=>setPassword(e.target.value)}/>
            <button className='registerButton' 
            
            type="submit"
            
            >Register</button>
            <div className='errMsg'> </div>
           </form>
           {error && <span className='spn'><em className='spn'>Something Went Wrong !</em></span>}
           <button className="liRegisterButton">
            
    <Link to='/login' className="lnk" > Login</Link> 
</button>

    </div>
    )
}
export default Register;