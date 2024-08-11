import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Blog = () => {
  const { title } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <h1>{title}</h1>
      <p>{location.state.body}</p>
      <button onClick={() => navigate('/blogs', {replace:true})}>Back to Blogs</button>
    </div>
  );
};

export default Blog;
