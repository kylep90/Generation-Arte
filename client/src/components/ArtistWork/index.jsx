import React from 'react'

function ArtistWork (props){
  console.log(props.video)
    return (
<div className="card">

  {props.picture ? 
<img className=" shadow align-self-center img-fluid" style={{maxWidth:"100%"}} src={props.picture} alt="pc"/> : <br></br>}

{props.video ? 
  <iframe width="727" height="409" src={props.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : <br></br>}
  <p className="card-text">{props.name}</p>
  <p className="card-text">{props.des}</p>

</div>
    )
}

export default ArtistWork