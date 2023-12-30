import React from 'react';

function Contact(){
    return(
<div>
<div class="container mt-5">
    <section class="dark-grey-text mb-5">

      
      <h2 class="font-weight-bold text-center mb-4">Contact Us</h2>
     
      <p class="text-center w-responsive mx-auto pb-4 bg-light">Do you have any questions ? Simply drop a message ..! Our team will come back within
        a matter of hours to help you.</p>
      <div class="row">
        <div class="col-lg-5 mb-lg-0 pb-lg-3 mb-4">

          <div class="card">
            <div class="card-body">
             
              <div class="form-header blue accent-1">
                <h3 class="mt-2"> Contact Form:</h3>
              </div>
             <div class="card">
                <div class="card-header">
                   
                  <div class="form-group">
                  <label for="name">Your Name</label>
               <input type="text" name="name"  class="form-control" />
                </div>
             
              <div class="form-group">
              <label for="email">Your Email</label>
              <input type="text" name="email"  class="form-control" />
              </div>

              <div class="form-group">
              <label for="phone_no">Phone No</label>
              <input type="text" name="phone_no"  class="form-control" />
              </div>
             
              <div class="form-group">
              <label for="form-text">Send Message</label>
                <textarea  class="form-control md-textarea" name="msg"  rows="8"></textarea>
               
              </div>
       
              <div class="text-center">
                <button type="submit" class="btn btn-success">Send </button>
              </div>

                </div>
             </div>
             
             
             
            </div>
          </div>
         

        </div>

        <div class="col-lg-7">

          <div class="card">
          <div class="card-header">
          <h3>Contact Information</h3>     
         
          <div class="card">
            <div class="card-body">
        
  <iframe src= "https://maps.google.com/maps?width=600&amp;height=350&amp;hl=en&amp;q=M56G+X9P இத்தியடி பிள்ளையார் கோவில் | Ithiyadi Pillayar Kovill, Chavakachcheri&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
  width="600" height="350" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
              
                <p>Address:Jaffna</p>  
                 
              <h4></h4>
              <p>Phone Number:0776584352</p>
          
             <h4></h4>  
              <p>Email:kasthubeautycare@gmail.com</p>

           
          </div>

        </div>
      </div>
      </div>
      </div>
      </div>
    </section>
  


  </div>

    </div>   
    );

}
export default Contact;