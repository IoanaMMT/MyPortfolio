import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import logo from "./Images/Logo.svg";
import myphoto from "./Images/myphoto.svg";
import desktop from "./Images/desk&mobile.svg";
import githubicon from "./Icons/icons8-github.svg";
import htmlicon from "./Icons/icons8-html.svg";
import cssicon from "./Icons/icons8-css.svg";
import reacticon from "./Icons/icons8-react-js.svg";
import typescripticon from "./Icons/icons8-typescript.svg";
import figma from "./Icons/icons8-figma.svg";
import "../App.css";

export default function MainPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <body className="entire-page">
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
              data-bs-toggle="collapse"
              data-bs-target="#example-collapse-text"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              style={{
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none",
              }}
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
            <Collapse in={open}>
              <div id="example-collapse-text" className="navbar-collapse">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a href="#skills" className="nav-link">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#projects" className="nav-link">
                      Projects
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
        <section className="bg-light text_dark pt-5 ps-5 pe-5 pb-lg-0  text-center showcase">
          <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
              <div>
                <h3 className="px-md-5">
                  Welcome to my portfolio! I am passionate about creating
                  interactive and responsive web applications.
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
        <section
          className="text_dark p-5 text-center skills-section"
          id="skills"
        >
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
                      <div class="card-body skills-icon">
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
                      <div class="card-body skills-icon">
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
                      <div class="card-body skills-icon">
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
                      <div class="card-body skills-icon">
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
                      <div class="card-body skills-icon">
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
                      <div class="card-body skills-icon">
                        <img
                          className="img-fluid"
                          src={figma}
                          alt="figma icon"
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
        <section
          className="bg-light p-5 text-center projects-title"
          id="projects"
        >
          <div className="container pt-5">
            <h1>Projects</h1>
          </div>
        </section>
        <section className="p-5 to-do-list">
          <div className="container">
            <div className="row align-items-centre justify-content-between">
              <div className="col-md">
                <img className="desktopimage" src={desktop} alt="Desktop" />
              </div>
              <div className="col-md-6 p-md-5 pt-lg-0 text-center">
                <h1 className="pb-3 text-dark">To do list</h1>
                <h3 className="text-dark">
                  A responsive and user-friendly to-do list application to help
                  you manage your tasks efficiently, ensuring you stay
                  productive whether you're on a desktop or mobile device.
                </h3>
              </div>
            </div>
          </div>
        </section>
        {/* ******************************* Other Project ********************************************** */}
        <section className="p-5 other-project">
          <div className="container">
            <div className="row align-items-centre justify-content-between">
              <div className="col-md order-md-2">
                <img className="desktopimage" src={desktop} alt="Desktop" />
              </div>
              <div className="col-md-6 p-md-5 text-center">
                <h1 className="pb-3 text-light">To do list</h1>
                <h3 className="text-light">
                  A responsive and user-friendly to-do list app to efficiently
                  manage your tasks across all devices.
                </h3>
              </div>
            </div>
          </div>
        </section>
        {/* ************************************ Third Project *********************************************** */}
      </body>
    </>
  );
}
