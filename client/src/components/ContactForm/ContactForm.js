import React, { Component } from 'react'
import './ContactForm.css'

function ContactForm (){
    return (
<section className="contact" >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="">
                <div className="row text-center justify-content-center">
                  <div className="col-12 col-md-9 col-lg-7">
                    <h1>Contact Us</h1>
                    <p className="text-h3">We are excited to meet you!</p>
                    <p className="text-h3">If you have any questions or comments please send us an email and we will contact you as soon as possible</p>

                  </div>
                </div>
                <div className="row justify-content-center pt-4">
                  <div className="col-12 col-md-8">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-12 col-md-8 col-lg-7">
              <p className="text-h2">generationarte@gmail.com</p>
              <p className="text-h3">FOLLOW US</p>
              <p className="text-h2 mt-4">
                <a className="mr-3" href="https://www.facebook.com/Generation-Arte-104416728068928/?modal=admin_todo_tour">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a className="mr-3" href="https://twitter.com/?lang=en">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a className="mr-3" href="https://www.instagram.com/?hl=en">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a className="mr-3" href="https://www.pinterest.com">
                  <i className="fab fa-pinterest fa-lg"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      
    )
}
export default ContactForm