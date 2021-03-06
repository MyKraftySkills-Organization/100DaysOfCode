import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="page-footer rgba-stylish-strong elegant-color-dark text-center text-md-left mt-4 pt-4">
        <div className="container">
            <div className="row text-center text-md-left mt-3 pb-3">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">About me</h6>
                    <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.</p>
                </div>
                <hr className="w-100 clearfix d-md-none"/>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Category</h6>
                    <p>
                        <Link to="#!">Lifestyle</Link>
                    </p>
                    <p>
                        <Link to="#!">Travel</Link>
                    </p>
                    <p>
                        <Link to="#!">Work</Link>
                    </p>
                    <p>
                        <Link to="#!">Fashion</Link>
                    </p>
                </div>
                {/* <!--/.Second column--> */}

                <hr className="w-100 clearfix d-md-none"/>

                {/* <!--Third column--> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                    <p>
                        <Link to="#">Collaboriation</Link>
                    </p>
                    <p>
                        <Link to="#">Media about me</Link>
                    </p>
                    <p>
                        <Link to="#">Newsletter</Link>
                    </p>
                    <p>
                        <Link to="#">Help</Link>
                    </p>
                </div>
                {/* <!--/.Third column--> */}

                <hr className="w-100 clearfix d-md-none"/>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                    <p>
                        <i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                    <p>
                        <i className="fas fa-envelope mr-3"></i> info@example.com</p>
                    <p>
                        <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                    <p>
                        <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                </div>
            </div>

            <hr/>

            <div className="row py-3 d-flex align-items-center">

                {/* <!--Grid column--> */}
                <div className="col-md-7 col-lg-8">

                    {/* <!--Copyright--> */}
                    <p className="text-center text-md-left grey-text">
                        © 2019 Copyright:
                    </p>
                    {/* <!--/.Copyright--> */}

                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div className="col-md-5 col-lg-4 ml-lg-0">

                    {/* <!--Social buttons--> */}
                    <div className="social-section text-center text-md-left">
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item mx-0">
                                <Link className="btn-floating btn-sm rgba-white-slight mr-xl-4" to="#">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item mx-0">
                                <Link className="btn-floating btn-sm rgba-white-slight mr-xl-4" to="#">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item mx-0">
                                <Link className="btn-floating btn-sm rgba-white-slight mr-xl-4" to="#">
                                    <i className="fab fa-google-plus-g"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item mx-0">
                                <Link className="btn-floating btn-sm rgba-white-slight mr-xl-4" to="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
