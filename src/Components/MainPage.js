import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import logo from "./Images/Logo.svg";
import lightlogo from "./Images/SimplySage.svg";
import myphoto from "./Images/myphoto.jpg";
import desktop from "./Images/desk&mobile.svg";
import bumpchart from "./Images/BumpChart.svg";
import storypointing from "./Images/Story-pointing-game.svg";
import welcometext from "./Images/WelcomeStyle.svg";
import lightwelcometext from "./Images/W.svg";
import githubicon from "./Icons/icons8-github.svg";
import htmlicon from "./Icons/icons8-html.svg";
import cssicon from "./Icons/icons8-css.svg";
import reacticon from "./Icons/icons8-react-js.svg";
import typescripticon from "./Icons/icons8-typescript.svg";
import figma from "./Icons/icons8-figma.svg";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import showcasedots from "./Decoratives/Showcase-dots.svg";
import skillsdotsright from "./Decoratives/Skills-dots-right.svg";
import "../App.css";

export default function MainPage() {
  const [open, setOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <body className="entire-page">
        {/* ******************  Dark Navbar ********************************** */}

        <nav className="navbar navbar-expand-lg">
          <div className="container" id="home">
            <img
              src={lightlogo}
              className="simplysagelogo"
              alt="sage leafs and the word simplysage"
              width="340"
              height="100"
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
                    <a href="#contact" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </Collapse>
          </div>
        </nav>

        {/* *************************** SHOWCASE **************************** */}

        {/* ************************* Dark showcase  ************************** */}

        <section className="text_dark pt-5 ps-5 pe-5 pb-3 text-center showcase">
          <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between position-relative">
              <div className="overlap-text ">
                <img
                  className="img-fluid pt-3"
                  src={lightwelcometext}
                  alt="Intro text"
                  width={800}
                  height={800}
                />
                <div className="subtext">
                  <p className="subtext-text">
                    I am passionate about creating interactive and responsive
                    web applications
                  </p>
                </div>
              </div>
              <img
                className="img-fluid d-none d-sm-block my-image overlap-photo"
                src={myphoto}
                alt="Photo of Ioana"
                layout="responsive"
              />
            </div>
            <img
              className="img-fluid showcasedots"
              src={showcasedots}
              alt="rectangular pattern dots"
              layout="responsive"
              width={400}
              height={400}
            />
          </div>
        </section>

        {/* *************************** Skills *************************************** */}
        <section
          className="text_dark text-center skills-section pt-5 pb-5"
          id="skills"
        >
          <img
            className="img-fluid skillsdotsright"
            src={skillsdotsright}
            alt="dots patterns"
            layout="responsive"
            width={900}
            height={900}
          />

          <div className="container pt-5 pb-5 ">
            <div className="row ">
              <div className="col-md-6 order-md-2 align-self-center mb-5 mb-md-0 side-text">
                <div className="my-skills-text  ">
                  <h1 className="px-md-5 skills-btn ">My Skills</h1>
                </div>
              </div>
              <div className="col-md-6 order-md-1">
                <div class="row row-cols-3 g-4">
                  {/* **** HTML ******* */}
                  <div class="col">
                    <div class="card">
                      <div class="card-body skills-icon">
                        <figure>
                          <img
                            className="img-fluid pt-3"
                            src={htmlicon}
                            alt="html icon"
                            width={80}
                            height={80}
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                  {/* ******  CSS  ****** */}
                  <div class="col">
                    <div class="card">
                      <div class="card-body skills-icon">
                        <figure>
                          <img
                            className="img-fluid pt-3"
                            src={cssicon}
                            alt="css icon"
                            width={80}
                            height={80}
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                  {/* *******  Typesscript  ******* */}
                  <div class="col">
                    <div class="card">
                      <div class="card-body skills-icon">
                        <figure>
                          <img
                            className="img-fluid pt-3"
                            src={typescripticon}
                            alt="typescript icon"
                            width={80}
                            height={80}
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                  {/* *********  React  ******** */}
                  <div class="col">
                    <div class="card">
                      <div class="card-body skills-icon">
                        <figure>
                          <img
                            className="img-fluid pt-3"
                            src={reacticon}
                            alt="react icon"
                            width={80}
                            height={80}
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                  {/* ********  Github  ********** */}
                  <div class="col">
                    <div class="card">
                      <div class="card-body skills-icon">
                        <figure>
                          <img
                            className="img-fluid pt-3"
                            src={githubicon}
                            alt="github icon"
                            width={80}
                            height={80}
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                  {/* **********  Figma  *********** */}
                  <div class="col">
                    <div class="card">
                      <div class="card-body skills-icon">
                        <figure>
                          <img
                            className="img-fluid pt-3"
                            src={figma}
                            alt="figma icon"
                            width={80}
                            height={80}
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* *************************** Project To Do List *************************************** */}

        <div className="projects-first-page">
          <section className="p-5 text-center projects-title" id="projects">
            <div className="container  pt-2 side-text">
              <h1 className="px-md-5 projects-btn text-light my-project-text">
                Projects
              </h1>
            </div>
          </section>
          <section className="p-5 to-do-list">
            <div className="container">
              <div className="row align-items-centre justify-content-between">
                <div className="col-md">
                  <figure>
                    <a
                      href="https://to-do-v3-ax6i.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="desktopimage zoom-effect"
                        src={desktop}
                        alt="Desktop"
                      />
                    </a>
                  </figure>
                </div>
                <div className="col-md-6 p-md-5 pt-lg-0 text-center">
                  <h1 className="pb-3 text-light">To do list</h1>
                  <h3 className="text-light text-weight">
                    A responsive and user-friendly to-do list application to
                    help you manage your tasks efficiently, ensuring you stay
                    productive whether you're on a desktop or mobile device.
                  </h3>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* 

        {/* ******************************* Transport Trends Chart ********************************************** */}
        <section className="p-5 other-project">
          <div className="container pt-5 pb-5">
            <div className="row align-items-centre justify-content-between">
              <div className="col-md order-md-2">
                <figure>
                  <a
                    href="https://nivo-carbon-intensity.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="desktopimage zoom-effect"
                      src={bumpchart}
                      alt="Nivo chart"
                    />
                  </a>
                </figure>
              </div>
              <div className="col-md-6 p-md-5 text-center">
                <h1 className="pb-3 text-dark">Transport Trends Chart</h1>
                <h3 className="text-dark text-weight">
                  An interactive and colorful bump chart displaying transport
                  data over time. Fully responsive for both desktop and mobile,
                  it offers an intuitive way to explore and customize transport
                  trends.
                </h3>
              </div>
            </div>
          </div>
        </section>
        {/* ************************************ Story Pointing Game *********************************************** */}
        <section className="p-5 to-do-list story-pointing">
          <div className="container pt-5 pb-5">
            <div className="row align-items-centre justify-content-between">
              <div className="col-md">
                <figure>
                  <img
                    className="desktopimage zoom-effect"
                    src={storypointing}
                    alt="Story Pointing Game"
                  />
                </figure>
              </div>
              <div className="col-md-6 p-md-5 pt-lg-0 text-center">
                <h1 className="pb-3 pt-3 text-light">Story Pointing Game</h1>
                <h3 className="text-light text-weight">
                  A collaborative tool for agile teams to estimate user stories
                  using Fibonacci points. Multiple players can select and reveal
                  points together. Designed for desktop use, it streamlines the
                  estimation process.
                </h3>
              </div>
            </div>
          </div>
        </section>
      </body>

      {/* 
        <section className="p-5 to-do-list">
          <div className="container pt-5 pb-5">
            <div className="row align-items-centre justify-content-between">
              <div className="col-md add-shine">
                <figure>
                  <img
                    className="desktopimage"
                    src={storypointing}
                    alt="Story Pointing Game"
                  />
                </figure>
              </div>
              <div className="col-md-6 p-md-5 pt-lg-0 text-center">
                <h1 className="pb-3 pt-3 text-dark">Story Pointing Game</h1>
                <h3 className="text-dark">
                  A collaborative tool for agile teams to estimate user stories
                  using Fibonacci points. Multiple players can select and reveal
                  points together. Designed for desktop use, it streamlines the
                  estimation process.
                </h3>
              </div>
            </div>
          </div>
        </section>
      </body> */}
      {/* *****************************   Footer     ********************************************* */}
      <section
        className="text_dark pt-5 text-center skills-section bottom-section"
        id="contact"
      >
        <div className="container">
          <div className="row justify-content-center align-items-center media-icons">
            {/* Social media icons */}
            <ul className="social-media-icons d-flex justify-content-center">
              <li>
                <a
                  href="https://x.com/SimplySageK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter size={40} />
                </a>
              </li>
              <li className="me-5 ms-5">
                <a
                  href="https://github.com/IoanaMMT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoGithub size={40} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ioana-morosanu-30a899198/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiLinkedin size={40} />
                </a>
              </li>
            </ul>
          </div>
          {/* Copyright section */}
          <div className="row justify-content-center align-items-center pt-4">
            <footer style={{ textAlign: "center", padding: "1em" }}>
              <p>&copy; {currentYear} SimplySage. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
}
