import React from 'react'

export default function About() {
    return (
        <div>
    <section>
        <div className="container-fluid white">
            <hr className="mb-5 mt-0"/>
            <div className="container">

                <section className="section extra-margins mt-5 py-5 text-center text-lg-left">

                    <div className="row my-xl-5 py-xl-4">

                        <div className="col-sm-12 col-md-5 col-xl-5 mb-4">

                            <div className="view overlay">
                                <img src="https://mdbootstrap.com/img/Photos/Others/model3.jpg" className="img-fluid z-depth-1" alt=""/>
                                <div className="mask rgba-white-slight"></div>
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-6 col-xl-6">

                            <h3 className="dark-grey-text pb-2 font-weight-bold">
                                <strong>About me</strong>
                            </h3>
                            <p className="gold-text mb-4 text-uppercase font-weight-bold">SOME FACTS ABOUT ME</p>
                            <hr/>

                            <p className="dark-grey-text mt-4 text-justify">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                                quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                                consequatur. Quis autem vel eum iure reprehenderit.</p>

                            <p className="dark-grey-text text-justify">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                                incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                            <h5 className="text-right font-weight-bold dark-grey-text mt-5">
                                <em>Anna Doe</em>
                            </h5>
                        </div>
                    </div>
                </section>

            </div>

        </div>

    </section>
        </div>
    )
}
