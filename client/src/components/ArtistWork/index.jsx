import React from 'react'

function ArtistWork (props){
  console.log(props.video)
  console.log(props.video.substring(17, 28))
    return (
<div className="card">

  {props.picture ? 
<img className=" shadow align-self-center img-fluid" style={{maxWidth:"100%"}} src={props.picture} alt="pc"/> : <br></br>}

{props.video ? 
  
  <iframe style={{maxWidth:"100%"}} src={"https://www.youtube.com/embed/" + props.video.substring(17,28)} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : <br></br>}
  <h3 className="card-text">{props.name}</h3>
  <p className="card-text">{props.des}</p>

</div>
    )
}

export default ArtistWork