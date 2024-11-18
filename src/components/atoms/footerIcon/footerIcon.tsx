import Image from "../image/image";

const FooterIcon = ({ src }: { src: string }) => (
  <Image src={src} alt="featureIcon" width={30} height={30} />
);

export default FooterIcon;
