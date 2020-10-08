import React from 'react'

function Footer() {
    return (
       
  <footer  className="page-footer text-center white-text text-md-left red pt-0">

  <div style={{backgroundColor: '#5991fb;'}}>
    <div  className="container">
       
      <div  className="row py-4 d-flex align-items-center">

         
        <div  className="col-12 col-md-5 text-left mb-md-0">
          <h6  className="mb-0 white-text text-center text-md-left"><strong>Get connected with us on social
              networks!</strong></h6>
        </div>
         

         
        <div  className="col-12 col-md-7 text-center text-md-right">
           
          <a  className="p-2 m-2 fa-lg fb-ic ml-0"><i  className="fab fa-facebook-f white-text mr-lg-4"> </i></a>
           
          <a  className="p-2 m-2 fa-lg tw-ic"><i  className="fab fa-twitter white-text mr-lg-4"> </i></a>
           
          <a  className="p-2 m-2 fa-lg gplus-ic"><i  className="fab fa-google-plus-g white-text mr-lg-4"> </i></a>
           
          <a  className="p-2 m-2 fa-lg li-ic"><i  className="fab fa-linkedin-in white-text mr-lg-4"> </i></a>
           
          <a  className="p-2 m-2 fa-lg ins-ic"><i  className="fab fa-instagram white-text mr-lg-4"> </i></a>
        </div>
         

      </div>
       
    </div>
  </div>

   
  <div  className="container mt-5 mb-4 text-center text-md-left">
    <div  className="row mt-3">

       
      <div  className="col-md-3 col-lg-4 col-xl-3 mb-4 white-text">
        <h6  className="text-uppercase font-weight-bold"><strong>Company name</strong></h6>
        <hr  className="blue mb-4 mt-0 d-inline-block mx-auto" style={{width: 60 + 'px'}}/>
        <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p>
      </div>
       
      <div  className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 white-text">
        <h6  className="text-uppercase font-weight-bold"><strong>Products</strong></h6>
        <hr  className="blue mb-4 mt-0 d-inline-block mx-auto" style={{width: 60 + 'px'}}/>
        <p><a href="#!"  className="white-text">MDBootstrap</a></p>
        <p><a href="#!"  className="white-text">MDWordPress</a></p>
        <p><a href="#!"  className="white-text">BrandFlow</a></p>
        <p><a href="#!"  className="white-text">Bootstrap Angular</a></p>
      </div>
       

       
      <div  className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 white-text">
        <h6  className="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
        <hr  className="blue mb-4 mt-0 d-inline-block mx-auto" style={{width: 60 + 'px'}}/>
        <p><a href="#!"  className="white-text">Your Account</a></p>
        <p><a href="#!"  className="white-text">Become an Affiliate</a></p>
        <p><a href="#!"  className="white-text">Shipping Rates</a></p>
        <p><a href="#!"  className="white-text">Help</a></p>
      </div>
       

       
      <div  className="col-md-4 col-lg-3 col-xl-3 white-text">
        <h6  className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
        <hr  className="blue mb-4 mt-0 d-inline-block mx-auto" style={{width: 60 + 'px'}}/>
        <p><i  className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
        <p><i  className="fas fa-envelope mr-3"></i> info@example.com</p>
        <p><i  className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
        <p><i  className="fas fa-print mr-3"></i> + 01 234 567 89</p>
      </div>
       

    </div>
  </div>
   

   
  <div  className="footer-copyright py-3 text-center">
    <div  className="container-fluid">
      © 2019 Copyright: <a href="https://mdbootstrap.com/education/bootstrap/" target="_blank"> MDBootstrap.com </a>
    </div>
  </div>
   

</footer>
    )
}

export default Footer
