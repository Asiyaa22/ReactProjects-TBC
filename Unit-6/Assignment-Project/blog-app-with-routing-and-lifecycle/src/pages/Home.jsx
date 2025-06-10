import React from 'react'; // Import React library
import { Link } from 'react-router-dom'; // Import Link for navigation
import { blogData } from '../data/Blogs'; // Import blog data array
import '../components/styles/Home.css'; // Import CSS for styling

// Home component displays a list of blog posts
const Home = () => {
  return (
    <div className="home-container"> {/* Main container for the home page */}
      <h1>📘 Blog Posts</h1>
      <div className="blog-list"> {/* Container for the list of blogs */}
        {blogData.map((blog) => ( // Loop through each blog in blogData
          <div key={blog.id} className="blog-card"> {/* Unique key for each blog */}
            <h3>{blog.title}</h3> {/* Blog title */}
            <p><strong>Author:</strong> {blog.author}</p> {/* Blog author */}
            {/* Link to the blog's detail page */}
            <Link to={`/user/${blog.id}`} className="read-more">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; // Export the Home component