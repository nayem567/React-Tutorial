import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './postSlice';

const PostsView = () => {

  const {isLoading, posts, error} = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchData());
  }, [])

  return (
    <div>
      {isLoading && <h2>Loading....</h2>}
      {error && <h2>{error.message}</h2>}
      <section>
        {posts && posts.map((post) =>{
          return(
            <article key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default PostsView