import React from 'react';
import {Link} from 'react-router-dom';
function Footer(){
    return(
    <section className="section footer bg-dark text-white">
        <div class="footer-bg">
                <div class="footer-container">
                    <div class="row ">   
                    <div class="col-md-4">
                        <h4 class="footer-heading">Quick Links</h4>
                        <div class="footer-underline"></div>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About Us</Link></div>
                        <div><Link to="/contact">Contact Us</Link></div>
                    </div>

                    <div class="col-md-4">
                        <h4 class="footer-heading">Reach Us</h4>
                        <div class="footer-underline"></div>
                            <div class="">
                                        <a href="" class="text-white">
                                    <i class="fa fa-map-marker"></i> Facebook
                                    </a>
                            </div>
                            <div class="">
                                <a href="" class="text-white">
                                    <i class="fa fa-phone"></i> You Tube
                                </a>
                            </div>
                            <div class="">
                                <a href="" class="text-white">
                                    <i class="fa fa-envelope"></i> Instagram
                                </a>
                            </div>
                        </div>

                        <div class="col-md-4">
                        <h4 class="footer-heading">Contact Us</h4>
                        <div class="footer-underline"></div>
                            <div class=""> 
                                 Address:Jaffna   
                            </div>
                            <div class="">
                               Email:kasthubeautycare@gmail.com
                            </div>
                            <div class="">
                                Phone No:0776574830
                            </div>
                        </div>

                        </div>
                 </div>
            </div>
    </section> 
            
        
            
    );
}
export default Footer;