import MyLogo from "../assets/My Sit Logo.webp";

function Navbar() {
    return (
        <>
            <header className="Navbar text-white sticky-top" >
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <h4 className="navbar-brand">
                            <a href="/" className="nav-link text-white">
                                <img src={MyLogo} alt="My Logo" className="rounded" style={{ height: "30px" }} /> My Self
                            </a>
                        </h4>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                           <i className="fas fa-bars text-light"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#about">About Me</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/Project">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/ContactMe">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
