import Header from "components/Headers/Header";
import Navi from "components/Navbars/Navi";
import CandidateProfilePage from "pages/CandidateProfilePage";

import EmployeeProfilePage from "pages/EmployeeProfilePage";
import EmployerProfilePage from "pages/EmployerProfilePage";
import HomePage from "pages/HomePage";

import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "layouts/Dashboard";
import './App.css';
import HomePageFooter from "components/Footers/HomePageFooter";

function App() {

useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  return (
    <div className="App">
      <nav>
        <Navi/>
      </nav>
      <Route exact path="/">
        <div className="wrapper">
          <Header/>
          <div className="main">
            <Dashboard />
          </div>
        </div>
      </Route>

      <Route exact path="/employer-profile-page" component={EmployerProfilePage}></Route>

      <Route exact path="/candidate-profile-page" component={CandidateProfilePage}/>

      <Route exact path="/employee-profile-page" component={EmployeeProfilePage}/>
      <footer>
        <HomePageFooter />
      </footer>
      
      {/* <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}/>
 
            <Route exact path="/employer-profile-page" component={EmployerProfilePage}/>

            <Route exact path="/employee-profile-page" component={EmployeeProfilePage}/>

            <Route exact path="/candidate-profile-page" component={CandidateProfilePage}/>
            
          </Switch> 
      </BrowserRouter> */}
    </div>
  );
}

export default App;

