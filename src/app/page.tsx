'use client'
import { useState } from "react";
import Image from "next/image";
import projects from './projects'; 
import Headshot from "/fotos/AragonChris.jpg";
import FFI1 from "./fotos/FFI1.png";
import FFI2 from "./fotos/FFI2.png";
import FFI3 from "./fotos/FFI3.png";
import FFI4 from "./fotos/FFI4.png";
import FFI5 from "./fotos/FFI5.png";
//PACKAGES
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

//CSS STUFF
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);
  const [showBio, setShowBio] = useState(false);

  function mapProjects(){
    return projects.map((projects, idx) => {
      //TODO - add photo mapping from project.js
      return <div key={`projects.name-${idx}`} id={`projects.name-${idx}`} className={`${showProjects ? '' : 'hidden'}`}>
        <p className="project-header">{projects.name}</p><br/>
        <p>Description: {projects.description}</p>
        <p>url to live site: <a target="_blank" href={projects.url}>{projects.url}</a></p>
        <div className="project-image-container">
          {/* helpful youtube tutorial on Swiper = https://www.youtube.com/watch?v=imhdh4xCh7I&t=488s */}
          <Swiper
            navigation
            pagination={{ clickable: true, type: "progressbar"}}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className="rounded-lg"
            key={`projects.name-${idx}`}
          >
          {projects.images.map((photo, localIdx) => {
            return (
              <SwiperSlide id={`${photo}-${localIdx}`} key={`${photo}-${localIdx}`} className="swiper-slide">
                <img 
                  src={`/fotos/${photo}`} 
                  alt={`image of ${photo} number ${localIdx + 1}`}
                  className="portfolio-slide"
                />
              </SwiperSlide>
            )
          })}
          </Swiper>
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
            <li><a href="https://github.com/craragon77" target="_blank">Github</a></li>
            <li><a href="https://www.stone-env.com/who-we-are/our-team/chris-aragon/" target="_blank">Company</a></li>
            <li><a href="Chris Aragon-Resume-10_5_24.pdf" target="_blank">Resume</a></li>
          </ul>
        </div>
        <div className="quarter black">
          {/* TO-DO: MAKE ALL THE BUTTONS HERE A11Y FRIENDLY IN THE SHADOW DOM */}
          <h2 className="subheader-info" onClick={() => setShowBio(!showBio)}>About Me <span>{showBio ? <MdKeyboardDoubleArrowDown/> : <MdKeyboardDoubleArrowRight/>}</span></h2>
          <div className={`${showBio ? '' : 'hidden'}`}>
            <p>
              I see programming, data structures, and algorithms as a powerful, dynamic, and quasi-magical tool. <br/>
              Having worked as a software developer in the education, healthcare, and sustainability fields,  I know the interdisciplinary applications of programming and how to solve complex problems. <br/>
              Feel free to reach out! I love sharing my work and I love learning what other developers and engineers are working on too! Outside of work, I like hiking, cycling, and playing music.
            </p>
          </div>
        </div>
        <div className="quarter black">
          <h2 className="subheader-info" onClick={() => setShowProjects(!showProjects)}>Portfolio <span>{showProjects ? <MdKeyboardDoubleArrowDown/> : <MdKeyboardDoubleArrowRight/>}</span><span></span></h2>
          {mapProjects()}
        </div>
      </main>
    </>
  );
}
