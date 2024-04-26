import React from "react";
import logo from "./Images/Simplysagelogo2.svg";

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
            width="150"
            height="50"
            layout="responsive"
          />
        </div>
        <div className="nav_list_container">
          <ul className="nav_list">
            <li>
              <a href="#">Skills</a>
            </li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}
