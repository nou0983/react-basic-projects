import { useRef } from "react";
import { links, social } from "../../utils/data";
import { FaTimes, FaBars } from "react-icons/fa";
import "./navContainer.css";
import { useState } from "react";

const NavContainer = () => {
  const [showNav, setShowNav] = useState(false);
  const navList = useRef(null);
  
  const navContainerStyle = {
    height: showNav
      ? `${navList.current.getBoundingClientRect().height}px`
      : "0",
  };

  return (
    <nav>
      <div className="container">
        <div className="nav-header">
          <a href="/  ">coding</a>
          <button type="button" onClick={() => setShowNav(!showNav)}>
            {showNav ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div style={navContainerStyle} className="nav-container">
          <ul ref={navList} className="nav-list">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-list">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavContainer;
