import Image from "../../atoms/image/image";
import React, { useEffect, useState } from "react";
// import { isMobile } from "react-device-detect";

interface ProfileCardProps {
  name: string;
  role: string;
  experience: string;
  skills: string[];
  avatar: string;
  badge: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  experience,
  skills,
  avatar,
  badge,
}) => {
  const [width, setWidth] = useState<number>(0);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    if (window) window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      if (window) window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return (
    <div className="p-8 max-md:p-6 border rounded-xl font-black font-poppins rounded-md bg-white text-center h-[408px] w-[292px] max-md:h-[311px] max-md:w-[234px]">
      <div className="relative flex justify-center items-center mb-2">
        <Image
          src={avatar}
          alt="avatar"
          width={isMobile ? 64 : 120}
          height={isMobile ? 64 : 120}
          className="rounded-full"
        />

        <Image
          src={badge}
          alt="badge"
          width={25}
          height={18}
          className="absolute bottom-0 right-16 max-md:right-14 rounded-sm"
        />
      </div>
      <h3 className="text-2xl max-md:text-lg max-md:leading-9 leading-9 mt-4">
        {name}
      </h3>
      <p className="text-base max-md:text-sm text-[#4A77FF] mt-1 max-md:mt-0">
        {role} • {experience}
      </p>
      <div className="mt-9 max-md:mt-4 space-y-1">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="inline-block text-base border-solid border-2 bg-gray-50 border-[#C1C5CF] text-gray-700 text-xs px-3 py-1 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
