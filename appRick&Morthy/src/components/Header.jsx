import { NavLink } from 'react-router';
import styles from '../styles/Navbar.module.css';

function Header() {
  return (
    <nav className={styles.header}>
      <div className="logo-section">
        <h1>Rick&MorthyApp_</h1>
      </div>
      <div className="menu-section">
        <nav className="navigation">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.navActive : styles.navInactive)}
              >
                Home
              </NavLink>
              {/* <a href="#"></a> */}
            </li>
            <li>
              <NavLink
                to="/characters"
                className={({ isActive }) => (isActive ? styles.navActive : styles.navInactive)}
              >
                Characters
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/chapters"
                className={({ isActive }) => (isActive ? styles.navActive : styles.navInactive)}
              >
                Chapters
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/opinion"
                className={({ isActive }) => (isActive ? styles.navActive : styles.navInactive)}
              >
                Your opinion
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="button-menu"></div>
      </div>
    </nav>
  );
}

export default Header;
