import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Blog = () => {
  const { title } = useParams();
  const location = useLocation();


  return (
    <div>
      <h1>{title}</h1>
      <p>{location.state.body}</p>
    </div>
  );
};

export default Blog;
