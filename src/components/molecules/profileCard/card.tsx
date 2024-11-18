import Image from "../../atoms/image/image";
import React from "react";

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
}) => (
  <div className="p-4 border rounded-md bg-white text-center w-[220px]">
    <div className="relative flex justify-center items-center mb-2">
      <Image
        src={avatar}
        alt="avatar"
        width={100}
        height={100}
        className="rounded-full"
      />

      <Image
        src={badge}
        alt="badge"
        width={20}
        height={20}
        className="absolute bottom-0 right-16 rounded-sm"
      />
    </div>
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-sm text-blue-700 ">
      {role} • {experience}
    </p>
    <div className="mt-4 space-y-1">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default ProfileCard;
