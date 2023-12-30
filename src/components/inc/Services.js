import React from 'react';
import {Link} from 'react-router-dom';
import Service1 from '../images/slider5.jpeg';
function Services(){
    return(
        <section className="section border-top">
        <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
            <h3 className="main-heading">Our Services</h3>
            <div className="underline mx-auto"></div>
        </div>

        <div className="col-md-4 ">
            <div className="card shadow">
                <div className="card-body">
                    <img src={Service1} className="w-100 border-bottom" alt="img" height="400px" />
                <div className="card-body">
                    <h6>Services 1</h6>
                    <div className="underline"></div>
                        <p>
                        It is a long established fact 
                        that a reader will be distracted by the readable content 
                        </p>
                    <Link to="/services" className="btn btn-link">read more</Link>
                </div>
                </div>
            </div>       
        </div>

        <div className="col-md-4 ">
            <div className="card shadow">
                <div className="card-body">
                    <img src={Service1} className="w-100 border-bottom" alt="img"  height="400px"/>
                <div className="card-body">
                    <h6>Services 1</h6>
                    <div className="underline"></div>
                        <p>
                        It is a long established fact 
                        that a reader will be distracted by the readable content 
                        </p>
                    <Link to="/services" className="btn btn-link">read more</Link>
                </div>
                </div>
            </div>       
        </div>

        <div className="col-md-4 ">
            <div className="card shadow">
                <div className="card-body">
                    <img src={Service1} className="w-100 border-bottom" alt="img"  height="400px" />
                <div className="card-body">
                    <h6>Services 1</h6>
                    <div className="underline"></div>
                        <p>
                        It is a long established fact 
                        that a reader will be distracted by the readable content 
                        </p>
                    <Link to="/services" className="btn btn-link">read more</Link>
                </div>
                </div>
            </div>       
        </div>

        
       
        
        </div>
        </div>
    </section>
    );

}
export default Services;