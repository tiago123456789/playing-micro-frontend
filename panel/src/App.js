import logo from './logo.svg';
import './App.css';

const modules = {
  "APP_A": "http://localhost:80/app-a",
  "APP_B": "http://localhost:80/app-b"
};

function App() {
  const buttonStyle = {
    color: "white",
    "text-decoration": "none", "background": "rgba(0, 0, 0, .7)",
    padding: "10px", borderRadius: "5px"
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href={modules.APP_A} style={buttonStyle}>APP A</a>
        <br />
        <a href={modules.APP_B} style={buttonStyle}>APP B</a>
      </header>
    </div>
  );
}

export default App;
