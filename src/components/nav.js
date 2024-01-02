
import { useState } from "react";
export default function Navbar () {

    const [isOpen, setIsOpen] = useState(false);

    const toggleButton = () => {
      setIsOpen(!isOpen);
  }
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#"><span className="className text-warning">Alpha</span>Sets</a>
        <button className="navbar-toggler" type="button" onClick={toggleButton} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" ></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href= "">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#deals">Help</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#earpods">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#earphones">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    )
}