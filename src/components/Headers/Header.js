/*eslint-disable*/
import CandidateLogin from "layouts/CandidateLogin";
import CandidateRegister from "layouts/CandidateRegister";
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function Header() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
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
              alt="..."
              className="n-logo img"
              src={require("assets/img/logo3.png").default}
            ></img>
            <h1 className="h1-seo">KARİYER PLATFORMUNUZ.</h1>
            <h3>Hayalinizdeki işe son bir adım . . .</h3>
            <div className="text-center">
            <CandidateLogin/>
            <CandidateRegister/> 
            </div>
          </div>
        </Container>     
         </div>
    </>
  );
}

export default Header;
