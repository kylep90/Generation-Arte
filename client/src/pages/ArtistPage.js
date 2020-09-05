import React from 'react'
import './ArtistPage.css'
import {Link} from 'react-router-dom'
import ArtistWork from '../components/ArtistWork'

function ArtistPage(props){
    return(
        <>
        <section className="pt-5 pb-5">
        <div className="">
          <div className="container  ">
            <div className="row   justify-content-center header-h100  d-flex  ">
              <div className="col-md-4  shadow align-self-center card p-3 bg-light text-dark pt-4 pb-4">
                <img className="rounded-circle shadow align-self-center img-fluid" style={{maxWidth:"150px"}} src="https://bootstrap-themes.github.io/marketing/assets/img/avatar-mdo.png" alt="pc"/>
                <blockquote className="pull-quote text-center  ">
                  <cite className="text-uppercase  ">{props.user.firstName}
                    <br/>
                    <small>{props.user.firstName} {props.user.lastName}</small>
                  </cite>
                  <p className="text-center m-3">
                    “They need to stop sleeping on me and get some understanding about this here game I spit!”
                  </p>
                </blockquote>
                <hr/>
                <div className="btn-container  mt-1 text-center">
                  <div className="mb-1 mt-2 mr-3 justify-content-around pt-0 d-flex">
                    <Link href="/" role="button" className="  p-2 m-2  ">
                      <i className="fab fa-twitter fa-lg   " aria-hidden="true"></i>
                    </Link>
                    <Link href="/" role="button" className="  p-2 m-2  ">
                      <i className="fab fa-facebook fa-lg  " aria-hidden="true"></i>
                    </Link>
                    <Link href="/" role="button" className="  p-2 m-2  ">
                      <i className="fab fa-linkedin fa-lg  " aria-hidden="true"></i>
                    </Link>
                    <Link href="/" role="button" className="  p-2 m-2  ">
                      <i className="fab fa-google-plus fa-lg  " aria-hidden="true"></i>
                    </Link>
                    <img className="mt-3 img-fluid" alt="100%x280" style={{height: "280px", width: "100%"}} src="https://via.placeholder.com/300x250/5fa9f8/ffffff" data-holder-rendered="true"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <img className="rounded-circle shadow align-self-center img-fluid" style={{maxWidth:"150px"}} src="https://bootstrap-themes.github.io/marketing/assets/img/avatar-mdo.png" alt="pc"/>
      <img className="mt-3 img-fluid" alt="100%x280" style={{height: "280px", width: "100%"}} src="https://via.placeholder.com/300x250/5fa9f8/ffffff" data-holder-rendered="true"/> */}
      <section className="">
        {/* <style>
          .album {
            min-height: 50rem;
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          .album .card {
            float: left;
            width: 33.333%;
            padding: .75rem;
            margin-bottom: 2rem;
            border: 0;
          }
        </style> */}
        <div className="album">
            
        
          <div className="container">
          
            <div className="row">
           
           <ArtistWork />
           <ArtistWork />
           <ArtistWork />
              {/* <div className="card">
                <img className="mt-3 img-fluid" alt="100%x280" style={{height: "280px", width: "100%"}} src="https://via.placeholder.com/300x250/5fa9f8/ffffff" data-holder-rendered="true"/>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card">
                <img className="mt-3 img-fluid" alt="100%x280" src="https://via.placeholder.com/300x250/5fa9f8/ffffff" data-holder-rendered="true" style={{height: "280px", width: "100%", display: "block"}}/>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card">
              <img className=" shadow align-self-center img-fluid" style={{maxWidth:"150px"}} src="https://bootstrap-themes.github.io/marketing/assets/img/avatar-mdo.png" alt="pc"/>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card">
                <img className="mt-3 img-fluid" alt="100%x280" src="https://via.placeholder.com/300x250/5fa9f8/ffffff" data-holder-rendered="true" style={{height: "280px", width: "100%", display: "block"}}/>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card">
                <img className="mt-3 img-fluid" alt="100%x280" src="https://via.placeholder.com/300x250/5fa9f8/ffffff" data-holder-rendered="true" style={{height: "280px", width: "100%", display: "block"}}/>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card">
                <img className="mt-3 img-fluid" alt="100%x280" src="https://via.placeholder.com/300x250/5fa9f8/ffffff" data-holder-rendered="true" style={{height: "280px", width: "100%", display: "block"}}/>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card">
                <img className="mt-3 img-fluid" alt="100%x280" src="https://via.placeholder.com/300x250/5fa9f8/ffffff" data-holder-rendered="true" style={{height: "280px", width: "100%", display: "block"}}/>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card">
                <img className="mt-3 img-fluid" alt="100%x280" src="https://via.placeholder.com/300x250/5fa9f8/ffffff" data-holder-rendered="true" style={{height: "280px", width: "100%", display: "block"}}/>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card">
                <img className="mt-3 img-fluid" alt="100%x280" src="https://via.placeholder.com/300x250/5fa9f8/ffffff" data-holder-rendered="true" style={{height: "280px", width: "100%", display: "block"}}/>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      </>

    )
}
export default ArtistPage