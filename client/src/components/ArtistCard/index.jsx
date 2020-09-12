import React from 'react'
import {Link} from 'react-router-dom'

function ArtistCard (props){
return (
  
<div style={{textAlign: "centre", padding: "auto", margin:"auto"}}>

  <div className="card mb-3" style={{maxWidth: "80%", margin:"auto"}}>
  <div className="row no-gutters">
    <div className="col-md-4" style={{maxHeight : "100%"}}>
      <img src={props.pic} className="card-img" style={{maxHeight:"202px", maxWidth:"360px", marginTop:"25px"}}alt="..."/>
      <div className="card-body">
        {/* <div className="row no gutters">
                      {props.facebook ? 
                    <div className=" pt-0 d-md-inline-block d-flex-row text-center text-md-left justyfy-content-md-start justyfy-content-center">
                      <a href={props.facebook} role="button" className=" btn btn-link mr-2">
                        <i className="fab fa-facebook fa-lg text-grey" aria-hidden="true"></i>  {props.name} Official Facebook
                      </a><br></br> </div> : <br></br> }
                      {props.instagram ? 
                    <div className=" pt-0 d-md-inline-block d-flex-row text-center text-md-left justyfy-content-md-start justyfy-content-center">
                      <a href={props.instagram} role="button" className=" btn btn-link mr-2">
                        <i className="fab fa-instagram fa-lg text-grey" aria-hidden="true"></i>  {props.name} Official Instagram
                      </a><br></br> </div> : <br></br> }
                      {props.youtube ? 
                    <div className=" pt-0 d-md-inline-block d-flex-row text-center text-md-left justyfy-content-md-start justyfy-content-center">
                      <a href={props.youtube} role="button" className=" btn btn-link mr-2">
                        <i className="fab fa-youtube fa-lg text-grey" aria-hidden="true"></i>  {props.name} Official Youtube
                      </a><br></br> </div> : <br></br> }
                      {props.twitter ? 
                    <div className=" pt-0 d-md-inline-block d-flex-row text-center text-md-left justyfy-content-md-start justyfy-content-center">
                      <a href={props.twitter} role="button" className=" btn btn-link mr-2">
                        <i className="fab fa-twitter fa-lg text-grey" aria-hidden="true"></i>  {props.name} Official Twitter
                      </a><br></br> </div> : <br></br> }

                     
                    </div> */}
      </div>
    </div>
    <div className="col-md-8">
      
      <div className="card-body">
        <Link role="button" style={{textDecoration:"none"}} className="artistCard"  to={{pathname:"/ArtistPage", state:{id:props.id}}}>
        <h5 className="card-title">Name: {props.name} {props.last}</h5>
        <h5 className="card-text">Alias: {props.alias}</h5>
        <p className="card-text">Industry: {props.industry}</p>
        <p className="card-text">Specific: {props.specific}</p>
        <p className="card-text">Bio: {props.bio}</p>
        </Link>
        <div className="row row-cols-1 row-cols-md-3">
        
        {props.facebook ? 
                    <div className=" pt-0 d-md-inline-block d-flex-row text-center text-md-left justyfy-content-md-start justyfy-content-center">
                      <a href={props.facebook} role="button" className=" btn btn-link mr-2">
                        <i className="fab fa-facebook fa-lg text-grey" aria-hidden="true"></i>  
                      </a><br></br> </div> : <div></div> }
                      {props.instagram ? 
                    <div className=" pt-0 d-md-inline-block d-flex-row text-center text-md-left justyfy-content-md-start justyfy-content-center">
                      <a href={props.instagram} role="button" className=" btn btn-link mr-2">
                        <i className="fab fa-instagram fa-lg text-grey" aria-hidden="true"></i>  
                      </a><br></br> </div> : <div></div> }
                      {props.youtube ? 
                    <div className=" pt-0 d-md-inline-block d-flex-row text-center text-md-left justyfy-content-md-start justyfy-content-center">
                      <a href={props.youtube} role="button" className=" btn btn-link mr-2">
                        <i className="fab fa-youtube fa-lg text-grey" aria-hidden="true"></i>  
                      </a><br></br> </div> : <div></div> }
                      {props.twitter ? 
                    <div className=" pt-0 d-md-inline-block d-flex-row text-center text-md-left justyfy-content-md-start justyfy-content-center">
                      <a href={props.twitter} role="button" className=" btn btn-link mr-2">
                        <i className="fab fa-twitter fa-lg text-grey" aria-hidden="true"></i>  
                      </a><br></br> </div> : <div></div> }
            

  {/* <div className="col mb-4">
    <div className="card h-100">
        <div>
                <iframe title ="video" className="embed-responsive-item" src={props.artwork} allowfullscreen=""></iframe>
              </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  </div> */}

  {/* <div className="col mb-4">
    <div className="card h-100">
    <div>
        <iframe title="video" className="embed-responsive-item" src="https://www.youtube.com/embed/qqrvm2XDvpQ" allowfullscreen=""></iframe>
    </div>

      <div className="card-body">
        <h5 className="card-title">Man like James Corden</h5>
        <p className="card-text">Carpool Karaoke...</p>
      </div>
    </div>
  </div> */}
      </div>
      
    </div>
  </div>
</div>
</div>


</div>
)
}

export default ArtistCard;