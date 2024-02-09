
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <div>
      <h2>Blog Post</h2>
      <p>Displaying blog post with slug: {slug}</p>
    </div>
  );
};

export default BlogPost;
