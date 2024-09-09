import Image from "next/image";
import projects from './projects'; 
import Headshot from "/fotos/AragonChris.jpg";
import FFI1 from "./fotos/FFI1.png";
import FFI2 from "./fotos/FFI2.png";
import FFI3 from "./fotos/FFI3.png";
import FFI4 from "./fotos/FFI4.png";
import FFI5 from "./fotos/FFI5.png";


export default function Home() {

  function mapProjects(){
    return projects.map((projects, idx) => {
      //TODO - add photo mapping from project.js
      return <div id={`mapped-projects-${idx}`}>
        <p>Name: {projects.name}</p><br/>
        <p>Description: {projects.description}</p>
        <p>url to live site: <a target="_blank" href={projects.url}>{projects.url}</a></p>
        <div className="project-image-container">
          {projects.images.map((photo, localIdx) => {
            return <img src={`/fotos/${photo}`} alt={`image of ${photo} number ${localIdx + 1}`}/>
          })}
        </div>
      </div>
    });
  }

  return (
    <>
      <main>
        <div className="quarter black">
          <img src="/fotos/AragonChris.jpg" alt="test" className="myFace"/>
          {/* <img src={`${Headshot}`} alt="test" className="myFace"/> */}
          <h1>Chris Aragon</h1>
          <h3>Award-winning Web and GIS Developer</h3>
          <ul className="contact-info">
            <li><a href="https://www.linkedin.com/in/christopher-aragon/" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/craragon77" target="_blank"/>Github</li>
            <li><a href="https://www.stone-env.com/who-we-are/our-team/chris-aragon/"/>Company</li>
            <li>Resume</li>
          </ul>
        </div>
        {/* <div className="quarter white">
          <p>
            I see programming, data structures, and algorithms as a powerful, dynamic, and quasi-magical tool. <br/>
            Having worked as a software developer in the education, healthcare, and sustainability fields,  I know the interdisciplinary applications of programming and how to solve complex problems. <br/>
            Feel free to reach out! I love sharing my work and I love learning what other developers and engineers are working on too! Outside of work, I like hiking, cycling, and playing music.</p>
        </div> */}
        <div className="quarter black">
          <h2>Portfolio</h2>
          {mapProjects()}
        </div>
      </main>
      {/* <footer className="white">
        <div>
          <p>Feel free to reach out!</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/christopher-aragon/" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/craragon77" target="_blank"/>Github</li>
          </ul>
        </div>
      </footer> */}
    </>
  );
}
