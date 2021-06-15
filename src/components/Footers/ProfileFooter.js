/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function EmployerProfileFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Platform Hrms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a
                  href="#"
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
              href="/"
              target="_blank"
            >
              Platform Hrms
            </a>
            . Coded by{" "}
            <a
              href="https://kodlama.io/"
              target="_blank"
            >
              Kodlama.io
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default EmployerProfileFooter;
