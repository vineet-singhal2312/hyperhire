import Image from "../image/image";

const FooterIcon = ({ src }: { src: string }) => (
  <Image src={src} alt="featureIcon" width={40} height={40} />
);

export default FooterIcon;
