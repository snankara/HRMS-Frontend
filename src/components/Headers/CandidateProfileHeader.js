import React, { createRef, useEffect } from "react";

import { Container } from "reactstrap";

function CandidateProfileHeader() {
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
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/bg5.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={require("assets/img/ryan.jpg").default}></img>
          </div>
          <h3 className="title">Candidate Name</h3>
          {/* <p className="category">Company Name</p> */}
          <div className="content">
            <div className="social-description">
              <h2>26</h2>
              <p>İş İlanları</p>
            </div>
            <div className="social-description">
              <h2>26</h2>
              <p>Başvurular</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default CandidateProfileHeader;
