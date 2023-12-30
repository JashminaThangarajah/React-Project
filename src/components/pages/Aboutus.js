import React from 'react';
import About from '../images/slider3.jpg';
import Vmc from '../inc/vmc';
import Services from '../inc/Services';

function Aboutus(){
    return(
     <div >
     <section>
     <div class="container">
    <div class="row">
        <div class="col-md-12 py-3 text-center">
        <h1>About Us</h1>
        </div>
        <h3>About Us Here....</h3>
       
        <img src={About} class="rounded mx-auto "  alt="img"/>
        <div class="col-md-12 py-3">
        <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
         Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at 
         Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
           undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
           (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
            very popular during the Renaissance.The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
             comes from a line in section 1.10.32.
        </p>
        </div>
     </div>
    </div>
    </section>   
    {/* mission, vission, values */}
    <Vmc/>

    {/* Services */}
     <Services/>
     </div>
     



    );

}
export default Aboutus;