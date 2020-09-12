import React, {useEffect, useState} from 'react'
import './ArtistPage.css'
import {Link, useLocation} from 'react-router-dom'
import ArtistWork from '../components/ArtistWork'
import API from "../utils/API"


function ArtistPage(props){
  console.log(props.location.state.id);
  const userId = props.location.state.id;

  const [user, setUser] = useState ([{}])
  const [artwork, setArtwork] = useState ([{}])

  useEffect ( () => {
    API.getUser(userId).then(data => {
      console.log(data.data)
      setUser(data.data)
      console.log(user)
      return
    })

    API.getUserArtwork(userId).then(data => {
      console.log(data.data)
      setArtwork(data.data)
    })
  }, [])

  //Use effect, call to the backend API for the User by using the ID, to

  // {user.firstName} {user.lastName}
    return(
        <>
        <section className="pt-5 pb-5">
        <div className="">
          <div className="container  ">
            <div className="row   justify-content-center header-h100  d-flex  ">
              <div className="col-md-8  shadow align-self-center card p-3 bg-light text-dark pt-4 pb-4">
                <img className="rounded-circle shadow align-self-center img-fluid" style={{maxWidth:"150px"}} src={user.picture} alt="pc"/>
                <blockquote className="pull-quote text-center  ">
                  <cite className="text-uppercase  "> {user.firstName} {user.lastName}
                    <br/>
                    <h3>{user.email}</h3>
    <small></small>
                  </cite>
                  <h3 className="text-center m-3">{user.alias}</h3>
                    <p> {user.bio}
                  </p>
                </blockquote>
                <hr/>
                <div className="btn-container  mt-1 text-center">
                  <div className="mb-1 mt-2 mr-3 justify-content-around pt-0 d-flex"> 
                    {user.twitterUrl ? 
                    <a href={user.twitterUrl} role="button" className="  p-2 m-2  ">
                      <i className="fab fa-twitter fa-lg   " aria-hidden="true"></i>
                    </a>:<div></div>}

                    {user.facebookUrl ?
                    <a href={user.facebookUrl} role="button" className="  p-2 m-2  ">
                      <i className="fab fa-facebook fa-lg  " aria-hidden="true"></i>
                    </a>:<div></div>}

                    {user.instagramUrl ?
                    <a href={user.instagramUrl} role="button" className="  p-2 m-2  ">
                      <i className="fab fa-instagram fa-lg  " aria-hidden="true"></i>
                    </a> :<div></div>}

                    {user.youtubeUrl ?
                    <a href={user.youtubeUrl} role="button" className="  p-2 m-2  ">
                      <i className="fab fa-youtube fa-lg  " aria-hidden="true"></i>
                    </a> : <div></div> }
                    <img className="mt-3 img-fluid" alt="100%x280" style={{height: "280px", width: "100%"}} src="https://via.placeholder.com/300x250/5fa9f8/ffffff" data-holder-rendered="true"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="">

        <div className="album">
            
        
          <div className="container">
          
            <div className="row">
           
           {(artwork ? artwork.map(piece => (
              <ArtistWork name={piece.name}
                          des ={piece.description}
                          type={piece.type}
                          picture={piece.picture}
                          video={piece.video}/>


           )

           ):<br></br>)}
           

              
            </div>
          </div>
        </div>
      </div>
      </>

    )
}
export default ArtistPage