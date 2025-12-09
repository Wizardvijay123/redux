import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <h3 className="menu-title">Menu</h3>

      <ul className="menu">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
