import React from "react";
import {NavLink} from "./navLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link:any, index:number) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;