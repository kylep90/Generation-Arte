import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from 'react-router-dom';

//Data
import API from './utils/API'

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

  const [users, setUsers] = useState ([{firstName:""}])

  //runs only once when component runs
  useEffect( () => {
    API.getAllFromCollection("users").then(data =>{
      console.log(data)
      setUsers(data.data)
    }).then(()=> {console.log(users)})
    
  }, [])

  return (
    <BrowserRouter>
    <div>
      <GNavbar user={users[0]}/>
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
        <Route  path="/ArtistPage" render={()=> <ArtistPage user={users[0]}/>}>
        </Route>

  

      </Switch> 
      <GFooter />     
    </div>
    </BrowserRouter>
  );
}

export default App;
