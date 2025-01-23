import React from "react";
import { NavLink } from "react-router-dom";

function Bottomnav() {
  return (
    <div className="bottom-nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <i className="fas fa-home"></i>
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/podcast"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <i className="fas fa-podcast"></i>
        <span>Podcast</span>
      </NavLink>
      <NavLink
        to="/news"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <i className="fas fa-newspaper"></i>
        <span>News</span>
      </NavLink>
      <NavLink
        to="/video"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <i className="fas fa-video"></i>
        <span>Video</span>
      </NavLink>
      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        <i className="fas fa-pen"></i>
        <span>Blogs</span>
      </NavLink>
    </div>
  );
}

export default Bottomnav;
