import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./Images/Logo.svg";

export default function MainPage() {
  return (
    <>
      <body>
        <nav className="navbar navbar-expand-lg bg-light navbar-light">
          <div className="container">
            <img
              src={logo}
              alt="sage leafs and the word simplysage"
              width="170"
              height="50"
              layout="responsive"
            />
          </div>
        </nav>
      </body>
    </>
  );
}

// import logo from "./Images/Logo.svg";
// import myphoto from "./Images/myphoto.svg";
// import githubicon from "./Icons/icons8-github.svg";
// import htmlicon from "./Icons/icons8-html.svg";
// import cssicon from "./Icons/icons8-css.svg";
// import reacticon from "./Icons/icons8-react-js.svg";
// import typescripticon from "./Icons/icons8-typescript.svg";
// import canvaicon from "./Icons/icons8-canva.svg";

// export default function MainPage() {
//   return (
//     <>
//       {/* ****************** Navigation ******************** */}
//       <div className="navigation">
//         <div className="nav_bar">
//           {/* <h3 className="logo">SimplySage</h3> */}
//           <div className="logo">
//             <img
//               src={logo}
//               alt="sage leafs and the word simplysage"
//               width="170"
//               height="50"
//               layout="responsive"
//             />
//           </div>
//           <div className="nav_list_container">
//             <ul className="nav_list">
//               <li>
//                 <a href="#">Skills</a>
//               </li>
//               <li>
//                 <a href="#">Project</a>
//               </li>
//               <li>
//                 <a href="#">Contact</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       {/* **************** Intro  ************************** */}
//       <div className="intro_section">
//         <div className="intro_text_section">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//         </div>
//         <div className="my_photo">
//           <img
//             src={myphoto}
//             alt="Photo of Ioana"
//             width="542"
//             height="550"
//             layout="responsive"
//           />
//         </div>
//       </div>
//       {/* ********************* Skills ************************* */}
//       <div className="skillSection">
//         <div className="listedSkills">
//           <div className="card">
//             <img src={htmlicon} alt="html icon" width={80} height={80} />
//             <p>HTML</p>
//           </div>
//           <div className="card">
//             <img src={cssicon} alt="css icon" width={80} height={80} />
//             <p>CSS</p>
//           </div>
//           <div className="card">
//             <img
//               src={typescripticon}
//               alt="typescript icon"
//               width={80}
//               height={80}
//             />
//             <p>Typescript</p>
//           </div>
//           <div className="card">
//             <img src={reacticon} alt="react icon" width={80} height={80} />
//             <p>React</p>
//           </div>
//           <div className="card">
//             <img src={githubicon} alt="github icon" width={80} height={80} />
//             <p>GitHub</p>
//           </div>
//           <div className="card">
//             <img src={canvaicon} alt="github icon" width={80} height={80} />
//             <p>Canva</p>
//           </div>
//         </div>
//         <div className="skills_text_section">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//         </div>
//       </div>
//       {/* *************************** Projects ********************************* */}
//       <div className="projects_section">
//         <div className="projects_text">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//         </div>
//         <div className="project_to_do_list"></div>
//       </div>
//     </>
//   );
// }
