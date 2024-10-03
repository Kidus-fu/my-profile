import Footer from "../compounet/footer";
import ContactForm from "../compounet/gmail";
import Navbar from "../compounet/Navbar";
import Skills from "../compounet/skills";

import { useState } from "react";
import SkillsData from "../data/skills.json";

function Home() {

  return (
    <>
      <div className="App">
        <Navbar />
        

        <div className="container mt-4 text-light">
          <h4>Welcome to my website</h4>
          <div></div>
          <p id="animatedText">
            Hi! I'm Panda, a passionate developer based in Ethiopia. I
            specialize in full-stack development and have a keen interest in
            building responsive web applications.
          </p>
          <h4 className="text-light">My Skills</h4>

          {SkillsData.map((Skillsdata) => {
            return (
              <Skills
                title={Skillsdata.title}
                img={Skillsdata.img}
                color={Skillsdata.color}
                discrption={Skillsdata.discrption}
                Skills={Skillsdata.Skills}
              />
            );
          })}
        </div>

        <Footer />
      </div>
      <div className=" d-flex fixed-bottom justify-content-end mx-3">
        <a
          className="btn btn-dark text-light border rounded-circle  btn-sm"
          style={{width:"40px",height:"40px"}}
          href="#top"
        >
          <i className="fas fa-up-long"></i>
        </a>
      </div>
    </>
  );
}

export default Home;
