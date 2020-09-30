import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Post() {
    return (
        <div>
            <Header/>
            <section>
                <div className="container-fluid">
                    <hr className="my-5" />
                    <div className="container">


                        <div className="row mb-2 mt-1">

                            <div className="col-md-12">


                                <div className="view">
                                    <img src="https://mdbootstrap.com/img/Photos/Others/city10.jpg" className="img-fluid z-depth-1 wow fadeIn" data-wow-delay="0.2s" />
                                </div>

                            </div>

                        </div>



                        <div className="row mt-4 pt-3">


                            <div className="col-lg-9 col-12 mt-1">


                                <section className="extra-margins pb-5 text-lg-left">


                                    <div className="row mb-4">


                                        <div className="col-md-12">


                                            <h4 className="font-weight-bold wow fadeIn" data-wow-delay="0.2s">
                                                <strong>Lorem ipsum dolor sit amet</strong>
                                            </h4>
                                            <hr />

                                            <p className="dark-grey-text mb-3 mt-4 mx-4 wow fadeIn" data-wow-delay="0.2s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                        architecto beatae vitae dicta sunt explicabo.</p>


                                            <div className="row mx-4 mt-3 wow fadeIn" data-wow-delay="0.2s">

                                                <p className="dark-grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                            mollit anim id est laborum.</p>

                                                <h5 className="mt-3 mb-4 font-weight-bold">
                                                    <strong>Lorem ipsum dolor sit amet</strong>
                                                </h5>

                                                <p className="dark-grey-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                                                quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                                            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>

                                                <blockquote className="blockquote mx-md-5 mx-1">
                                                    <p className="mb-0">"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."</p>
                                                </blockquote>

                                                <p className="dark-grey-text"> Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                                nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
                                                qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
                                            dolorem eum fugiat quo voluptas nulla pariatur?</p>

                                            </div>



                                            <div className="row mx-4 wow fadeIn" data-wow-delay="0.2s">


                                                <div className="col-md-12 my-4">

                                                    <img src="https://mdbootstrap.com/img/Photos/Others/city9.jpg" className="img-fluid z-depth-1" alt="sample image" />

                                                </div>


                                                <p className="dark-grey-text">Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                                                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                                vitae dicta sunt explicabo. Ut enim ad minima veniam, quis nostrum exercitationem
                                                ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.Perspiciatis
                                            unde omnis iste natus error sit voluptatem accusantium doloremque.</p>

                                                <p className="dark-grey-text">Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                                beatae vitae dicta sunt explicabo. Ut enim ad minima veniam, quis nostrum exercitationem
                                            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>

                                            </div>


                                            <hr />


                                            <div className="row mb-4 wow fadeIn" data-wow-delay="0.2s">


                                                <div className="col-md-12 text-center">

                                                    <h4 className="text-center font-weight-bold dark-grey-text mt-3 mb-3">
                                                        <strong>Share this post: </strong>
                                                    </h4>

                                                    <button type="button" className="btn btn-fb btn-sm">
                                                        <i className="fab fa-facebook-f left"></i> Facebook</button>

                                                    <button type="button" className="btn btn-tw btn-sm">
                                                        <i className="fab fa-twitter left"></i> Twitter</button>

                                                    <button type="button" className="btn btn-gplus btn-sm">
                                                        <i className="fab fa-google-plus-g left"></i> Google +</button>

                                                    <hr className="mt-5" />
                                                </div>


                                            </div>



                                            <section>


                                                <div className="comments-list text-center text-md-left">
                                                    <div className="text-center my-5">
                                                        <h3 className="font-weight-bold">Comments
                                                    <span className="badge indigo">3</span>
                                                        </h3>
                                                    </div>

                                                    <div className="row mb-5">

                                                        <div className="col-sm-2 col-12 mb-3">
                                                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img (8).jpg" className="avatar rounded-circle z-depth-1-half" alt="sample image" />
                                                        </div>



                                                        <div className="col-sm-10 col-12">
                                                            <a>
                                                                <h5 className="user-name font-weight-bold">John Doe</h5>
                                                            </a>
                                                            <div className="card-data">
                                                                <ul className="list-unstyled">
                                                                    <li className="comment-date font-small">
                                                                        <i className="far fa-clock-o"></i> 05/10/2015</li>
                                                                </ul>
                                                            </div>
                                                            <p className="dark-grey-text article">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                                        </div>

                                                    </div>



                                                    <div className="row mb-5">

                                                        <div className="col-sm-2 col-12">
                                                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg" className="avatar rounded-circle z-depth-1-half" alt="sample image" />
                                                        </div>



                                                        <div className="col-sm-10 col-12 mb-3">
                                                            <a>
                                                                <h5 className="user-name font-weight-bold">Lily Brown</h5>
                                                            </a>
                                                            <div className="card-data">
                                                                <ul className="list-unstyled">
                                                                    <li className="comment-date font-small">
                                                                        <i className="far fa-clock-o"></i> 05/10/2015</li>
                                                                </ul>
                                                            </div>
                                                            <p className="dark-grey-text article">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                                        </div>

                                                    </div>



                                                    <div className="row mb-5">

                                                        <div className="col-sm-2 col-12 mb-3">
                                                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img (28).jpg" className="avatar rounded-circle z-depth-1-half" alt="sample image" />
                                                        </div>


                                                        <div className="col-sm-10 col-12">
                                                            <a>
                                                                <h5 className="user-name font-weight-bold">Martha Smith</h5>
                                                            </a>
                                                            <div className="card-data">
                                                                <ul className="list-unstyled">
                                                                    <li className="comment-date font-small">
                                                                        <i className="far fa-clock-o"></i> 05/10/2015</li>
                                                                </ul>
                                                            </div>
                                                            <p className="dark-grey-text article">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                                        </div>

                                                    </div>

                                                </div>


                                            </section>

                                            <hr />

                                            <section className="mb-4 wow fadeIn" data-wow-delay="0.2s">
                                                <h3 className="font-weight-bold text-center my-5">Leave a reply</h3>


                                                <div className="row">


                                                    <div className="col-lg-4 col-md-12 mb-4">

                                                        <div className="input-group md-form form-sm form-3 pl-0">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text white black-text" id="basic-addon8">1</span>
                                                            </div>
                                                            <input type="text" className="form-control mt-0 black-border rgba-white-strong" placeholder="Name" aria-describedby="basic-addon9" />
                                                        </div>

                                                    </div>



                                                    <div className="col-lg-4 col-md-6 mb-4">

                                                        <div className="input-group md-form form-sm form-3 pl-0">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text white black-text" id="basic-addon9">2</span>
                                                            </div>
                                                            <input type="text" className="form-control mt-0 black-border rgba-white-strong" placeholder="Email" aria-describedby="basic-addon9" />
                                                        </div>

                                                    </div>



                                                    <div className="col-lg-4 col-md-6 mb-4">

                                                        <div className="input-group md-form form-sm form-3 pl-0">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text white black-text" id="basic-addon10">3</span>
                                                            </div>
                                                            <input type="text" className="form-control mt-0 black-border rgba-white-strong" placeholder="Website" aria-describedby="basic-addon9" />
                                                        </div>

                                                    </div>


                                                </div>



                                                <div className="row">

                                                    <div className="col-12 mt-1">
                                                        <div className="form-group basic-textarea rounded-corners shadow-textarea">

                                                            <textarea className="form-control" id="exampleFormControlTextarea6" rows="5" placeholder="Write something here..."></textarea>
                                                        </div>

                                                        <div className="text-right">
                                                            <button className="btn btn-grey btn-sm">Submit</button>
                                                        </div>

                                                    </div>

                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                <Sidebar/>
        </div>
    )
}
