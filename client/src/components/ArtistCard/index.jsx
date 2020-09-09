import React from 'react'
import {Link} from 'react-router-dom'

function ArtistCard (props){
return (
  
<div style={{textAlign: "centre", padding: "auto", margin:"auto"}}>

  <div class="card mb-3" style={{maxWidth: "80%", margin:"auto"}}>
  <div class="row no-gutters">
    <div class="col-md-4" style={{maxHeight : "100%"}}>
      <img src={props.pic} class="card-img" alt="..."/>
      <div class="card-body">
        <div>
                      {props.facebook ? 
                    <div class=" pt-0 d-md-inline-block d-flex-row text-center text-md-left justyfy-content-md-start justyfy-content-center">
                      <a href={props.facebook} role="button" class=" btn btn-link mr-2">
                        <i class="fab fa-facebook fa-lg text-grey" aria-hidden="true"></i>  {props.name} Official Facebook
                      </a><br></br> </div> : <br></br> }
                      {props.instagram ? 
                    <div class=" pt-0 d-md-inline-block d-flex-row text-center text-md-left justyfy-content-md-start justyfy-content-center">
                      <a href={props.instagram} role="button" class=" btn btn-link mr-2">
                        <i class="fab fa-instagram fa-lg text-grey" aria-hidden="true"></i>  {props.name} Official Instagram
                      </a><br></br> </div> : <br></br> }
                      {props.youtube ? 
                    <div class=" pt-0 d-md-inline-block d-flex-row text-center text-md-left justyfy-content-md-start justyfy-content-center">
                      <a href={props.youtube} role="button" class=" btn btn-link mr-2">
                        <i class="fab fa-youtube fa-lg text-grey" aria-hidden="true"></i>  {props.name} Official Youtube
                      </a><br></br> </div> : <br></br> }
                      {props.twitter ? 
                    <div class=" pt-0 d-md-inline-block d-flex-row text-center text-md-left justyfy-content-md-start justyfy-content-center">
                      <a href={props.twitter} role="button" class=" btn btn-link mr-2">
                        <i class="fab fa-twitter fa-lg text-grey" aria-hidden="true"></i>  {props.name} Official Twitter
                      </a><br></br> </div> : <br></br> }

                     
                    </div>
      </div>
    </div>
    <div class="col-md-8">
      
      <div class="card-body">
        <Link role="button" style={{textDecoration:"none"}}className="artistCard"  to="/ArtistPage">
        <h5 class="card-title">Name: {props.name} {props.last}</h5>
        <p className="card-text">Alias: {props.alias}</p>
        <p class="card-text">Industry: {props.industry}</p>
        <p class="card-text">Specific: {props.specific}</p>
        <p class="card-text">Bio: {props.bio}</p>
        <div class="row row-cols-1 row-cols-md-3">
            

  <div class="col mb-4">
    <div class="card h-100">
        <div>
                <iframe title ="video" class="embed-responsive-item" src={props.artwork} allowfullscreen=""></iframe>
              </div>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
      </div>
    </div>
  </div>

  <div class="col mb-4">
    <div class="card h-100">
    <div>
        <iframe title="video" class="embed-responsive-item" src="https://www.youtube.com/embed/qqrvm2XDvpQ" allowfullscreen=""></iframe>
    </div>

      <div class="card-body">
        <h5 class="card-title">Man like James Corden</h5>
        <p class="card-text">Carpool Karaoke...</p>
      </div>
    </div>
  </div>
      </div>
      </Link>
    </div>
  </div>
</div>
</div>


</div>
)
}

export default ArtistCard;