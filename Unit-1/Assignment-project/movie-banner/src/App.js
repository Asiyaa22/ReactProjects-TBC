import './App.css';

function App() {
  const movie = "Interstellar";
  const year = 2014;
  const tagline = "Mankind was born on Earth. It was never meant to die here.";
  const reason = "It explores time, love, and science in a deeply emotional way.";

  return (
    <div className="App">
      <h1>{movie} ({year})</h1>
      <h2><em>{tagline}</em></h2>
      <p>{reason}</p>
      <p>It’s been {2025 - year} years since it was released!</p>
    </div>
  );
}

export default App;
