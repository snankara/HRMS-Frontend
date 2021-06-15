import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function EmployeeProfileHeader() {
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
          <h3 className="title">Employee Name</h3>
          {/* <p className="category">Company Name</p> */}
          <div className="content">
            <div className="social-description">
              <h2>10</h2>
              <p>Onayda Bekleyen İlanlar</p>
            </div>
            <div className="social-description" style={{marginLeft:'25px'}}>
              <h2>15</h2>
              <p>Onayda Bekleyen İşverenler</p>
            </div>
            {/* <div className="social-description">
              <h2>48</h2>
              <p>Bookmarks</p>
            </div> */}
          </div>
        </Container>
      </div>
    </>
  );
}

export default EmployeeProfileHeader;
