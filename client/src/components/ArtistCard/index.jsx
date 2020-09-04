import React from 'react'
import {Link} from 'react-router-dom'

function ArtistCard (props){
return (
  
<div style={{textAlign: "centre", padding: "auto", margin:"auto"}}>
<Link role="button" to="/ArtistPage">
  <div class="card mb-3" style={{maxWidth: "80%", margin:"auto"}}>
  <div class="row no-gutters">
    <div class="col-md-4" style={{maxHeight : "100%"}}>
      <img src={props.pic} class="card-img" alt="..."/>
      <div class="card-body">
                    <div class=" pt-0 d-md-inline-block d-flex-row text-center text-md-left justyfy-content-md-start justyfy-content-center">
                      <a href={props.twitter} role="button" class=" btn btn-link mr-2">
                        <i class="fab fa-twitter fa-lg text-grey" aria-hidden="true"></i>  {props.name} Official Twitter
                      </a><br></br>
                      <a href={props.facebook} role="button" class=" btn btn-link mr-2">
                        <i class="fab fa-facebook fa-lg text-grey" aria-hidden="true"></i>  {props.name} Official Facebook
                      </a><br></br>
                      <a href={props.instagram} role="button" class=" btn btn-link mr-2">
                        <i aria-hidden="true" class="fab fa-instagram fa-lg text-grey"></i>  {props.name} Official Instagram
                      </a>
                    </div>
      </div>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Name: {props.name}</h5>
        <p class="card-text">Type: {props.type}</p>
        <p class="card-text">Bio: {props.bio}</p>
        <div class="row row-cols-1 row-cols-md-3">
            

  <div class="col mb-4">
    <div class="card h-100">
        <div>
                <iframe title ="video" class="embed-responsive-item" src={props.iframe} allowfullscreen=""></iframe>
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
    </div>
  </div>
</div>
</div>
</Link>

</div>
)
}

export default ArtistCard;