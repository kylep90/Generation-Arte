import React from 'react'
// import './navbar.css'
import {Link} from 'react-router-dom';


function Navbar () {
    function dropDown(){


    }
    return(
        
<nav className="navbar navbar-expand-lg navbar-dark border border-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="https://artfair.co.nz/wp-content/uploads/2016/02/MY-ART-Logo.jpg" alt="UI Kit" style={{width: "100px"}}/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ml-auto mr-sm-2 mt-2 mt-lg-0">
              <li className="nav-item active mr-3">
              <a className="nav-link" href="/"><Link className="nav-Link" to="/">Home<span className="sr-only">(current)</span></Link></a>

                {/* <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a> */}
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="/"><Link className="nav-Link" to="/AboutUs">About Us</Link></a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="/">Charities and Support</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="dropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Artist Directory</a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item" href="/">Artists</a>
                  <a className="dropdown-item" href="/"><Link  className="nav-Link" to="/ArtistDirectory">Singers</Link></a>
                  <a className="dropdown-item" href="/">Musicians</a>
                  <a className="dropdown-item" href="/">Artors</a>
                  <a className="dropdown-item" href="/">Comedians</a>
                  <a className="dropdown-item" href="/">Dancers</a>
                  <a className="dropdown-item" href="/">Tech</a>
                </div>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="/">Promos</a>
              </li>
              <li className="nav-item mr-3">

              <a className="nav-link"><Link className="nav-Link" to="/WhatsOn">What's On</Link></a>
                {/* <a className="nav-link" href="/">What's on</a> */}
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="/">Contact Us</a>
              </li>
              <li className="nav-item mr-3">

                <a className="nav-link"><Link className="nav-Link" to="/LogInForm">Log In</Link></a>
              </li>

            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img className="rounded-circle u-box-shadow-sm mr-2" width="35" height="35" src="https://xsradio.mx/wp-content/uploads/2020/04/Logo-Saasil-Sounds-1-scaled.jpg" alt="Htmlstream" /> Saasil Sounds
                  <i className="fa fa-angle-down   "/>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">Profile</a>
                  <a className="dropdown-item" href="/"><Link  className="nav-Link" to="/UpdateInfo">Update Info</Link></a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">Sign Out</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
      }

      export default Navbar