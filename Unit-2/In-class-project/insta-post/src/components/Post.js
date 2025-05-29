import React, { useState } from 'react';
import "../../src/post.css"

function Post({ author, image }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      maxWidth: '320px'
    }}>
      <img 
        src={image} 
        alt="post" 
        style={{ width: '100%', borderRadius: '8px' }} 
      />
      <h3>{author}</h3>
      <button onClick={handleLike}>❤️ Like ({likes})</button>
    </div>
  );
}

export default Post;
