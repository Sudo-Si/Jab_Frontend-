
import { Link } from 'react-router-dom'



export default function Post({post}) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className='post'>
      {
        post.photo &&(
          <Link to={`/post/${post._id}`} className="lnk" >     
       <img className='postImg' src={PF + post.photo}  />
       </Link>
        )
      }
   
   
      <div className="postInfo">
            <div className='postCats'>
         {post.categories.map((c)=>(
              <span className='postCat'>{c.name}</span>
            ))
            }
                
            </div>
            <span className='postTitle'> 
            <Link to={`/post/${post._id}`} className="lnk" > 
           { post.title}
            </Link> 
            </span>
            <hr/>
            <span className='postDate'>{new Date(post.createdAt).toDateString()} </span>
            <p className='postDescription'> {post.desc}
     
         
    </p>
      </div>
    </div>
  )
}
 
