import React, { Component } from 'react'; // Import React and Component
import { useParams, useNavigate } from 'react-router-dom'; // Import hooks for routing
import { blogData } from '../data/Blogs'; // Import blog data array
import '../components/styles/BlogDetails.css'; // Import CSS for styling

// HOC to use hooks inside class component
function withRouter(Component) {
  return function WrappedComponent(props) {
    const params = useParams(); // Get URL parameters (e.g., blog ID)
    const navigate = useNavigate(); // Get navigation function
    return <Component {...props} params={params} navigate={navigate} />; // Pass as props
  };
}

class BlogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: null, // State to hold the current blog details
    };
  }

  // 🧠 Lifecycle Method: componentDidMount
  // Runs after the component mounts; fetches the blog by ID
  componentDidMount() {
    const { id } = this.props.params; // Get blog ID from route params
    const blog = blogData.find((b) => b.id === id); // Find blog by ID
    this.setState({ blog }); // Set blog in state
  }

  // 🧠 Lifecycle Method: componentDidUpdate
  // Runs when props/state change; updates blog if ID changes
  componentDidUpdate(prevProps) {
    const prevId = prevProps.params.id;
    const currentId = this.props.params.id;

    if (prevId !== currentId) { // If the blog ID has changed
      const updatedBlog = blogData.find((b) => b.id === currentId); // Find new blog
      this.setState({ blog: updatedBlog }); // Update state
      console.log(`🔁 Blog updated: from ID ${prevId} to ${currentId}`); // Log update
    }
  }

  // 🧠 Lifecycle Method: componentWillUnmount
  // Runs before the component unmounts; cleanup/logging
  componentWillUnmount() {
    console.log('🧹 BlogDetails is unmounting...');
  }

  render() {
    const { blog } = this.state; // Get blog from state

    if (!blog) {
      return <div className="loading">Loading blog...</div>; // Show loading if blog not loaded
    }

    return (
      <div className="blog-details-container">
        <h2>{blog.title}</h2> {/* Blog title */}
        <p><strong>Author:</strong> {blog.author}</p> {/* Blog author */}
        <p>{blog.content}</p> {/* Blog content */}
        <button onClick={() => this.props.navigate('/')}>Back to Home</button> {/* Back button */}
      </div>
    );
  }
}

export default withRouter(BlogDetails); // Export wrapped component for routing