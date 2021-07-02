import React, { useState, useEffect } from "react";
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import ProfileFooter from "components/Footers/ProfileFooter.js";
import { ToastContainer, Zoom } from "react-toastify";
import CandidateProfileNav from "components/Navbars/CandidateProfileNav";
import CandidateProfileHeader from "components/Headers/CandidateProfileHeader";
import CurriculumVitaeList from "./CurriculumVitaeList";
import FavouritesList from "./FavouritesList";

function CandidateProfilePage() {
  const [pills, setPills] = useState("1");


  useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (

    <>
      <ToastContainer transition={Zoom} position="bottom-right" />
      <CandidateProfileNav />
      <div className="wrapper">
        <CandidateProfileHeader />
        <div className="section">
          <Container>
            <div className="button-container">
              <Button className="btn-round" color="info" size="lg">
                Follow
              </Button>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip515203352"
                size="lg"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
                Follow me on Twitter
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip340339231"
                size="lg"
              >
                <i className="fab fa-instagram"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip340339231">
                Follow me on Instagram
              </UncontrolledTooltip>
            </div>
            <h3 className="title">About me</h3>
            <h5 className="description">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </h5>

            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h4 className="title text-center">My Portfolio</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons location_world"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <i className="now-ui-icons ui-2_favourite-28"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <Col style={{ marginTop: '50px' }}>
                <TabContent className="gallery" activeTab={"pills" + pills}>
                  <TabPane tabId="pills1">
                    <CurriculumVitaeList />
                  </TabPane>
                  <TabPane tabId="pills2">
                    <Col className="ml-auto mr-auto" md="10">
                      <Row className="collections">
                        <Col md="6">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/bg6.jpg").default}
                          ></img>
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/bg11.jpg").default}
                          ></img>
                        </Col>
                        <Col md="6">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/bg7.jpg").default}
                          ></img>
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/bg8.jpg").default}
                          ></img>
                        </Col>
                      </Row>
                    </Col>
                  </TabPane>
                  <TabPane tabId="pills3">
                      <FavouritesList />
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </div>
        <ProfileFooter />
      </div>
    </>
  );
}

export default CandidateProfilePage;
