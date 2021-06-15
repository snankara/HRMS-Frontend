import EmployeeProfilePage from "pages/EmployeeProfilePage";
import EmployerProfilePage from "pages/EmployerProfilePage";
import HomePage from "pages/HomePage";

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';

function App() {
  React.useEffect(() => {
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
      <BrowserRouter>
        <Switch>
          <Switch>
            <Route exact path="/" component={HomePage}/>

            <Route exact path="/employer-profile-page" component={EmployerProfilePage}/>

            <Route exact path="/employee-profile-page" component={EmployeeProfilePage}/>
            
          </Switch>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

