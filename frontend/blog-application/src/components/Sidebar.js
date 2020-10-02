import React from 'react'
import {Link} from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="col-lg-3 col-12 mt-1">
            <div className="card">
                <div className="view overlay">
                    <img src={process.env.PUBLIC_URL + '/images/profile.jpeg'} className="card-img-top" alt="feature" />
                    <Link to="#">
                        <div className="mask rgba-white-slight"></div>
                    </Link>
                </div>
                <div className="card-body">

                    <h5 className="card-title dark-grey-text text-center grey lighten-4 py-2">
                        <strong>Akshit Batra</strong>
                    </h5>


                    <p className="mt-3 dark-grey-text font-small text-center">
                        <em>Hello, I'm Akshit. I love to explore new technologies and trying to build something worthwhile.</em>
                    </p>

                    <ul className="list-unstyled list-inline-item circle-icons list-unstyled flex-center">

                        <li>
                            <a href="https://github.com/akbatra567" className="fb-ic">
                                <i className="fab fa-github"> </i>
                            </a>
                        </li>

                        <li>
                            <a href="https://twitter.com/akbatra567" className="tw-ic">
                                <i className="fab fa-twitter mx-3"> </i>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/akshit-batra/" className="gplus-ic">
                                <i className="fab fa-linkedin"> </i>
                            </a>
                        </li>
                    </ul>
                </div>


            </div>



            <section className="section widget-content mt-5">


                <div className="card card-body pb-0">
                    <div className="single-post">

                        <p className="font-weight-bold dark-grey-text text-center spacing grey lighten-4 py-2 mb-4">
                            <strong>POPULAR POSTS</strong>
                        </p>


                        <div className="row mb-4">
                            <div className="col-5">


                                <div className="view overlay">
                                    <img src="https://mdbootstrap.com/img/Photos/Others/photo13.jpg" className="img-fluid z-depth-1 rounded-0" alt="feature" />
                                    <Link to="#">
                                        <div className="mask waves-light"></div>
                                    </Link>
                                </div>
                            </div>


                            <div className="col-7">
                                <h6 className="mt-0 font-small">
                                    <Link to="#">
                                        <strong>Title of the news</strong>
                                    </Link>
                                </h6>

                                <div className="post-data">
                                    <p className="font-small grey-text mb-0">
                                        <i className="far fa-clock-o"></i> 18/08/2017</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="single-post">

                        <div className="row mb-4">
                            <div className="col-5">


                                <div className="view overlay">
                                    <img src="https://mdbootstrap.com/img/Photos/Others/photo12.jpg" className="img-fluid z-depth-1 rounded-0" alt="feature" />
                                    <Link to="#">
                                        <div className="mask waves-light"></div>
                                    </Link>
                                </div>
                            </div>


                            <div className="col-7">
                                <h6 className="mt-0 font-small">
                                    <Link to="#">
                                        <strong>Title of the news</strong>
                                    </Link>
                                </h6>
                                <div className="post-data">
                                    <p className="font-small grey-text mb-0">
                                        <i className="far fa-clock-o"></i> 18/08/2017</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-post">
                        <div className="row mb-4">
                            <div className="col-5">
                                <div className="view overlay">
                                    <img src="https://mdbootstrap.com/img/Photos/Others/photo10.jpg" className="img-fluid z-depth-1 rounded-0" alt="feature" />
                                    <Link to="#">
                                        <div className="mask waves-light"></div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-7">
                                <h6 className="mt-0 font-small">
                                    <Link to="#">
                                        <strong>Title of the news</strong>
                                    </Link>
                                </h6>
                                <div className="post-data">
                                    <p className="font-small grey-text mb-0">
                                        <i className="far fa-clock-o"></i> 18/08/2017</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-post">
                        <div className="row mb-4">
                            <div className="col-5">
                                <div className="view overlay">
                                    <img src="https://mdbootstrap.com/img/Photos/Others/photo15.jpg" className="img-fluid z-depth-1 rounded-0" alt="feature" />
                                    <Link to="#">
                                        <div className="mask waves-light"></div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-7">
                                <h6 className="mt-0 font-small">
                                    <Link to="#">
                                        <strong>Title of the news</strong>
                                    </Link>
                                </h6>
                                <div className="post-data">
                                    <p className="font-small grey-text mb-0">
                                        <i className="far fa-clock-o"></i> 18/08/2017</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-post">
                        <div className="row mb-4">
                            <div className="col-5">
                                <div className="view overlay">
                                    <img src="https://mdbootstrap.com/img/Photos/Others/photo9.jpg" className="img-fluid z-depth-1 rounded-0" alt="feature" />
                                    <Link to="#">
                                        <div className="mask waves-light"></div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-7">
                                <h6 className="mt-0 font-small">
                                    <Link to="#">
                                        <strong>Title of the news</strong>
                                    </Link>
                                </h6>
                                <div className="post-data">
                                    <p className="font-small grey-text mb-0">
                                        <i className="far fa-clock-o"></i> 18/08/2017</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-5">
                <div className="card card-body pb-0">
                    <div className="single-post">
                        <p className="font-weight-bold dark-grey-text text-center spacing grey lighten-4 py-2 mb-4">
                            <strong>NEWSLETTER</strong>
                        </p>
                        <div className="row mt-4">
                            <div className="col-md-12">
                                <div className="input-group md-form form-sm form-3 pl-0">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text white black-text" id="basic-addon9">@</span>
                                    </div>
                                    <input type="text" className="form-control mt-0 black-border rgba-white-strong" placeholder="Username" aria-describedby="basic-addon9" />
                                </div>
                                <button type="button" className="btn btn-grey btn-block mb-4 mt-4">Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="archive mb-5">
                <div className="card card-body pb-0">
                    <div className="single-post">

                        <p className="font-weight-bold dark-grey-text text-center spacing grey lighten-4 py-2 mb-4">
                            <strong>ARCHIVE</strong>
                        </p>
                        <div className="row mb-4">
                            <div className="col-md-12 text-center">
                                <ul className="list-unstyled">
                                    <li>
                                        <p className="mb-1">
                                            <Link to="#!" className="dark-grey-text">August 2016</Link>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mb-1">
                                            <Link to="#!" className="dark-grey-text">July 2016</Link>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mb-1">
                                            <Link to="#!" className="dark-grey-text">June 2016</Link>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mb-1">
                                            <Link to="#!" className="dark-grey-text">May 2016</Link>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mb-1">
                                            <Link to="#!" className="dark-grey-text">April 2016</Link>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mb-1">
                                            <Link to="#!" className="dark-grey-text">March 2016</Link>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mb-1">
                                            <Link to="#!" className="dark-grey-text">Febuary 2016</Link>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="mb-4">
                <div className="row mt-4">
                    <div className="col-md-12 col-lg-12">
                        <div className="card text-left mb-3">
                            <div className="view overlay">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe title="youtube" className="embed-responsive-item" src="https://www.youtube.com/embed/8gKD8KSER-8" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="card-body mx-2">
                                <a href="https://www.youtube.com/channel/UCQ3TeobI_vhwcrARBbV78_A?view_as=subscriber">
                                    <h5 className="card-title text-center my-2">
                                        <strong>Visit my YouTube channel!</strong>
                                    </h5>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="section mb-5">


                <div className="card card-body pb-0">
                    <div className="single-post">

                        <p className="font-weight-bold dark-grey-text text-center spacing grey lighten-4 py-2 mb-4">
                            <strong>CATEGORIES</strong>
                        </p>

                        <ul className="list-group my-4">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <Link className="">
                                    <p className="mb-0">Travel</p>
                                </Link>
                                <span className="badge teal badge-pill font-small">4</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <Link className="">
                                    <p className="mb-0">Lifestyle</p>
                                </Link>
                                <span className="badge teal badge-pill">2</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <Link className="" to="#">
                                    <p className="mb-0">Photography</p>
                                </Link>
                                <span className="badge teal badge-pill">1</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <Link className="" to="#">
                                    <p className="mb-0">Culinary</p>
                                </Link>
                                <span className="badge teal badge-pill">2</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <Link className="" to="#">
                                    <p className="mb-0">Fashion</p>
                                </Link>
                                <span className="badge teal badge-pill">1</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <Link className="" to="#">
                                    <p className="mb-0">Work</p>
                                </Link>
                                <span className="badge teal badge-pill">2</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <Link className="" to="#">
                                    <p className="mb-0">Business</p>
                                </Link>
                                <span className="badge teal badge-pill">5</span>
                            </li>
                        </ul>
                    </div>

                </div>

            </section>



            <section className="mb-5">


                <div className="row mt-4">

                    <div className="col-md-12">


                        <div id="carousel-example-4" className="carousel slide carousel-fade z-depth-1-half" data-ride="carousel">

                            <ol className="carousel-indicators">
                                <li data-target="#carousel-example-4" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-example-4" data-slide-to="1"></li>
                                <li data-target="#carousel-example-4" data-slide-to="2"></li>
                            </ol>



                            <div className="carousel-inner" role="listbox">

                                <div className="carousel-item active">
                                    <div className="view">
                                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(126).jpg" className="img-fluid" alt="feature" />
                                        <Link className="" to="#">
                                            <div className="mask flex-center rgba-stylish-strong"></div>
                                        </Link>
                                    </div>
                                    <div className="carousel-caption">
                                        <div className="animated fadeInDown">
                                            <h4 className="h4-responsive">
                                                <Link to="#!" className="white-text font-weight-bold">Your health</Link>
                                            </h4>
                                            <p>
                                                <Link to="#!" className="white-text">Lorem ipsum</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">

                                    <div className="view">
                                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(128).jpg" className="img-fluid" alt="feature" />
                                        <Link to="#!">
                                            <div className="mask flex-center rgba-black-light"></div>
                                        </Link>
                                    </div>
                                    <div className="carousel-caption">
                                        <div className="animated fadeInDown">
                                            <h4 className="h4-responsive">
                                                <Link to="#!" className="white-text font-weight-bold">News title</Link>
                                            </h4>
                                            <p>
                                                <Link to="#!" className="white-text">Lorem ipsum</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">

                                    <div className="view">
                                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(133).jpg" className="img-fluid" alt="feature" />
                                        <Link to="#!">
                                            <div className="mask flex-center rgba-black-light"></div>
                                        </Link>
                                    </div>
                                    <div className="carousel-caption">
                                        <div className="animated fadeInDown">
                                            <h4 className="h4-responsive">
                                                <Link to="#!" className="white-text font-weight-bold">News title</Link>
                                            </h4>
                                            <p>
                                                <Link to="#!" className="white-text">Lorem ipsum</Link>
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <Link className="carousel-control-prev" to="#carousel-example-4" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </Link>
                            <Link className="carousel-control-next" to="#carousel-example-4" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
