import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import logo from "./Images/Logo.svg";
import myphoto from "./Images/myphoto.svg";
import { Container } from "react-bootstrap";
import githubicon from "./Icons/icons8-github.svg";
import htmlicon from "./Icons/icons8-html.svg";
import cssicon from "./Icons/icons8-css.svg";
import reacticon from "./Icons/icons8-react-js.svg";
import typescripticon from "./Icons/icons8-typescript.svg";
import canvaicon from "./Icons/icons8-canva.svg";

export default function MainPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <body>
        {/* **************************** NAVBAR ********************************** */}
        <nav className="navbar navbar-expand-lg bg-light navbar-light">
          <div className="container">
            <img
              src={logo}
              alt="sage leafs and the word simplysage"
              width="170"
              height="50"
              layout="responsive"
            />
            <Button
              className="navbar-toggler"
              type="button"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
            <Collapse in={open}>
              <div
                className="collapse navbar-collapse"
                id="example-collapse-text"
              >
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Project
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </Collapse>
          </div>
        </nav>
        {/* *************************** SHOWCASE **************************** */}
        <section className="bg-light text_dark p-5  text-center">
          <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
              <div>
                <h3 className="px-md-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
              </div>
              <img
                className="img-fluid w-50 d-none d-sm-block my-image"
                src={myphoto}
                alt="Photo of Ioana"
                // width="542"
                // height="550"
                layout="responsive"
              />
            </div>
          </div>
        </section>
        {/* *************************** Skills *************************************** */}
        <section className="bg-light text_dark p-5 pb-md-0 text-center ">
          <div className="container">
            <div className="row">
              <div className="col-md-6 order-md-2 align-self-center mb-5 mb-md-0  ">
                <div className="my-skills-text">
                  <h1 className="px-md-5">My Skills</h1>
                </div>
              </div>
              <div className="col-md-6 order-md-1">
                <div class="row row-cols-3 g-4">
                  <div class="col">
                    <div class="card">
                      <div class="card-body">
                        <img
                          className="img-fluid"
                          src={htmlicon}
                          alt="html icon"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <div class="card-body">
                        <img
                          className="img-fluid"
                          src={cssicon}
                          alt="css icon"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <div class="card-body">
                        <img
                          className="img-fluid"
                          src={typescripticon}
                          alt="typescript icon"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <div class="card-body">
                        <img
                          className="img-fluid"
                          src={reacticon}
                          alt="react icon"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <div class="card-body">
                        <img
                          className="img-fluid"
                          src={githubicon}
                          alt="github icon"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <div class="card-body">
                        <img
                          className="img-fluid"
                          src={canvaicon}
                          alt="canva icon"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* *************************** Project To Do List *************************************** */}
        <section className="bg-light text_light p-5 text-center">
          <div className="container pt-5">
            <h1>Projects</h1>
          </div>
        </section>
        <section className="bg-light text_dark p-5  text-center">
          <div className="container">
            <div className="row pb-md-0 align-items-center justify-content-between">
              <div className="col-md">
                <img />
              </div>
              <div className="col-md p-5">
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
