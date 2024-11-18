import Image from "../image/image";

export const FooterLogo = ({ src }: { src: string }) => (
  <Image src={src} alt="footerLogo" width={187} height={34} />
);

export default FooterLogo;
