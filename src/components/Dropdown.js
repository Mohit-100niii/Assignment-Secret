import React, { useState } from "react";
import "../styles/dropdown.sass";
import { Link } from "react-router-dom";



export default function Dropdown({
  dropMenu,
  visibleMoreitems,
  visibleMenuItems,
}) {
  const [dropdown, setdropdown] = useState(false);
  

  return (
    <>
      <ul
        className={dropdown ? "more-menu-list clicked" : "more-menu-list"}
        onClick={() => setdropdown(!dropdown)}
      >
       
        {dropMenu
          .slice(visibleMenuItems, visibleMoreitems)
          .map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item}`}
                className="more-li-items"
                onclick={() => setdropdown(false)}
              >
                {item}{" "}
              </Link>
            </li>
          ))}
          
      </ul>
    </>
  );
}
