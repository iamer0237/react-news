import './App.css';
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <div>
        <div className='header'>
          <img className="logo" src="https://cdn.iconscout.com/icon/free/png-256/logo-3446031-2882300.png" />
          <h1>Hacker News</h1>
        </div>
        <div className="nav">
          <a href=''className='navItem'>New</a>
          <a href=''className='navItem'>Past</a>
          <a href=''className='navItem'>Comments</a>
          <a href=''className='navItem'>Ask</a>
          <a href=''className='navItem'>Show</a>
          <a href=''className='navItem'>Jobs</a>
          <a href=''className='navItem'>Submit</a>
        </div>
      </div>
      <List />
    </div>
  );
}

export default App;
