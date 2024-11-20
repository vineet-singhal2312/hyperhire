import React from "react";
import Feature from "../../molecules/feature/feature";

interface FeatureListProps {
  features: {
    title: string;
    description: string;
  }[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features = [] }) => (
  <div className="hidden  decoration-transparent animate-fadeIn delay-500 lg:grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {features.map((feature, index) => (
      <Feature key={index} {...feature} />
    ))}
  </div>
);

export default FeatureList;
