import Footer from "../compounet/footer";
import CompletProject from "../compounet/completProject";
import Navbar from "../compounet/Navbar";

import Counter from "../assets/Screenshot 2024-10-03 013047.png"
import Todolist from "../assets/Screenshot 2024-10-03 015721.png"
function Project(props) {
  return (
    <>
      <Navbar />
        
           <CompletProject title="To-Do List Web Application" url="https://dfd916e4-9980-4e82-8160-61b549821eec.e1-us-east-azure.choreoapps.dev/" discrption="Purpose: The To-Do List web application is designed to help users manage their tasks efficiently. It provides a simple and intuitive interface for creating, editing, and organizing tasks, enabling users to stay productive and focused on their priorities.

Content: This collection showcases a single-page web application focused on task management. Users can add, delete, and mark tasks as complete, making it a practical tool for everyday use.

Technologies Used:

React: Leveraging React's component-based architecture for a responsive and dynamic user experience.
HTML: Structuring the application to ensure semantic meaning and accessibility.
CSS: Styling the application for a clean and modern look." img={Todolist}/>
<CompletProject  title="Counter Game Web Application" url="https://178cdce1-c9d6-47ac-89b8-020efdffd387.e1-us-cdp-2.choreoapps.dev/" discrption="Purpose: The Counter Game web application is designed to provide an engaging gaming experience where users can tap to gain coins and buy health upgrades to enhance their gameplay.

Features:

Users can earn coins by tapping the screen.
Players can purchase health upgrades using the coins they earn.
Intuitive interface for a seamless gaming experience.
Content: This collection showcases a single-page web application focused on an interactive counter game, allowing users to track their progress and make strategic decisions about health upgrades.

Technologies Used:

React: Leveraging React's component-based architecture for a responsive and dynamic user experience.
HTML: Structuring the application to ensure semantic meaning and accessibility.
CSS: Styling the application for a clean and modern look.
Bootstrap: Utilizing Bootstrap's responsive grid system and components to ensure a mobile-friendly design.
" img={Counter}/>
<div class="position-absolute mb-5 start-50">
<div class="spinner"></div>
</div>


        <Footer />
    </>
  );
}

export default Project;
