import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm'
import platos from '../assets/images/platos.jpg'
import calaveras from '../assets/images/calaveras.jpg'
import platos2 from '../assets/images/platos2.webp'
function ContactUs (){  
    return(
        
         <section className="pt-4 pb-3 mt-0 d-flex bg-dark"  style={{backgroundImage: "url(" + calaveras  + ")", minHeight: "100vh", backgroundSize: "cover"}}>
         <div className="container-fluid p-md-4">
           <div className="row    d-flex  h-100 ">
             <div className="position-relative  w-100 h-25  d-flex">
               <div className="container-fluid align-self-start   mt-2 mb-2">
                 <div className="row">
                   <div className="col-md-3 col-5">
                   </div>
                   <div className="col-md-9 col-7 text-right">
                     <div className="row align-items-center">
                       <div className="col-12 align-self-center">
                         <hr className="border border-border-light mt-3"/>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>         
            <div className="position-relative  w-100 h-50  d-flex">
              <div className="container-fluid align-self-center     mb-2">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-6">
                      <ContactForm/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
      </section>  

    
            
)
}
export default ContactUs