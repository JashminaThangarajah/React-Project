import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';

function Navbar(){
    return(
      <div className="navbar-dark bg-dark shadow">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                  <img src={logo} class="nav-logo rounded-circle" alt="img" />
                  <Link to="/" class="navbar-brand" style={{ color: 'white' }}>Kasthu Beauty Care                </Link>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">                </span>
                  </button>
                  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0" >
                      <li class="nav-item ">  
                        <Link to="/" class="nav-link active" style={{ color: 'white' }}>Home </Link>
                      </li>
                      <li class="nav-item">
                      <Link to="/about" class="nav-link active" style={{ color: 'white' }}>About Us   </Link>
                      </li>
                      <li class="nav-item">
                      <Link to="/contact" class="nav-link active" style={{ color: 'white' }}>Contact Us  </Link>
                      </li>

                      {/* <li class="nav-item">
                      <Link to="/gallary" class="nav-link active" style={{ color: 'white' }}>Gallary  </Link>
                      </li> */}

                      <li class="nav-item">
                      <Link to="/signin" class="nav-link active" style={{ color: 'white' }}>Sign In  </Link>
                      </li>

                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
               
      
    );

}
export default Navbar;

