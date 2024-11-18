import React from "react";
import ProfileCard from "../../molecules/profileCard/card";

interface ProfileListProps {
  profiles: {
    name: string;
    role: string;
    experience: string;
    country: string;
    skills: string[];
    avatar: string;
    badge: string;
  }[];
}

const ProfileList: React.FC<ProfileListProps> = ({ profiles }) => (
  <div className="grid gap-4 items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {profiles.map((profile, index) => (
      <ProfileCard key={index} {...profile} />
    ))}
  </div>
);

export default ProfileList;
