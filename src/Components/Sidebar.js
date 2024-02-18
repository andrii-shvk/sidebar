import "../App.css";
import { SidebarData } from "./SidebarData";
import { NavLink } from "react-router-dom";
import classNames from 'classnames';

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <NavLink
              className={({ isActive }) => {
                return classNames("row", {
                  ["activeRow"]: isActive,
                });
              }}
              key={key}
              to={val.link}
            >
              <div className="icon">{val.icon}</div>
              <div className="title">{val.title}</div>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
