// "use client";
import "./styling.css";
import Image from "next/image";
import logoImage from "../../public/logosaas.png";
import menuIcon from "../../public/menu.svg";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="logo">
          <Image src={logoImage} alt="SaaS logo" className="logo-image" />
        </div>
        <div className="menu-icon">
          <Image src={menuIcon} alt="Menu icon" className="menu-image" />
        </div>
        <nav className="navbar-links">
          <a href="#" className="navbar-link">
            {" "}
            About{" "}
          </a>
          <a href="#" className="navbar-link">
            {" "}
            Features{" "}
          </a>
          <a href="#" className="navbar-link">
            {" "}
            Help{" "}
          </a>
          <a href="#" className="navbar-link">
            {" "}
            Contact Us{" "}
          </a>
        </nav>
      </div>
    </div>
  );
}
