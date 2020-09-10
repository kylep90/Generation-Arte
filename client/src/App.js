import React, { useEffect, useState, useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from 'react-router-dom';
import { userReducer } from 'react';

//Data
import API from './utils/API'

// Components
import GNavbar from "./components/GNavbar/index.jsx";
import GFooter from "./components/GFooter/index.jsx";
import ContactForm from "./components/ContactForm/ContactForm";


//Pages
import Home from "./pages/Home"
import WhatsOn from "./pages/WhatsOn"
import ContactUs from "./pages/ContactUs"
import ArtistDirectory from "./pages/ArtistDirectory"
import AboutUs from "./pages/AboutUs"
import UpdateInfo from "./pages/UpdateInfo";
import LogInForm from "./pages/LogInForm"
import ArtistPage from "./pages/ArtistPage";
import MyProfile from "./pages/MyProfile";

export const AuthenticationContext = React.createContext();
const initialAuthenticationState = {
  isAuthenticated: false,
  user: null,
  lastCheck: null
}; 
const authenticationReducer = ( state,action ) => {
  switch ( action.type ){
    case 'login':
      if ( state.isAuthenticated ){
        return state
      }
      let lAuthentication = {
          isAuthenticated: true,
          user: action.user,
          lastCheck: action.lastCheck
      };
      localStorage.setItem(
        'authentication',
        JSON.stringify( lAuthentication )
      );
      console.log( 'INFO: Authenticated' );
      return lAuthentication;
    case 'logout':
      localStorage.removeItem( 'authentication' );
      console.log( 'INFO: Logged out' );
      return initialAuthenticationState;
    default:
      return state;   
  }
};
function checkAuthenticationStatus( state, dispatch ){
  console.log( 'INFO: Checking authentication...' );
  API.getCurrentUser()
    .then( ( pData ) => {
      if( pData.status >= 200 && pData .status < 300){
        dispatch( {
          type: 'login',
          user: pData.data,
          lastCheck: new Date()
        } );
      } else {
        dispatch( {
          type:'logout'
        } );
      }
    })
    .catch( ( pError ) => {
      dispatch( {
        type: 'logout'
      } ); 
    } );
  }
// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  const[ authenticationState, authenticationDispatch ] = useReducer( authenticationReducer, initialAuthenticationState );

  useEffect( () => {
    let lAuthentication = localStorage.getItem( 'authentication' );
    if ( lAuthentication !== null ){
      lAuthentication = JSON.parse( lAuthentication );
      lAuthentication.lastCheck = new Date( lAuthentication.lastCheck );
      if ( new Date().getTime() - lAuthentication.lastCheck.getTime() > 15 * 60 * 1000 ){
        console.log( 'INFO: 15 min since last authentication check' )
         checkAuthenticationStatus( authenticationState, authenticationDispatch );
      } else {
        console.log( 'INFO: Authentication is still valid' );
        authenticationDispatch( { type: 'login', ...lAuthentication } );
      }
    } else {
      checkAuthenticationStatus( authenticationState, authenticationDispatch );
    } 
  } );
  const [users, setUsers] = useState ([])
  const [artworks, setArtworks] = useState([])
  //runs only once when component runs
  useEffect( () => {
    API.getAllFromCollection("users").then(data =>{
      console.log(data)
      console.log(data.data)
      setUsers(data.data)
    })

    API.getAllFromCollection("artworks").then(data =>{
      console.log(data)
      setArtworks(data.data)
    })

  }, [])
  return (
    <AuthenticationContext.Provider
      value={{
        authenticationState,
        authenticationDispatch
      }}
    >  
    <BrowserRouter>
    <div>
      <GNavbar user={users[2]}/>
      <Switch>
        
        <Route exact path={["/","/home"]} component={Home}>
        </Route>
        <Route path="/WhatsOn" component={WhatsOn}></Route>
        <Route path="/LogInForm" component={LogInForm}>
        </Route>
        <Route path="/ArtistDirectory" render={()=> <ArtistDirectory users={users}/>}>
        </Route>
        <Route path="/AboutUs" component={AboutUs}>
        </Route>
        <Route path="/UpdateInfo" component={UpdateInfo}>
        </Route>
        <Route  path="/ArtistPage" component={ArtistPage}>
        </Route>
        <Route  path="/MyProfile" component={MyProfile}>
        </Route>
        <Route  path="/ContactUs" component={ContactUs}>
        </Route>
      </Switch> 
      <GFooter />     
    </div>
    </BrowserRouter>
    </AuthenticationContext.Provider> 
    );
}

export default App;
