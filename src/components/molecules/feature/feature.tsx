import React from "react";
import Heading from "../../atoms/heading/heading";

interface FeatureProps {
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => (
  <div className="p-2 border-t-2 border-white text-white text-left">
    <Heading level={3} text={title} className="text-md" />
    <p className="text-xs mt-1">{description}</p>
  </div>
);

export default Feature;
