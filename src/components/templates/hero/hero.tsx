import React from "react";
import HeroHome from "../../organisms/hero/hero-home";
import { HeroData } from "@/types/hero";

function Hero({ heroData }: { heroData: HeroData }) {
  const {
    title,
    subtitle,
    highlight,
    heroTooltip,
    features,
    profiles,
    categories,
    tooltip,
  } = heroData;
  return (
    <HeroHome
      title={title}
      subtitle={subtitle}
      highlight={highlight}
      heroTooltip={heroTooltip}
      features={features}
      profiles={profiles}
      categories={categories}
      tooltip={tooltip}
    />
  );
}

export default Hero;
