import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className="homepage-v1 hidden-sn animated">
            <nav className="navbar fixed-top navbar-expand-lg  navbar-dark scrolling-navbar red">
                <div className="container-fluid justify-content-center align-items-center">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent-4">
                        <ul className="navbar-nav">

                            <li className="nav-item ml-4 mb-0">
                                <Link to="/" className="nav-link waves-effect waves-light font-weight-bold">HOMEPAGE</Link>
                            </li>

                            <li className="nav-item ml-4  mb-0">

                                <Link to="post" className="nav-link waves-effect waves-light font-weight-bold">POST PAGE</Link>

                            </li>
                            <li className="nav-item ml-4  mb-0">

                                <Link to="about" className="nav-link waves-effect waves-light font-weight-bold"> ABOUT</Link>

                            </li>
                            <li className="nav-item ml-4 mb-0">
                                <Link to="contact" className="nav-link waves-effect waves-light font-weight-bold">CONTACT
                                <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <ul className="navbar-nav ml-auto nav-flex-icons">
                        <li className="nav-item ">
                            <Link className="nav-link waves-effect waves-light" to="#">
                                <i className="fab fa-twitter"></i>
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link waves-effect waves-light" to="#">
                                <i className="fab fa-google-plus-g"></i>
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link waves-effect waves-light" to="#">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link waves-effect waves-light" to="#">
                                <i className="fab fa-instagram"></i>
                            </Link>

                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto nav-flex-icons">
                        <li className="nav-item dropdown">

                            <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false" to="#" >
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" className="rounded-circle z-depth-0"
                                    alt="avatar" height="35" /> Akshit </Link>

                            <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                                <Link className="dropdown-item" to="#">My account</Link>
                                <Link className="dropdown-item" to="#">Log out</Link>
                            </div>
                        </li>
                    </ul>
                </div>

            </nav>

        </header>
    )
}
