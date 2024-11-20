import FooterIcon from "../../atoms/footerIcon/footerIcon";
import FooterLink from "../../atoms/footerLink/footerLink";
import { FeatureTypes } from "@/types/footer";

export const FeatureItem = ({ feature }: { feature: FeatureTypes }) => (
  <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
    <FooterIcon src={feature.icon.src} />
    <ul className="text-sm mt-4 space-y-2">
      <li>
        <FooterLink href={feature.link}>{feature.title}</FooterLink>
      </li>
      <li>
        <FooterLink href={feature.link}>{feature.text}</FooterLink>
      </li>
    </ul>
  </div>
);

export default FeatureItem;
