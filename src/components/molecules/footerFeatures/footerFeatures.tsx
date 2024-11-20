"use client";

import { FeatureTypes } from "@/types/footer";
import FeatureItem from "../footerItems/footerItems";

export const FooterFeatures = ({
  features = [],
}: {
  features: FeatureTypes[];
}) => (
  <>
    {features.map((feature, index) => (
      <FeatureItem key={index} feature={feature} />
    ))}
  </>
);

export default FooterFeatures;
