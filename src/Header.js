
function Header() {
 

    return (
      <div className="App">
        <div className='headerBar'>
          <div className='heading'>
            <img className="logo" src="https://cdn.iconscout.com/icon/free/png-256/logo-3446031-2882300.png" alt="Just a Logo" />
            <h1>Hacker News</h1>
          </div>
          <div className="nav">
            <a href='https://www.google.de' className='navItem'>New</a>
            <a href='https://www.google.de' className='navItem'>Past</a>
            <a href='https://www.google.de' className='navItem'>Comments</a>
            <a href='https://www.google.de' className='navItem'>Ask</a>
            <a href='https://www.google.de' className='navItem'>Show</a>
            <a href='https://www.google.de' className='navItem'>Jobs</a>
            <a href='https://www.google.de' className='navItem'>Submit</a>
          </div>
        </div>
 
      </div>
    );
  }
  
  export default Header;