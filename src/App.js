import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Runtime type checking for React props and similar objects.
        </p>
        <p>
          PropTypes was originally exposed as part of the React core module, and is commonly used with React components.<br></br> Here is an example of using PropTypes with a React component, which also documents the different validators provided:
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent name={"PropTypes validated"} />
      </header>
    </div>
  );
}

export default App;
