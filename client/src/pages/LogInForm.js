import React from 'react'
import './LogInForm.css'
import { useState } from 'react';
import { Redirect, useHistory } from "react-router-dom";
import { AuthenticationContext } from '../App.js';
import API from '../utils/API.js';
function LogInForm (){
  const history = useHistory();
  const [ email,setEmail ] = useState('');
  const [ error, setError ] = useState('');
  const [ password, setPassword ] = useState('');
  const { authenticationState, authenticationDispatch } = React.useContext( AuthenticationContext ); 
    if ( authenticationState.isAuthenticated ){
      return <Redirect to='/'/>
    } else {
    return(   
          <section className="pt-5 pb-5" >
            <div className="container pt-5 pb-5">
              <div className="row   justify-content-center header-h100 align-items-center">
                <div className="col-12 col-md-4 text-center">
                  <form className="form-signin" onSubmit={ ( pEvent ) => {
                    pEvent.preventDefault();
                    API.login( email, password )
                      .catch( ( pError, pData ) => {
                        setError( 'Unknown error, please try again later' );
                      } )
                      .then( ( pData ) => {
                        if ( pData ){
                          authenticationDispatch( {
                            type: 'login',
                            user: pData.data,
                            lastCheck: new Date()
                          } );
                          history.push( '/' );
                        } else {
                            setError( 'Incorrect username or password' );  
                        }
                      } );
                  } }>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    {(() => {
                      if ( error ) {
                        return(
                          <div className="alert alert-danger" role="alert">
                            {error}
                          </div>  
                        )
                      }    
                    })()}
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" value={email} onChange={ ( pEvent ) =>{
                      setEmail( pEvent.target.value );
                    } } >
                    </input>
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" value={password} onChange={ ( pEvent ) => {
                      setPassword( pEvent.target.value );  
                    } }>
                    </input>
                    {/* TODO: Evaluate if we are going to implement this functionality in the future */}
                    {/* <div className="checkbox mt-3 mb-3">
                      <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                      </label>
                    </div> */}
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
                  </form>
                </div>
              </div>
            </div>
            </section>
    )
    }
};
export default LogInForm