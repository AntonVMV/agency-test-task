import React, { HTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
  links: string[];
}

export const NavBar: React.FC<NavBarProps> = ({ links, ...rest }) => {
  return (
    <nav {...rest}>
      {links.map((item, index) => {
        return (
          <NavLink to={`${item}`} key={index}>
            {item}
          </NavLink>
        );
      })}
    </nav>
  );
};
