import React from 'react'

function ArtistWork (props){
  // console.log(props.video)
  // console.log(props.video.substring(17, 28))
  // console.log(props.picture)
    return (
      <>
<div className="card" >

<div style={{height:"240px"}}>
  {props.picture ? 
<img style={{maxWidth:"100%", height:"240px"}} src={props.picture} alt="pc"/> : <br></br>}

{props.video ? 
  
  <iframe style={{width:"355px"}} src={"https://www.youtube.com/embed/" + props.video.substring(17,28)} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : <br></br>}

  </div>
  <h3 className="card-text">{props.name}</h3>
  <p className="card-text">{props.des}</p>
</div>
</>
    )
}

export default ArtistWork