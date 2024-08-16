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
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="quarter">
          <img src="AragonChris.jpg" alt="test"/>
          <h1>Hi! I'm Chris, a web and GIS developer based on New England</h1>
        </div>
        <div className="quarter">
          <p>I see programming, data structures, and algorithms as a powerful, dynamic, and quasi-magical tool. Having worked as a software developer in the education, healthcare, and sustainability fields,  I am deeply interested in the interdisciplinary applications of programming being used in creative and fascinating ways to solve complex challenges. Feel free to reach out! I love sharing my work and I love learning what other developers and engineers are working on too! Outside of work, I like hiking, cycling, and playing music.</p>
        </div>
        <div className="quarter">
          <h2>Portfolio</h2>
          {mapProjects()}
        </div>
      </main>
      <footer>
        <div>
          <p>Feel free to reach out!</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/christopher-aragon/" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/craragon77" target="_blank"/>Github</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
