import "./Header.css";
import "../assets/menu_1000dp_000000_FILL0_wght400_GRAD0_opsz48.svg";

function Header(props) {
  const { title } = props;
  return (
    <div className="header">
      <header>
        <div className="logo-section">
          <img src="../../public/vite.svg" alt=".logo MorthyApp" />
          <h1>Rick&MorthyApp_</h1>
        </div>
        <div className="menu-section">
          <nav className="navigation">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Feature</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Company</a>
              </li>
            </ul>
          </nav>
          <div className="button-menu">
            <button>
              <img
                src="../assets/menu_1000dp_000000_FILL0_wght400_GRAD0_opsz48.svg"
                alt="menu.svg"
              />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
