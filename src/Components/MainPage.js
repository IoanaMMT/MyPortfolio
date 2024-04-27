import React from "react";
import logo from "./Images/Logo.svg";
import myphoto from "./Images/myphoto.svg";
import githubicon from "./Icons/icons8-github.svg";
import htmlicon from "./Icons/icons8-html.svg";
import cssicon from "./Icons/icons8-css.svg";
import reacticon from "./Icons/icons8-react-js.svg";
import typescripticon from "./Icons/icons8-typescript.svg";

export default function MainPage() {
  return (
    <>
      {/* ****************** Navigation ******************** */}
      <div className="nav_bar">
        {/* <h3 className="logo">SimplySage</h3> */}
        <div className="logo">
          <img
            src={logo}
            alt="sage leafs and the word simplysage"
            width="170"
            height="50"
            layout="responsive"
          />
        </div>
        <div className="nav_list_container">
          <ul className="nav_list">
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      {/* **************** Intro Section ******************* */}
      <div className="intro_section">
        <div className="text_section">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="my_photo">
          <img
            src={myphoto}
            alt="Photo of Ioana"
            width="542"
            height="550"
            layout="responsive"
          />
        </div>
      </div>
      {/* ********************* Skills ************************* */}
      <div className="skillSection">
        <div className="text_section">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="listedSkills">
          <div>
            <img src={htmlicon} alt="html icon" />
            HTML
          </div>
          <div>
            <img src={cssicon} alt="css icon" />
            CSS
          </div>
          <div>
            <img src={typescripticon} alt="typescript icon" />
            TypeScript
          </div>
          <div>
            <img src={reacticon} alt="react icon" />
            React
          </div>
          <div>
            <img src={githubicon} alt="github icon" />
            GitHub
          </div>
        </div>
      </div>
    </>
  );
}
