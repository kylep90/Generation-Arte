import React from 'react'
import platos from "../assets/images/platos.jpg"

function AboutUs (){
return(
<section class="pt-5 pb-5">
        <div class="container">
          <div class="row align-items-center justify-content-between ">
            <div class="col-12 col-md-4 ">
              {/* <h1 class="mb-3 mt-5">Who are we?</h1>
              <p class="lead  ">We are a collective community of artists who want to create a platform for others to connect, share and promote their work .</p> */}
              <h1 class="mb-3 mt-5">Mission Statement</h1>
              <p class="lead  ">We believe there is a necessity in Mexico for a space which brings together artists, musiciencs, dancers, photographers, stand up comedians, directors and more and allows them to have a platform to showcase their talents and projects. 
                                <br /><br/>
                                We want to generate support for local and underground artists and provide a space for people to find new and exciting talent in their own city. 
                                <br/><br/>
                                In connection to our webpage we aim to hold a Generation Arts Festival right here in the city.
</p>
              <div class="  d-flex mt-3 mb-1">
                {/* <a class="btn btn-primary btn-raised    mt-md-3 " href="#" role="button">Download Now</a>
                <a class="btn btn-outline-secondary  mt-md-3 ml-md-3" href="#" role="button">Learn more now</a> */}
              </div>
            </div>
            <div class="col-12 col-md-7   mt-4 mt-md-0">
              <div class="embed-responsive embed-responsive-16by9 shadow-lg">
                <img class="embed-responsive-item" src={platos} />
              </div>
            </div>
          </div>
        </div>
      </section>

)

}
export default AboutUs