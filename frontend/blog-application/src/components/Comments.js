import React from 'react'

export default function Comments() {
    return (
        <>
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

                <div class="row">
                    <div class="col-12 mt-1">
                        <div class="form-group basic-textarea rounded-corners shadow-textarea">

                            <textarea class="form-control" id="exampleFormControlTextarea6" rows="5" placeholder="Write something here..."></textarea>
                        </div>
                        <div class="text-right">
                            <button class="btn btn-grey btn-sm">Submit</button>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
        </>
    )
}
