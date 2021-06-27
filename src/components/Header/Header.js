import React from "react";
import './Header.css';
import { Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className="background-gr"> 
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6"></div>
      </div>

      <div className="navigation">
        <nav class="navbar navbar-expand-lg navbar-dark bg-transparent ">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              Navbar
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/allBlog">
                    Blog
                  </Link>
                </li>
                
                <li class="nav-item">
                  <Link to ="/dashboard"
                    class="nav-link"
                    href="#"
                    
                    
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
              <Link className="btn btn-outline-light ml-3" to="/login">
                Log In 
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
