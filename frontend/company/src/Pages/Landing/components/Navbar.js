import React from 'react'

function Navbar() {
    return (
        <nav  className="navbar navbar-expand-lg navbar-dark scrolling-navbar red">
      <div  className="container">
        <a  className="navbar-brand" href="#"><strong>MDB</strong></a>
        <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7"
          aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
          <span  className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse" id="navbarSupportedContent-7">
          <ul  className="navbar-nav mr-auto">
            <li  className="nav-item active">
              <a  className="nav-link" href="#">Home <span  className="sr-only">(current)</span></a>
            </li>
            <li  className="nav-item">
              <a  className="nav-link" href="#">Link</a>
            </li>
            <li  className="nav-item">
              <a  className="nav-link" href="#">Profile</a>
            </li>
          </ul>
          <ul  className="navbar-nav ml-auto nav-flex-icons">
            <li  className="nav-item">
              <a  className="nav-link waves-effect waves-light"><i  className="fab fa-twitter"></i></a>
            </li>
            <li  className="nav-item">
              <a  className="nav-link waves-effect waves-light"><i  className="fab fa-google-plus-g"></i></a>
            </li>
            <li  className="nav-item">
              <a  className="nav-link waves-effect waves-light"><i  className="fab fa-facebook-f"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Navbar
