import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { APP_NAME, MENU_ITEMS as menu_items, PROTECTED_MENU_ITEMS as protected_menu_items } from "../constants/constants";

function Header({ authd = true }) {
  const icon_style = "[&_svg]:w-3 [&_svg]:h-3 [&_svg]:fill-current";

  return (
    <header className="navbar bg-primary text-neutral-100 shadow-xl text-sm">
      <div className="flex-1 mr-10">
        <a className="btn btn-ghost p-2 text-center " href="/">
          <img src={logo} className="w-8" alt="icon" />
          <h3>{APP_NAME}</h3>
        </a>
      </div>
      <div className="flex-none">
        {/* Dropdown when small */}
        <div className="lg:hidden dropdown dropdown-hover dropdown-end">
          <button
            className="btn btn-square btn-ghost"
            role="button"
            tabIndex={0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <ul
            className="dropdown-content menu w-54 p-4 mt-4 rounded-box bg-neutral text-neutral-content shadow-sm"
            tabIndex={0}
          >
            {authd === false
              ?
               menu_items.map((item, index) => (
                  <li key={index}>
                    <Link to={item.nav_link} className={`${icon_style}`}>
                      {item.icon}
                      {item.nav_title}
                    </Link>
                  </li>
                ))
              : protected_menu_items.map((item, index) => (
                  <li key={index} >
                    <Link to={item.nav_link} className={`${icon_style}`}>
                      {item.icon}
                      {item.nav_title}
                    </Link>
                  </li>
                ))}
          </ul>
        </div>
        {/* Dropdown when large */}
        <div className="flex-1 max-lg:hidden">
          <ul className="menu menu-horizontal w-full" tabIndex={0}>
            {authd === false
              ? menu_items.map((item, index) => (
                  <li key={index} >
                    <Link to={item.nav_link}>{item.nav_title}</Link>
                  </li>
                ))
              : protected_menu_items.map((item, index) => (
                  <li key={index}>
                    <Link to={item.nav_link}>{item.nav_title}</Link>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
