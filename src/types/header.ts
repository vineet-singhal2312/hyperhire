export type NavLink = {
  text: string;
  href: string;
  icon?: string;
};

export type HeaderDataType = {
  logo: string;
  navLinks: NavLink[];
  button: string;
};
