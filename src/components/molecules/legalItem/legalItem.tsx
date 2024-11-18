"use client";
import Heading from "../../atoms/heading/heading";
import FooterLink from "../../atoms/footerLink/footerLink";

export const LegalItem = ({
  title,
  links,
  className,
}: {
  title: string;
  links: string[];
  className?: string;
}) => (
  <div className={`${className}`}>
    <Heading
      text={title}
      className="text-sm text-slate-800 font-semibold mb-2"
    />
    <ul className="text-sm font-medium space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <FooterLink href="#">{link}</FooterLink>
        </li>
      ))}
    </ul>
  </div>
);

export default LegalItem;
