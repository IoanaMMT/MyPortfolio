import React from "react";
import logo from "./Images/Logo.svg";
import myphoto from "./Images/myphoto.svg";

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
      <div className="text_section">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
