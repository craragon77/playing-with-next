import Image from "next/image";
import projects from './projects'; 
import headshot from "./fotos/AragonChris.jpg";
import test from "./fotos/FFI1.png";

export default function Home() {

  function mapProjects(){
    return projects.map((projects, idx) => {
      //TODO - add photo mapping from project.js
      return <div>
        <p>Name: {projects.name}</p><br/>
        <p>Description: {projects.description}</p>
        <p>url to live site: <a target="_blank" href={projects.url}>{projects.url}</a></p>
      </div>
    });
  }

  return (
    <>
      <main>
        <div className="quarter black">
          <img src="/fotos/AragonChris.jpg" alt="test" className="myFace"/>
          <h1>Hi! I'm Chris, an award-winning web and GIS developer and speaker based on New England</h1>
          <ul className="contact-info">
            <li><a href="https://www.linkedin.com/in/christopher-aragon/" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/craragon77" target="_blank"/>Github</li>
            <li><a href="https://www.stone-env.com/who-we-are/our-team/chris-aragon/"/>Company</li>
            <li>Resume</li>
          </ul>
        </div>
        <div className="quarter white">
          <p>
            I see programming, data structures, and algorithms as a powerful, dynamic, and quasi-magical tool. <br/>
            Having worked as a software developer in the education, healthcare, and sustainability fields,  I know the interdisciplinary applications of programming and how to solve complex problems. <br/>
            Feel free to reach out! I love sharing my work and I love learning what other developers and engineers are working on too! Outside of work, I like hiking, cycling, and playing music.</p>
        </div>
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
