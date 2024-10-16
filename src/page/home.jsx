import Footer from "../compounet/footer";
import ContactForm from "../compounet/gmail";
import Navbar from "../compounet/Navbar";
import Skills from "../compounet/skills";

import { useState , useEffect } from "react";
import SkillsData from "../data/skills.json";

function Home() {
  // State to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Categories array to render filter buttons
  const categories = ["All", "Web Development", "Version Control System"];

  // Function to filter skills based on selected category
  const filteredSkills = selectedCategory === "All" 
    ? SkillsData 
    : SkillsData.filter(skill => skill.category === selectedCategory);
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <>
      <div className="App">
        <Navbar />

        <div className="container mt-4 text-light">
          <h4>Welcome to my website</h4>
          <p id="animatedText">
            Hi! I'm Panda(Kidus), a passionate developer based in Ethiopia. I
            specialize in full-stack development and have a keen interest in
            building responsive web applications.
          </p>

          {/* Filter Buttons */}
          <div className="mb-4">
            {categories.map((category) => (
              <button
                key={category}
                id="Filter"
                className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-dark border border-info'} mx-1`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <h4 className="text-light">My Skills</h4>

          {filteredSkills.map((Skillsdata) => {
            return (
              <Skills
                key={Skillsdata.title} // Add a unique key prop
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

      {visible && (
        <div className="d-flex fixed-bottom justify-content-end mx-3 mb-3">
          <button
            className="btn btn-dark text-light border rounded-circle btn-sm"
            style={{
              width: "40px",
              height: "40px",
              transition: "background-color 0.3s ease", // Smooth transition for hover effect
            }}
            aria-label="Back to top"
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#555")} // Darken button on hover
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")} // Reset button color
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scroll to top smoothly
          >
            <i className="fas fa-chevron-up" style={{ fontSize: "18px" }}></i>
          </button>
        </div>
      )}
    </>
  );
}

export default Home;
