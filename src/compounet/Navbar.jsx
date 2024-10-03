function Navbar() {
    return(<>
    <header className="Naveber text-white sticky-top  text-center " >
                <nav>
                        <h4 className="nav-brand text-start ms-5"><a href="/" className="nav-link text-white">My Self</a></h4>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#about">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/Project">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/ContactMe">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
    </>);
}

export default Navbar