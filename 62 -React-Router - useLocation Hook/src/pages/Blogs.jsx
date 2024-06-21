// import React, { useState } from "react";
// import { blogsData } from "../blogsData";
// import { Link } from "react-router-dom";

import { useState } from "react";
import { blogsData } from "../blogsData";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <section>
      <h1>Blogs</h1>
      {blogs.map((blog) => {
        const { id, title, body } = blog;

        return (
          <article key={id}>
            <h2>{title}</h2>
            <p>{truncateString(body, 100)}</p>
            <Link to={title} state={{id, title, body}}>Learn More</Link>
          </article>
        );
      })}
    </section>
  );
};

export default Blogs;
