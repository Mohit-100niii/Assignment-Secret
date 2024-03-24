import "../styles/navbar.sass"; // Import your custom Sass styles here
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import Icon from "../assets/images/icon-ecomm.png";

export const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchbar, setSearchbar] = useState(false);

  const [menuItems, setMenuItems] = useState([
    "Home",
    "Electronic",
    "Books",
    "Music",
    "Movies",
    "Clothing",
    "Games",
    "Electronic",
    "Travel",
    "Botanical",
  ]);
  const [visibleMenuItems, setVisibleMenuItems] = useState(7); // Initial number of menu items to display

  const [dropMenu, setDropMenu] = useState([
    "Home",
    "Electronic",
    "Books",
    "Music",
    "Movies",
    "Clothing",
    "Games",
    "Furniture",
    "Electronic",
    "Travel",
    "Botanical",
  ]);

  const [visibleMoreItems, setVisibleMoreItems] = useState(4);

  useEffect(() => {
    const updateMenuItems = () => {
      const width = window.innerWidth;

      if (width <= 640) {
        setVisibleMenuItems(1);
        setVisibleMoreItems(10);
      } else if (width > 640 && width <= 768) {
        setVisibleMenuItems(2);
        setVisibleMoreItems(8);
      } else if (width > 768 && width <= 1024) {
        setVisibleMenuItems(4);
        setVisibleMoreItems(6);
      } else {
        setVisibleMenuItems(7);
        setVisibleMoreItems(3);
      }
      if (width <= 1150) setSearchbar(false);
      else setSearchbar(true);
    };

    // Listen for window resize event
    window.addEventListener("resize", updateMenuItems);

    // Initial call to set menu items based on window width
    updateMenuItems();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateMenuItems);
    };
  }, []);

  return (
    <>
      <div className="main-menu">
        <div className="company-name">
          <img src={Icon} /> E-COMM
        </div>
        <div className="menu-list">
          {menuItems.slice(0, visibleMenuItems).map((item, index) => (
            <Link to={`/${item}`} key={index} className="menu-link">
              <h4 key={index}>{item}</h4>
            </Link>
          ))}
          <button
            className="more-button"
            onClick={() => setDropdownVisible(!dropdownVisible)} // Toggle dropdown visibility
          >
            <h4
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: "5px",
              }}
            >
              More
              {dropdownVisible && ( // Render Dropdown component only when dropdownVisible is true
                <Dropdown
                  dropMenu={dropMenu}
                  visibleMenuItems={visibleMenuItems}
                  visibleMoreItems={visibleMoreItems}
                />
              )}
            </h4>
            <svg
              height="24"
              viewBox="0 0 48 48"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              style={{ display: "inline-block", verticalAlign: "middle" }}
            >
              <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z" />
              <path d="M0-.75h48v48h-48z" fill="none" />
            </svg>
          </button>
        </div>
        {searchbar && <Searchbar />}
      </div>
      
    </>
  );
};
