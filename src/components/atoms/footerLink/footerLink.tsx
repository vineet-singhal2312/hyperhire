import Link from "next/link";

export const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
  >
    {children}
  </Link>
);

export default FooterLink;
