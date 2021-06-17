/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function HomePageFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                PLATFORM HRMS
              </a>
            </li>
            <li>
              <a
                href="http://presentation.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="http://blog.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()} {" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Platform Hrms
          </a>
          . Coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=nukr-dark-footer"
            target="_blank"
          >
             Kodlama.io
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default HomePageFooter;
