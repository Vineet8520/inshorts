import React from 'react'
import {Link} from  "react-router-dom";

export default function Navbar() {

  return (
    <div>
     <nav className="navbar navbar-dark sticky-top bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href='/'>inshorts</a>
            <li>
              <Link to="/">Top news</Link>
            </li>
            <li>
              <Link to="/Sports">Sports</Link>
            </li>
            <li>
              <Link to="/Business">Business</Link>
            </li>
            <li>
              <Link to ="/Politics">Politics</Link>
            </li>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
  </div>
  )
}
