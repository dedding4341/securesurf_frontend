import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCog, faCog, faChartBar, faSignOutAlt, faClock } from '@fortawesome/free-solid-svg-icons'
import "./SideNav.css";
import { useHistory } from "react-router-dom";

function SideNav() {
  const history = useHistory();

  const handleLogout = (evt) => {
    localStorage.clear();
    history.push("/");
  }

  return (
    <div className="SideNav">
      <aside className="sidebar">
        <nav>
          <ul className="sidebar__nav">
            <li>
              <a href="/dashboard/recent" className="sidebar__nav__link">
                <FontAwesomeIcon icon={faClock} size="3x" />
                <span className="sidebar__nav__text">Recent</span>
              </a>
            </li>
            <li>
              <a href="/dashboard/analytics" className="sidebar__nav__link">
                <FontAwesomeIcon icon={faChartBar} size="3x" />
                <span className="sidebar__nav__text">Analytics</span>
              </a>
            </li>
            <li>
              <a href="/dashboard/account" className="sidebar__nav__link">
                <FontAwesomeIcon icon={faUserCog} size="3x" />
                <span className="sidebar__nav__text">Account</span>
              </a>
            </li>
            <li>
              <a href="/dashboard/settings" className="sidebar__nav__link">
                <FontAwesomeIcon icon={faCog} size="3x" />
                <span className="sidebar__nav__text">Settings</span>
              </a>
            </li>
            <li>
              <span onClick={handleLogout} className="sidebar__nav__link">
                <FontAwesomeIcon icon={faSignOutAlt} size="3x" />
                <span className="sidebar__nav__text">Logout</span>
              </span>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default SideNav;