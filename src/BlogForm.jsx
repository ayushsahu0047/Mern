import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you have a function to save the blog post data
    const postId = saveBlogPost(formData);

    // Redirect to the new route with the post ID or slug
    navigate(`/blog/${postId}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const saveBlogPost = (postData) => {
    // Replace this with your logic to save the blog post data
    // For simplicity, this example returns a static postId
    return 'your_generated_post_id';
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <label htmlFor="content">Content:</label>
      <textarea
        id="content"
        name="content"
        value={formData.content}
        onChange={handleChange}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogForm;
