import './App.css';

function App() {
  const yourName = "Asiya";
  const funFact = "I can debug in dreams👩‍💻"
  return (
    <div className="App">
    <h1>Hello, I am {yourName}👋</h1> 
    <h2>Aspiring React Developer</h2>
    <p>I’m currently learning how to build awesome UIs with React!</p>
    <p><strong>Fun Fact:</strong> {funFact}</p>
    </div>
  );
}

export default App;
