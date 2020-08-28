import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Link } from 'react-router-dom';

// Components
import GNavbar from "./components/GNavbar/index.jsx";
import GFooter from "./components/GFooter/index.jsx";
//Pages
import Home from "./pages/Home"
import WhatsOn from "./pages/WhatsOn"



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
        <Route path="/WhatsOn" component={WhatsOn}>
        </Route>
        
      </Switch> 
      <GFooter />     
    </div>
    </BrowserRouter>
  );
}

export default App;
