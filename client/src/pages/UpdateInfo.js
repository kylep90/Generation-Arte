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
  const state = {};
  const setters = {};
    [ state.firstName, setters.firstName ] = useState( '' );
    [ state.lastName, setters.lastName ]  = useState( '' );
    [ state.email, setters.email ] = useState( '' );
    [ state.alias, setters.alias ] = useState( '' );
    [ state.field, setters.field ] = useState( '' );
    [ state.profilePicture, setters.profilePicture ] = useState( '' );
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
    if ( !authenticationState.isAuthenticated ){
      return < Redirect to = "/" />
    } else {
      useEffect( () => {
        if ( !initialized ){
          // setId( !initialized ){ esto no estaba en el cdg
            setId( authenticationState.user._id );
            Object.keys( state ).forEach( function( pKey ){
              if ( pKey in authenticationState.user ){
                setters[ pKey ]( authenticationState.user[ pKey ] );
              } 
            });
            setInitialized( true );
          }
        } );

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
              <form className="needs-validation" novalidate="">
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
                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
                    {/* <div className="invalid-feedback">
                      Valid last name is required.
                    </div>  */}
                  </div>
                </div>
                
                <div className="mb-3">
                  <label for="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                  <div className="invalid-feedback">
                    Please enter a valid email address.
                  </div>
                </div>

                <div className="mb-3">
                  <label for="username">Alias</label>
                  <div className="input-group">
                    <input type="text" className="form-control" id="username" placeholder="Username" required=""/>
                    {/* <div className="invalid-feedback" style="width: 100%;">
                      Your username is required.
                    </div>  */}
                  </div>
                </div>
                <div className="col-md-5 mb-3">
                  <label for="country">Field</label>
                  <select className="custom-select d-block w-100" id="country" required="">
                    <option value="">Choose...</option>
                    <option>Painter</option>
                    <option>Singer</option>
                    <option>Musician</option>
                    <option>Dancer</option>
                    <option>Comedian</option>
                    <option>Other</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="mb-3">
                  <label for="address2">Profile Picture<span className="text-muted">(Optional)</span></label>
                  <input type="text" className="form-control" id="address2" placeholder=""/>
                </div>
                <div className="mb-3">
                <div className="textarea-container mt-4">
                  <textarea className="form-control" name="name" rows="4" cols="20" placeholder="Tell your fans a bit about you..." style={{marginTop: "0px", marginBottom: "0px", height: "80px"}}></textarea>
                </div>
              </div>
              </form>


                
                <hr className="mb-4"/>

                
           
        {/* Social Media */}
                  
                    <h4 className="mb-3">Social Media</h4>
                    <form className="needs-validation" novalidate="">

                      <div className="mb-3">
                        <i className="fab fa-facebook fa-lg text-grey" aria-hidden="true"></i>
                        <label for="address2">  Facebook<span className="text-muted">(Optional)</span></label>
                        <input type="text" className="form-control" id="address2" placeholder=""/>
                      </div>

                      <div className="mb-3">
                        <i className="fab fa-instagram fa-lg text-grey" aria-hidden="true"></i>
                        <label for="address2">  Instagram<span className="text-muted">(Optional)</span></label>
                        <input type="text" className="form-control" id="address2" placeholder=""/>
                      </div>

                      <div className="mb-3">
                        <i className="fab fa-youtube fa-lg text-grey" aria-hidden="true"></i>
                        <label for="address2">  YouTube<span className="text-muted">(Optional)</span></label>
                        <input type="text" className="form-control" id="address2" placeholder=""/>
                      </div>

                      <div className="mb-3">
                        <i className="fab fa-twitter fa-lg text-grey" aria-hidden="true"></i>
                        <label for="address2">  Twitter<span className="text-muted">(Optional)</span></label>
                        <input type="text" className="form-control" id="address2" placeholder=""/>
                      </div>

                      </form>
                      <hr className="mb-4"/>

                      {/* Adding Artwork */}
                      

                          
                          </div>
                          
                    </div>
    
                    
        </div>
      </section>
    )
  }

}

export default UpdateInfo