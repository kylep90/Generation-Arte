import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from 'react-router-dom';

// Components
import GNavbar from "./components/GNavbar/index.jsx";
import GFooter from "./components/GFooter/index.jsx";

//Pages
import Home from "./pages/Home"
import WhatsOn from "./pages/WhatsOn"
import ArtistDirectory from "./pages/ArtistDirectory"
import AboutUs from "./pages/AboutUs"
import UpdateInfo from "./pages/UpdateInfo";
import LogInForm from "./pages/LogInForm"
import ArtistPage from "./pages/ArtistPage"





// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <BrowserRouter>
    <div>
      <GNavbar />
      <Switch>
        <Route exact path={["/","/home"]} component={Home}>
        </Route>
        <Route path="/WhatsOn" component={WhatsOn}></Route>
        <Route path="/LogInForm" component={LogInForm}>
        </Route>
        <Route path="/ArtistDirectory" component={ArtistDirectory}>
        </Route>
        <Route path="/AboutUs" component={AboutUs}>
        </Route>
        <Route path="/UpdateInfo" component={UpdateInfo}>
        </Route>
        <Route path="/ArtistPage" component={ArtistPage}>
        </Route>
        
      </Switch> 
      <GFooter />     
    </div>
    </BrowserRouter>
  );
}

export default App;
