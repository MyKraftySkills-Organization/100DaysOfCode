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



                        <div className="col-sm-8 offset-sm-2 col-12">
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



                        <div className="col-sm-8 offset-sm-2 col-12 mb-3">
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

                        <div className="col-sm-2 col-12">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg" className="avatar rounded-circle z-depth-1-half" alt="sample image" />
                        </div>


                        <div className="col-sm-8 offset-sm-2 col-12">
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
        </>
    )
}
