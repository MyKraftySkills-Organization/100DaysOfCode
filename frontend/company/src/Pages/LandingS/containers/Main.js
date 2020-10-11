import React from 'react'
import Footer from '../components/Footer'
import Header from './Header'

export default function Main() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <section id="features" className="mb-5">
                        <h1 className="mb-3 my-5 pt-5 dark-grey-text wow fadeIn text-center" data-wow-delay="0.2s"><strong
                            className="font-weight-bold">Lorem ipsum</strong> dolor sit amet</h1>
                        <p className="text-center grey-text w-responsive mx-auto mb-5 wow fadeIn" data-wow-delay="0.2s">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quas, eos officia maiores ipsam ipsum
                            dolores reiciendis
          ad voluptas, animi obcaecati adipisci sapiente mollitia.</p>


                        <div className="row features wow fadeIn" data-wow-delay="0.2s">

                            <div className="col-lg-4 text-center">
                                <div className="icon-area">
                                    <div className="circle-icon">
                                        <i className="fas fa-cogs blue-text"></i>
                                    </div>
                                    <br />
                                    <h5 className="dark-grey-text font-weight-bold mt-2">Customization</h5>
                                    <div className="mt-1">
                                        <p className="mx-3 grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem
                                        ipsum dolor sit
                  amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 text-center">
                                <div className="icon-area">
                                    <div className="circle-icon">
                                        <i className="fas fa-book blue-text"></i>
                                    </div>
                                    <br />
                                    <h5 className="dark-grey-text font-weight-bold mt-2">Easy tutorials</h5>
                                    <div className="mt-1">
                                        <p className="mx-3 grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem
                                        ipsum dolor sit
                  amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 text-center mb-4">
                                <div className="icon-area">
                                    <div className="circle-icon">
                                        <i className="fas fa-users blue-text"></i>
                                    </div>
                                    <br />
                                    <h5 className="dark-grey-text font-weight-bold mt-2">Free support</h5>
                                    <div className="mt-1">
                                        <p className="mx-3 grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem
                                        ipsum dolor sit
                  amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </section>


                </div>



                <div className="container-fluid" style={{ backgroundColor: '#f9f9f9' }}>
                    <div className="container py-4">


                        <section>
                            <div className="row my-4 pt-5 wow fadeIn" data-wow-delay="0.4s">
                                <div className="col-lg-7 col-md-12 mb-4 text-center">
                                    <img src="https://mdbootstrap.com/img/Photos/Others/screen.jpg" alt=""
                                        className="img-fluid z-depth-2 rounded" />
                                </div>



                                <div className="col-lg-5 col-md-12 mb-4 text-left">


                                    <h2 className="mb-3 my-5 dark-grey-text wow fadeIn" data-wow-delay="0.2s"><strong
                                        className="font-weight-bold">Download</strong> the application</h2>

                                    <p className="grey-text mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem
                                    ipsum dolor sit amet,
                consectetur adipisicing elit.</p>
                                    <a className="btn btn-white btn-rounded blue-text font-weight-bold ml-0 wow fadeIn" data-wow-delay="0.2s"><i
                                        className="fab fa-android pr-2" aria-hidden="true"></i> Play store</a>
                                    <a className="btn btn-white btn-rounded blue-text font-weight-bold wow fadeIn" data-wow-delay="0.2s"><i
                                        className="fab fa-apple pr-2" aria-hidden="true"></i> App store</a>
                                </div>


                            </div>


                        </section>


                    </div>
                </div>



                <div className="streak streak-md streak-photo"
                    style={{ backgroundImage: "url('https://mdbootstrap.com/img/Photos/Others/architecture.jpg')" }}>
                    <div className="flex-center white-text red">
                        <div className="container py-3">


                            <section className="wow fadeIn" data-wow-delay="0.2s">


                                <h1 className="py-5 my-5 white-text text-center wow fadeIn" data-wow-delay="0.2s"><strong
                                    className="font-weight-bold">Lorem ipsum</strong> dolor sit amet</h1>


                                <div className="row features-small mb-5">


                                    <div className="col-md-12 col-lg-4">


                                        <div className="row mb-5">
                                            <div className="col-3">
                                                <a type="button" className="btn-floating white btn-lg my-0"><i className="fas fa-tablet-alt blue-text"
                                                    aria-hidden="true"></i></a>
                                            </div>
                                            <div className="col-9">
                                                <h5 className="font-weight-bold white-text">Fully responsive</h5>
                                                <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                      maiores.</p>
                                            </div>
                                        </div>



                                        <div className="row mb-5">
                                            <div className="col-3">
                                                <a type="button" className="btn-floating white btn-lg my-0"><i className="fas fa-level-up-alt blue-text"
                                                    aria-hidden="true"></i></a>
                                            </div>
                                            <div className="col-9">
                                                <h5 className="font-weight-bold white-text">Frequent updates</h5>
                                                <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                      maiores.</p>
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="col-3">
                                                <a type="button" className="btn-floating white btn-lg my-0"><i className="fas fa-phone blue-text"
                                                    aria-hidden="true"></i></a>
                                            </div>
                                            <div className="col-9">
                                                <h5 className="font-weight-bold white-text">Technical support</h5>
                                                <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                      maiores nam.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-4 px-5 mb-2 text-center text-md-left flex-center">
                                        <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new1.png" alt=""
                                            className="z-depth-0 img-fluid" />
                                    </div>



                                    <div className="col-md-12 col-lg-4">


                                        <div className="row mb-5">
                                            <div className="col-3">
                                                <a type="button" className="btn-floating white btn-lg my-0"><i className="far fa-object-group blue-text"
                                                    aria-hidden="true"></i></a>
                                            </div>
                                            <div className="col-9">
                                                <h5 className="font-weight-bold white-text">Editable layout</h5>
                                                <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                      maiores nam.</p>
                                            </div>
                                        </div>



                                        <div className="row mb-5">
                                            <div className="col-3">
                                                <a type="button" className="btn-floating white btn-lg my-0"><i className="fas fa-rocket blue-text"
                                                    aria-hidden="true"></i></a>
                                            </div>
                                            <div className="col-9">
                                                <h5 className="font-weight-bold white-text">Fast and powerful</h5>
                                                <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                      maiores nam.</p>
                                            </div>
                                        </div>



                                        <div className="row mb-5">
                                            <div className="col-3">
                                                <a type="button" className="btn-floating white btn-lg my-0"><i className="fas fa-cloud-upload-alt blue-text"
                                                    aria-hidden="true"></i></a>
                                            </div>
                                            <div className="col-9">
                                                <h5 className="font-weight-bold white-text">Cloud storage</h5>
                                                <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                      maiores nam.</p>
                                            </div>
                                        </div>


                                    </div>


                                </div>


                            </section>

                        </div>
                    </div>
                </div>



                <div className="container">


                    <section className="mt-4 mb-5">


                        <h1 className="mb-3 my-5 pt-5 text-center dark-grey-text wow fadeIn" data-wow-delay="0.2s"><strong
                            className="font-weight-bold">Lorem ipsum</strong> dolor sit amet</h1>


                        <p className="text-center w-responsive mx-auto my-5 grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fugit, error amet numquam iure provident voluptate
          esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.</p>


                        <div className="row">


                            <div className="col-lg-4 col-md-12 mb-4">

                                <div className="card">


                                    <div className="text-center">
                                        <div className="card-body">
                                            <h5>Basic plan</h5>
                                            <div className="d-flex justify-content-center">
                                                <div className="card-circle d-flex justify-content-center align-items-center">
                                                    <i className="fas fa-home red-text"></i>
                                                </div>
                                            </div>


                                            <h2 className="font-weight-bold dark-grey-text mt-3"><strong>59$</strong></h2>
                                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa pariatur id nobis
                                            accusamus
                    deleniti cumque hic laborum.</p>
                                            <a className="btn btn-red font-weight-bold btn-rounded">Buy now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">
                                <div className="card red">
                                    <div className="text-center white-text">
                                        <div className="card-body">
                                            <h5>Premium plan</h5>
                                            <div className="d-flex justify-content-center">
                                                <div className="card-circle d-flex justify-content-center align-items-center">
                                                    <i className="fas fa-users white-text"></i>
                                                </div>
                                            </div>
                                            <h2 className="font-weight-bold white-text mt-3"><strong>79$</strong></h2>
                                            <p>Esse corporis saepe laudantium velit adipisci cumque iste ratione facere non distinctio
                    cupiditate sequi atque.</p>
                                            <a className="btn btn-white red-text font-weight-bold btn-rounded">Buy now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 mb-4">
                                <div className="card">
                                    <div className="text-center">
                                        <div className="card-body">
                                            <h5>Advanced plan</h5>
                                            <div className="d-flex justify-content-center">
                                                <div className="card-circle d-flex justify-content-center align-items-center">
                                                    <i className="fas fa-chart-bar red-text"></i>
                                                </div>
                                            </div>
                                            <h2 className="font-weight-bold dark-grey-text mt-3"><strong>99$</strong></h2>
                                            <p className="grey-text">At ab ea a molestiae corrupti numquam quo beatae minima ratione magni accusantium
                                            repellat
                    eveniet quia vitae.</p>
                                            <a className="btn btn-red font-weight-bold btn-rounded">Buy now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr />
                    <section className="text-center pb-4">


                        <h1 className="mb-5 my-5 pt-5 text-center dark-grey-text wow fadeIn" data-wow-delay="0.2s"><strong
                            className="font-weight-bold">Our clients</strong> about us</h1>

                        <div className="row">


                            <div id="multi-item-example" className="carousel testimonial-carousel slide carousel-multi-item mb-5"
                                data-ride="carousel">


                                <div className="controls-top">
                                    <a className="btn-floating btn-blue btn-sm" href="#multi-item-example" data-slide="prev"><i
                                        className="fas fa-chevron-left"></i></a>
                                    <a className="btn-floating btn-blue btn-sm" href="#multi-item-example" data-slide="next"><i
                                        className="fas fa-chevron-right"></i></a>
                                </div>



                                <div className="carousel-inner" role="listbox">


                                    <div className="carousel-item active">


                                        <div className="col-md-4">
                                            <div className="testimonial">

                                                <div className="avatar mx-auto">
                                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                                                        className="rounded-circle img-fluid" />
                                                </div>

                                                <h4 className="font-weight-bold mt-4">Anna Deynah</h4>
                                                <h6 className="blue-text font-weight-bold my-3">Web Designer</h6>
                                                <p className="font-weight-normal"><i className="fas fa-quote-left pr-2"></i>Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p>

                                                <div className="grey-text">
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star-half-alt"> </i>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-md-4 clearfix d-none d-md-block">
                                            <div className="testimonial">

                                                <div className="avatar mx-auto">
                                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
                                                        className="rounded-circle img-fluid" />
                                                </div>

                                                <h4 className="font-weight-bold mt-4">John Doe</h4>
                                                <h6 className="blue-text font-weight-bold my-3">Web Developer</h6>
                                                <p className="font-weight-normal"><i className="fas fa-quote-left pr-2"></i>Ut enim ad minima veniam, quis
                      nostrum exercitationem ullam corporis laboriosam.</p>

                                                <div className="grey-text">
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-md-4 clearfix d-none d-md-block">
                                            <div className="testimonial">

                                                <div className="avatar mx-auto">
                                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                                                        className="rounded-circle img-fluid" />
                                                </div>

                                                <h4 className="font-weight-bold mt-4">Abbey Clark</h4>
                                                <h6 className="blue-text font-weight-bold my-3">Photographer</h6>
                                                <p className="font-weight-normal"><i className="fas fa-quote-left pr-2"></i>Quis autem vel eum iure
                      reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</p>

                                                <div className="grey-text">
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="far fa-star"> </i>
                                                </div>
                                            </div>
                                        </div>


                                    </div>



                                    <div className="carousel-item">


                                        <div className="col-md-4">
                                            <div className="testimonial">

                                                <div className="avatar mx-auto">
                                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg"
                                                        className="rounded-circle img-fluid" />
                                                </div>

                                                <h4 className="font-weight-bold mt-4">Blake Dabney</h4>
                                                <h6 className="blue-text font-weight-bold my-3">Web Designer</h6>
                                                <p className="font-weight-normal"><i className="fas fa-quote-left pr-2"></i>Ut enim ad minima veniam, quis
                      nostrum exercitationem ullam corporis laboriosam.</p>

                                                <div className="grey-text">
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star-half-alt"> </i>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-md-4 clearfix d-none d-md-block">
                                            <div className="testimonial">

                                                <div className="avatar mx-auto">
                                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg"
                                                        className="rounded-circle img-fluid" />
                                                </div>

                                                <h4 className="font-weight-bold mt-4">Andrea Clay</h4>
                                                <h6 className="blue-text font-weight-bold my-3">Front-end developer</h6>
                                                <p className="font-weight-normal"><i className="fas fa-quote-left pr-2"></i>Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Quod eos id officiis hic tenetur quae.</p>

                                                <div className="grey-text">
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-md-4 clearfix d-none d-md-block">
                                            <div className="testimonial">

                                                <div className="avatar mx-auto">
                                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(7).jpg"
                                                        className="rounded-circle img-fluid" />
                                                </div>

                                                <h4 className="font-weight-bold mt-4">Cami Gosse</h4>
                                                <h6 className="blue-text font-weight-bold my-3">Phtographer</h6>
                                                <p className="font-weight-normal"><i className="fas fa-quote-left pr-2"></i>At vero eos et accusamus et
                      iusto odio dignissimos ducimus qui blanditiis praesentium.</p>

                                                <div className="grey-text">
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="far fa-star"> </i>
                                                </div>
                                            </div>
                                        </div>


                                    </div>



                                    <div className="carousel-item">


                                        <div className="col-md-4">
                                            <div className="testimonial">

                                                <div className="avatar mx-auto">
                                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                                                        className="rounded-circle img-fluid" />
                                                </div>

                                                <h4 className="font-weight-bold mt-4">Bobby Haley</h4>
                                                <h6 className="blue-text font-weight-bold my-3">Web Developer</h6>
                                                <p className="font-weight-normal"><i className="fas fa-quote-left pr-2"></i>Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Quod eos id officiis hic tenetur quae.</p>

                                                <div className="grey-text">
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-md-4 clearfix d-none d-md-block">
                                            <div className="testimonial">

                                                <div className="avatar mx-auto">
                                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                                                        className="rounded-circle img-fluid" />
                                                </div>

                                                <h4 className="font-weight-bold mt-4">Elisa Janson</h4>
                                                <h6 className="blue-text font-weight-bold my-3">Marketer</h6>
                                                <p className="font-weight-normal"><i className="fas fa-quote-left pr-2"></i>At vero eos et accusamus et
                      iusto odio dignissimos ducimus qui blanditiis praesentium.</p>

                                                <div className="grey-text">
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star-half-alt"> </i>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-md-4 clearfix d-none d-md-block">
                                            <div className="testimonial">

                                                <div className="avatar mx-auto">
                                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                                                        className="rounded-circle img-fluid" />
                                                </div>

                                                <h4 className="font-weight-bold mt-4">Rob Jacobs</h4>
                                                <h6 className="blue-text font-weight-bold my-3">Front-end developer</h6>
                                                <p className="font-weight-normal"><i className="fas fa-quote-left pr-2"></i>Ut enim ad minima veniam, quis
                      nostrum exercitationem ullam corporis laboriosam.</p>

                                                <div className="grey-text">
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="fas fa-star"> </i>
                                                    <i className="far fa-star"> </i>
                                                </div>
                                            </div>
                                        </div>


                                    </div>


                                </div>


                            </div>


                        </div>

                    </section>


                </div>


            </main>


            <Footer />

        </>
    )
}
