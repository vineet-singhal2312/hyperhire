import React from "react";
import Image from "../image/image";

type NavLinkProps = {
  text: string;
  href: string;
  icon?: string;
};

const NavLink = ({ text, href, icon }: NavLinkProps) => (
  <a
    href={href}
    className="text-white flex items-center gap-2 font-black text-base hover:text-gray-300 mx-3"
  >
    {text} {icon && <Image src={icon} alt="text" className="rotate-90 m-1" />}
  </a>
);

export default NavLink;
