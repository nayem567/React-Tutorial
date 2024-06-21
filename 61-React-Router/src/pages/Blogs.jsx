import React, { useState } from "react";
import { blogsData } from "../blogsData";
import { Link } from "react-router-dom"; 



const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);

    const truncateString = (str, num) =>{
        if(str.length > num){
            return str.slice(0, num) + '...'
        }else{
            return str;
        }
    }

  return (
    <div>
      <section>
        <h1>Blog Page</h1>
        {blogs.map((blog) =>{
            const {id, title, body} = blog;
            return(
                <article key={id}>
                    <h2>{title}</h2>
                    <p>{truncateString(body, 100)}</p>
                    <Link to={title}>Learn More</Link>
                </article>
            )
        })}
      </section>
    </div>
  );
};

export default Blogs;
