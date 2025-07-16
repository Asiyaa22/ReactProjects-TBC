import React from 'react';
import Post from './components/Post'

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Mini Image Feed</h1>
      <Post 
        author="Vinay" 
        image="/img13.jpeg" 
      />
      <Post 
        author="Tushar" 
        image="/img17.jpeg" 
      />
      <Post 
        author="Asiya" 
        image="/board1.png" 
      />
    </div>
  );
}

export default App;
