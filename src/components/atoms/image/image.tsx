import NextImage from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

const Image = ({ src, alt, className, width, height }: ImageProps) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
};

export default Image;
