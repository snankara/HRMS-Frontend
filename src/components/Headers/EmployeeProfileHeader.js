import React, { createRef, useEffect } from "react";

import { Container } from "reactstrap";


function EmployeeProfileHeader(props) {

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
          <h3 className="title">{props.employee.firstName} {props.employee.lastName}</h3>
          <div className="content" style={{maxWidth:'500px'}}>
            <div className="social-description">
              <h2>{props.jobAdvertisements.length}</h2>
              <span>Onay Bekleyen İlanlar</span>
            </div>
            <div className="social-description ml-3">
              <h2>{props.employerApprovals.length}</h2>
              <span>Onay Bekleyen İşverenler</span>
            </div>
            <div className="social-description ml-3">
              <h2>{props.employerUpdateApprovals.length}</h2>
              <span>Güncelleme Onayı Bekleyen İşverenler</span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default EmployeeProfileHeader;
