import React from 'react'

export default function CommentForm() {
    return (
        <div>
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
        </div>
    )
}
