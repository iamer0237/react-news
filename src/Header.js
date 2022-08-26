
function Header() {
 

    return (
      <div className="App">
        <div className='headerBar'>
          <div className='heading'>
            <img className="logo" src="https://seeklogo.com/images/A/anonymous-logo-7E968E8797-seeklogo.com.png" alt="Anonymous Logo" />
            <h1>Hacker News</h1>
          </div>
          <div className="nav">
            <a href='https://www.google.de' className='navItem headerLinks'>New</a>
            <a href='https://www.google.de' className='navItem headerLinks'>Past</a>
            <a href='https://www.google.de' className='navItem headerLinks'>Comments</a>
            <a href='https://www.google.de' className='navItem headerLinks'>Ask</a>
            <a href='https://www.google.de' className='navItem headerLinks'>Show</a>
            <a href='https://www.google.de' className='navItem headerLinks'>Jobs</a>
            <a href='https://www.google.de' className='navItem headerLinks'>Submit</a>
          </div>
        </div>
 
      </div>
    );
  }
  
  export default Header;