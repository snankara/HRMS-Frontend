
import EmployerAuth from "layouts/EmployerAuth";
import YourAccountCandidate from "layouts/YourAccountCandidate";
import YourAccountEmployer from "layouts/YourAccountEmployer";
import JobAdvertisementAdd from "pages/JobAdvertisementAdd";
import CurriculumVitaeAdd from "pages/CurriculumVitaeAdd";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";

import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function Navi(props) {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [isAuthenticatedEmployer, setisAuthenticatedEmployer] = useState(false)
  const history = useHistory()
  let location = useLocation();

  function handleSignOut() {
    setisAuthenticatedEmployer(false)
    history.push("/")
  }

  function handleSignIn() {
    setisAuthenticatedEmployer(true)
  }

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="#"
              target="_blank"
              id="navbar-brand"
            >
              PLATFORM HRMS
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              İstihdam Noktası
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              {location.pathname === "/" &&
                <NavItem>
                  <NavLink
                    href="#pablo"
                  >
                    <i className="now-ui-icons travel_info mr-1"></i>
                    <p>Hakkımızda</p>
                  </NavLink>
                </NavItem>
              }
              {location.pathname !== "/" &&
                <NavItem>
                  <NavLink to="/" tag={Link}>
                    <i className="now-ui-icons arrows-1_share-66 fa-rotate-270 mr-1"></i>
                    <p>Anasayfaya Dön</p>
                  </NavLink>
                </NavItem>
              }

              {location.pathname === "/" &&
                <NavItem>
                  <NavLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("dashboard-section")
                        .scrollIntoView();
                    }}
                  >
                    <i className="now-ui-icons business_badge mr-1"></i>
                    <p>İş İlanları</p>
                  </NavLink>
                </NavItem>
              }

              {isAuthenticatedEmployer &&
                <NavItem>
                  <JobAdvertisementAdd />
                </NavItem>
              }

              {location.pathname === "/candidate-profile-page" &&
                <NavItem>
                  <CurriculumVitaeAdd />
                </NavItem>
              }

              {isAuthenticatedEmployer ? <YourAccountEmployer signOut={handleSignOut} /> : <EmployerAuth signIn={handleSignIn} />}

              <NavItem>
                <NavLink href="#contact">
                  <i className="now-ui-icons ui-2_chat-round mr-1"></i>
                  <p>BİR SORUN MU VAR ?</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navi;
