import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogsData } from '../blogsData';

const Blog = () => {
    const {title} = useParams();
    const [bodyData, setBodyData] = useState('');

    useEffect(() => {
        const blogData = blogsData.filter((blog) => blog.title == title);
        setBodyData(blogData[0].body);
    }, []);
    
    const navigate = useNavigate();

  return (
    <div>
        <h2>{title}</h2>
        <p>{bodyData}</p>
        <button onClick={() =>{navigate('/blogs')}}>Back to Blogs</button>
    </div>
  )
}

export default Blog