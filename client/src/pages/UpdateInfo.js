
import React from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { AuthenticationContext } from '../App.js'
import API from '../utils/API.js';
 
function UpdateInfo(){
  const history = useHistory(); 
  const { authenticationState, authenticationDispatch } = useContext( AuthenticationContext );
  const [ initialized, setInitialized ] = useState( false );
  const [ id, setId ] = useState( '' );
  const [ error, setError ] = useState( '' );
  const [ message, setMessage ] = useState( '' );
  const state = {};
  const setters = {};
    [ state.firstName, setters.firstName ] = useState( '' );
    [ state.lastName, setters.lastName ]  = useState( '' );
    [ state.email, setters.email ] = useState( '' );
    [ state.alias, setters.alias ] = useState( '' );
    [ state.industry, setters.industry ] = useState( '' );
    [ state.picture, setters.picture ] = useState( '' );
    [ state.bio, setters.bio ] = useState( '' );
    [ state.facebookUrl, setters.facebookUrl ] = useState( '' );
    [ state.instagramUrl, setters.instagramUrl ] = useState( '' );
    [ state.youtubeUrl, setters.youtubeUrl ] = useState( '' );
    [ state.twitterUrl, setters.twitterUrl ] = useState( '' );
    function handleInputChange( pEvent ){
        const fieldName = pEvent.target.name;
        const fieldValue = pEvent.target.value;
        setters [ fieldName ]( fieldValue );
    }
    // if ( !authenticationState.isAuthenticated ){
    //   return < Redirect to = "/" />
    // } else {
      useEffect( () => {
        if ( authenticationState.user ){
            setId( authenticationState.user._id );
            Object.keys( state ).forEach( function( pKey ){
              if ( pKey in authenticationState.user ){
                setters[ pKey ]( authenticationState.user[ pKey ] );
              } 
            });
          }
        }, [ authenticationState.user ] );

  // const [userLoggedIn, setUserLoggedIn] = useState()

  // useEffect(() => {
  //   API.getUser(userId).then(data => {
  //     console.log(data.data)
  //     setUserLoggedIn(data.data)
  //   })
  // }, [])

  function addArtwork(e) {

    

    console.log("Button clicked");
  }

    return(
        <section className="pt-5 pb-5">
        <div className="container">
          <div className="py-5 text-center row justify-content-center">
            <div className="col-md-10">
              <img className="ml-md-3 mr-3 mr-md-0 order-1 img-fluid rounded  mb-4" style={{maxHeight: "80px", maxWidth:"200px"}} src="https://artfair.co.nz/wp-content/uploads/2016/02/MY-ART-Logo.jpg" alt="generic"/>
              <h2>Update your profile</h2>
              <p className="lead">Complete this form to add/edit content to your profile</p>
            </div>
          </div>
          <div className="row justify-content-center">
           
            <div className="col-md-9 order-md-1">
              <h4 className="mb-3">Main Info</h4>
              {(() => {
                if ( error ) {
                  return(
                    <div className="alert alert-danger" role="alert">
                      {error} 
                    </div>  
                  )
                }
                if ( message ) {
                  return(
                    <div className="alert alert-success" role="alert">
                      {message}
                    </div>  
                  )
                }
              })()}
              <form className="needs-validation" novalidate="" onSubmit={ ( pEvent ) => {
           pEvent.preventDefault();
           API.updateUser( id, state )
               .then( ( pData ) => {
                   if( pData ){
                       setMessage( 'Details Updated' );
                       API.getCurrentUser()
                       .then( ( pData ) => {
                         if ( pData ){
                          authenticationDispatch( {
                            type: 'login',
                            force: true,
                            user: pData.data,
                            lastCheck: new Date()
                          } );
                         }
                       });
                   } else {
                       setError( 'An error ocurred, fix the errors in the form' );
                   }
               } )
               .catch( ( pError ) => {
                   setError( 'Unknown error, try again later :D ' );
               } );
       } }>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" required="" name="firstName" value={ state.firstName } onChange={ handleInputChange }/>
                    {/* <div className="invalid-feedback">
                      Valid first name is required.
                    </div> */}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" name="lastName" value={ state.lastName } onChange={ handleInputChange }/>
                    {/* <div className="invalid-feedback">
                      Valid last name is required.
                    </div>  */}
                  </div>
                </div>
                
                <div className="mb-3">
                  <label for="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" name="email" value={ state.email } onChange={ handleInputChange } />
                  <div className="invalid-feedback">
                    Please enter a valid email address.
                  </div>
                </div>

                <div className="mb-3">
                  <label for="username">Alias</label>
                  <div className="input-group">
                    <input type="text" className="form-control" id="username" placeholder="Username" required="" name="alias" value={ state.alias } onChange={ handleInputChange }/>
                    {/* <div className="invalid-feedback" style="width: 100%;">
                      Your username is required.
                    </div>  */}
                  </div>
                </div>
                <div className="col-md-5 mb-3">
                  <label for="country">Industry</label>
                  <select className="custom-select d-block w-100" id="country" required="" name="industry" value={ state.industry } onChange={ handleInputChange } >
                    <option value="">Choose...</option>
                    <option>Visual</option>
                    <option>Dance</option>
                    <option>Music</option>
                    <option>Comedy</option>
                    <option>Tech</option>
                    <option>Drama</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="mb-3">
                  <label for="address2">Profile Picture<span className="text-muted">(Optional)</span></label>
                  <input type="text" className="form-control" id="address2" placeholder="" name="picture" value={ state.picture } onChange={ handleInputChange }/>
                </div>
                <div className="mb-3">
                <div className="textarea-container mt-4">
                  <textarea className="form-control" rows="4" cols="20" placeholder="Tell your fans a bit about you..." style={{marginTop: "0px", marginBottom: "0px", height: "80px"}} name="bio" value={ state.bio } onChange={ handleInputChange } ></textarea>
                </div>
              </div>
      
                <hr className="mb-4"/>

                
           
        {/* Social Media */}
                  
                    <h4 className="mb-3">Social Media</h4>

                      <div className="mb-3">
                        <i className="fab fa-facebook fa-lg text-grey" aria-hidden="true"></i>
                        <label for="address2">  Facebook<span className="text-muted">(Optional)</span></label>
                        <input type="text" className="form-control" id="address2" placeholder="" name="facebookUrl" value={ state.facebookUrl } onChange={ handleInputChange } />
                      </div>

                      <div className="mb-3">
                        <i className="fab fa-instagram fa-lg text-grey" aria-hidden="true"></i>
                        <label for="address2">  Instagram<span className="text-muted">(Optional)</span></label>
                        <input type="text" className="form-control" id="address2" placeholder="" name="instagramUrl" value={ state.instagramUrl } onChange={ handleInputChange } />
                      </div>

                      <div className="mb-3">
                        <i className="fab fa-youtube fa-lg text-grey" aria-hidden="true"></i>
                        <label for="address2">  YouTube<span className="text-muted">(Optional)</span></label>
                        <input type="text" className="form-control" id="address2" placeholder="" name="youtubeUrl" value={ state.youtubeUrl } onChange={ handleInputChange } />
                      </div>

                      <div className="mb-3">
                        <i className="fab fa-twitter fa-lg text-grey" aria-hidden="true"></i>
                        <label for="address2">  Twitter<span className="text-muted">(Optional)</span></label>
                        <input type="text" className="form-control" id="address2" placeholder="" name="twitterUrl" value={ state.twitterUrl } onChange={ handleInputChange } />
                      </div>
                      <button className="btn btn-lg btn-primary btn-block" type="Update Info">Update Info</button>
                      </form>
                      <hr className="mb-4"/>

                      {/* Adding Artwork */}
                      </div>
                          
                    </div>
    
                    
        </div>
      </section>
    )
  //}

}

export default UpdateInfo