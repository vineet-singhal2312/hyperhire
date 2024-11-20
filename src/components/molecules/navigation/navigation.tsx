import React from "react";
import NavLink from "../../atoms/navlink/navLink";

type NavLinkType = {
  text: string;
  href: string;
  icon?: string;
};

type NavigationProps = {
  links: NavLinkType[];
};

const Navigation = ({ links = [] }: NavigationProps) => (
  <nav className="flex items-center space-x-6">
    {links.map((link, index) => (
      <NavLink
        key={index}
        text={link.text}
        href={link.href}
        icon={link?.icon}
      />
    ))}
  </nav>
);

export default Navigation;
