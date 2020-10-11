import React from 'react'
import Navbar from '../components/Navbar'

export default function Header() {
    return (
          
<header>
    
    <Navbar/>
    <section  className="view intro-2 rgba-gradient pt-5">
      <div  className="red h-100">
        <div  className="container d-flex justify-content-center align-items-center">
          <div  className="row flex-center pt-5 mt-3">
            <div  className="col-md-12 col-lg-6 text-center text-md-left margins">
              <div  className="white-text">
                <h1  className="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s">Make purchases with our
                  app </h1>
                <hr  className="hr-light wow fadeInLeft" data-wow-delay="0.3s"/>
                <h6  className="wow fadeInLeft" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Rem repellendus quasi fuga nesciunt
                  dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                  iste.
                </h6>
                <br/>
                <a  className="btn btn-white btn-rounded blue-text font-weight-bold ml-lg-0 wow fadeInLeft"
                  data-wow-delay="0.3s">Download</a>
                <a  className="btn btn-outline-white btn-rounded font-weight-bold wow fadeInLeft" data-wow-delay="0.3s">Learn
                  more
                </a>
              </div>
            </div>

            <div className="col-md-12 col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
              <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" alt=""  className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>
  
    )
}
