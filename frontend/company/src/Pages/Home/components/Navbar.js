import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-light white double-nav scrolling-navbar">

            <div className="float-left">
                <a href="#" data-activates="slide-out" className="button-collapse"><i className="fas fa-bars"></i><span className="sr-only" aria-hidden="true">Toggle side navigation</span></a>
            </div>

            <div className="mr-auto pl-2">
                <span className="d-none d-md-inline-block">
                    <div id='dpl-gtm-jq'></div>
                </span>
            </div>


            <span id="dpl-navbar-right-buttons">
                <ul id="dpl-navbar-right-buttons-tmp" className="nav navbar-nav nav-flex-icons ml-auto">
                    <li className="nav-item d-none d-xl-inline-block">
                        <a href="/general/contact/" className="nav-link waves-effect">
                            <i className="fas fa-envelope"></i><span className="sr-only">Contact us</span>
                        </a>
                    </li>
                    <li className="nav-item d-none d-xl-inline-block">
                        <a href="/services/" className="nav-link waves-effect">
                            <i className="fas fa-question-circle"></i><span className="d-none d-xl-inline-block ml-1">Support</span>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbar-tools" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-wrench"></i><span className="d-none d-xl-inline-block ml-1">Tools</span></a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbar-tools">
                            <a className="dropdown-item d-xl-none" href="/services/">Support Forum</a>
                            <a className="dropdown-item" href="/snippets/">Editor & Snippets</a>
                            <a className="dropdown-item" href="/articles/">Articles</a>
                            <a className="dropdown-item" href="/news/frontend/">News</a>
                            <a className="dropdown-item" href="/cli/">MDB CLI <span className="badge badge-danger rounded">New</span></a>
                        </div>
                    </li>
                    <a className="text-info align-self-center ml-2 auth-modal-toggle" data-auth-modal-tab="sign-in">Sign In</a>
                    <a className="btn btn-info btn-rounded btn-sm waves-effect waves-light auth-modal-toggle" data-auth-modal-tab="sign-up">SIGN UP</a>
                </ul>
            </span>
        </nav>
    )
}
