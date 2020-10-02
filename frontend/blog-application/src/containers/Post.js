import React from 'react'
import {Link} from 'react-router-dom'
import LatestPost from '../components/LatestPost'
import Sidebar from '../components/Sidebar'
import Comments from '../components/Comments'
import CommentForm from '../components/CommentForm'

export default function Post() {
    return (
    <div>
        {/* Header Cover Image */}
        <div class="container-fluid">
            <hr class="my-5"/>
            <div class="container">
                <div class="row mb-2 mt-1">
                    <div class="col-md-12">
                        <div class="view">
                            <img src="https://mdbootstrap.com/img/Photos/Others/city10.jpg" class="img-fluid z-depth-1 wow fadeIn" data-wow-delay="0.2s"/>
                        </div>
                    </div>
                </div>
                 
                <div class="row mt-4 pt-3">
                    <div class="col-lg-9 col-12 mt-1">     
                        <section class="extra-margins pb-5 text-lg-left">
                            <div class="row mb-4">
                                <div class="col-md-12">
                                    <h4 class="font-weight-bold wow fadeIn" data-wow-delay="0.2s">
                                        <strong>Lorem ipsum dolor sit amet</strong>
                                    </h4>
                                    <hr/>
                                    <p class="dark-grey-text mb-3 mt-4 mx-4 wow fadeIn" data-wow-delay="0.2s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                        architecto beatae vitae dicta sunt explicabo.</p>
                                    <div class="row mx-4 mt-3 wow fadeIn" data-wow-delay="0.2s">

                                        <p class="dark-grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                            mollit anim id est laborum.</p>

                                        <h5 class="mt-3 mb-4 font-weight-bold">
                                            <strong>Lorem ipsum dolor sit amet</strong>
                                        </h5>

                                        <p class="dark-grey-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                                            quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                            quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                                            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>

                                        <blockquote class="blockquote mx-md-5 mx-1">
                                            <p class="mb-0">"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."</p>
                                        </blockquote>

                                        <p class="dark-grey-text"> Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                            nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
                                            qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
                                            dolorem eum fugiat quo voluptas nulla pariatur?</p>

                                    </div>
                                     

                                     
                                    <div class="row mx-4 wow fadeIn" data-wow-delay="0.2s">

                                         
                                        <div class="col-md-12 my-4">

                                            <img src="https://mdbootstrap.com/img/Photos/Others/city9.jpg" class="img-fluid z-depth-1" alt="sample image"/>

                                        </div>
                                         

                                        <p class="dark-grey-text">Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                                            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                            vitae dicta sunt explicabo. Ut enim ad minima veniam, quis nostrum exercitationem
                                            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.Perspiciatis
                                            unde omnis iste natus error sit voluptatem accusantium doloremque.</p>

                                        <p class="dark-grey-text">Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                            beatae vitae dicta sunt explicabo. Ut enim ad minima veniam, quis nostrum exercitationem
                                            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>

                                    </div>
                                    <hr/>
                                    <div class="row mb-4 wow fadeIn" data-wow-delay="0.2s">

                                         
                                        <div class="col-md-12 text-center">

                                            <h4 class="text-center font-weight-bold dark-grey-text mt-3 mb-3">
                                                <strong>Share this post: </strong>
                                            </h4>

                                            <button type="button" class="btn btn-fb btn-sm">
                                                <i class="fab fa-facebook-f left"></i> Facebook</button>
                                             
                                            <button type="button" class="btn btn-tw btn-sm">
                                                <i class="fab fa-twitter left"></i> Twitter</button>
                                             
                                            <button type="button" class="btn btn-gplus btn-sm">
                                                <i class="fab fa-google-plus-g left"></i> Google +</button>

                                            <hr class="mt-5"/>
                                        </div>
                                    </div>
                                    <Comments/>
                                    <CommentForm/>
                                   </div>
                            </div>
                        </section>
                        
                    </div>
                     
                    <Sidebar/>
                 </div>
            </div>
        <LatestPost/>
     
     </div>
    </div>
    )
}
