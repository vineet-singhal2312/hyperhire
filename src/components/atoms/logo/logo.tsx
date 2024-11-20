import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ logo }: { logo: string }) => (
  <Link href="#">
    <Image src={logo} alt="logo" width={114} height={21} />
  </Link>
);

export default Logo;
