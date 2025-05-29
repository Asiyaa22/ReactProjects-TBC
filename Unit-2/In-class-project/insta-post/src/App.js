import React from 'react';
import Post from './components/Post'

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Mini Image Feed</h1>
      <Post 
        author="Vinay" 
        image="https://source.unsplash.com/random/300x200?coding" 
      />
      <Post 
        author="Tushar" 
        image="https://source.unsplash.com/random/300x200?developer" 
      />
      <Post 
        author="Asiya" 
        image="https://source.unsplash.com/random/300x200?technology" 
      />
    </div>
  );
}

export default App;
