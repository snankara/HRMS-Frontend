
import CandidateAuth from "layouts/CandidateAuth";
import CandidateLogin from "layouts/CandidateLogin";
import CandidateRegister from "layouts/CandidateRegister";
import React, { createRef, useEffect, useState } from "react";

import { Container } from "reactstrap";

function Header() {
  let pageHeader = createRef();

  useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/header1.jpg").default + ")", 
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="Logo"
              className="n-logo img"
              src={require("assets/img/logo3.png").default}
            ></img>
            <h1 className="h1-seo">KARİYER PLATFORMUNUZ.</h1>
            <h3>Hayalinizdeki işe son bir adım . . .</h3>
            <div className="text-center">
              <CandidateAuth/> 
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
