import Footer from "../compounet/footer";
import CompletProject from "../compounet/completProject";
import Navbar from "../compounet/Navbar";
import Prodjects from "../data/projects.json"

function Project(props) {
  return (
    <>
      <Navbar />
        

<div class="position-absolute mb-5 start-50">
</div>
  {Prodjects.map(project => {
    console.log(project.img)
    return(<CompletProject title={project.title} discrption={project.discrption} url={project.url} img={project.img}/>)
  })}

<div class="spinner"></div>
        <Footer />
    </>
  );
}

export default Project;
