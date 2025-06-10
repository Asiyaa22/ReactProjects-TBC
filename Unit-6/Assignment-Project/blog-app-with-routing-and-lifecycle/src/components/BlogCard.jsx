import React from 'react'; // Import React library
import { Link } from 'react-router-dom'; // Import Link for navigation
import './styles/BlogCard.css'; // Import CSS for styling (optional for extra styling)

// BlogCard component displays a single blog summary card
const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card"> {/* Card container */}
      <h3>{blog.title}</h3> {/* Blog title */}
      <p><strong>Author:</strong> {blog.author}</p> {/* Blog author */}
      {/* Link to the blog's detail page */}
      <Link to={`/blog/${blog.id}`}>Read More</Link>
    </div>
  );
};

export default BlogCard; // Export the BlogCard component