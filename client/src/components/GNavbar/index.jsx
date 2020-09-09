import React from 'react'
// import './navbar.css'
import {Link} from 'react-router-dom';
import { AuthenticationContext } from '../../App.js'
import API from '../../utils/API';
import { useHistory } from "react-router-dom";

// src={props.users[0].picture} 
function Navbar (props) {
  const { authenticationState, authenticationDispatch } = React.useContext( AuthenticationContext );
  const picture = props.user?props.user.picture : ""
  const firstName = props.user?props.user.firstName : ""
  const history = useHistory();
return(
       
<nav className="navbar navbar-expand-lg navbar-dark border border-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" href="index.html">
            <img src="https://artfair.co.nz/wp-content/uploads/2016/02/MY-ART-Logo.jpg" alt="UI Kit" style={{width: "100px"}}/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ml-auto mr-sm-2 mt-2 mt-lg-0">
              <li className="nav-item mr-3">
                <Link className="nav-link" to="/Home">Home</Link>
              </li>
              <li className="nav-item mr-3">
                <Link  className="nav-link" to="/ArtistDirectory">Artist Directory</Link>
              </li>
              <li className="nav-item mr-3">
                <Link className="nav-link" to="/AboutUs">About Us</Link>
              </li>

              {/* <li className="nav-item mr-3">
                <a className="nav-link" href="/">Charities and Support</Link>
              </li> */}

              {/* <li className="nav-item mr-3">
                <a className="nav-link" href="/">Promos</Link>
              </li> */}
              <li className="nav-item mr-3">

              <Link className="nav-link" to="/WhatsOn">What's On</Link>
          
              </li>
              <li className="nav-item mr-3">
                <Link className="nav-link" href="/ContactUs">Contact Us</Link>
              </li>
              { (() => {
                if ( !authenticationState.isAuthenticated ){
                  return ( 
                    <li className="nav-item mr-3">
                      <Link className="nav-link" to="/LogInForm">Log In</Link>
                    </li>
                  );
                }
               })() }
            </ul>   
              { (() => {
                if ( authenticationState.isAuthenticated && authenticationState.user ){
                  return(
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <Link className="nav-link" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <img className="rounded-circle u-box-shadow-sm mr-2" width="35" height="35" src={authenticationState.user.picture} alt="Htmlstream" /> {authenticationState.user.firstName}
                          <i className="fa fa-angle-down   "/>
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <Link className="dropdown-item" href="/">Profile</Link>
                          <Link  className="dropdown-item" to="/UpdateInfo">Update Info</Link>
                          <div className="dropdown-divider"></div>
                          <Link className="dropdown-item" onClick={ () => {
                            API.logout().then( () => {
                              authenticationDispatch( {
                                type: 'logout'
                              } );
                              history.push( '/' );
                            } );
                          } }>Sign Out</Link>
                        </div>
                      </li>
                    </ul>
                  );
                }
            })() }
          </div>
        </div>
      </nav>
    )
      }

      export default Navbar