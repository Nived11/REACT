import React from 'react'
import "./App.css"
import SearchIcon from '@mui/icons-material/Search';
function App(){
  return(
    <div>
      <nav>
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="search">
          <div className="search-box">
            <SearchIcon className="search-icon" />
            <input type="text"  placeholder="Search..."/>
          </div>
        </div>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Products</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  )
}

export default App