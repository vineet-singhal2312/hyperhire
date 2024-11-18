import Heading from "../../atoms/heading/heading";
import Tooltip from "../../organisms/tooltip/tooltip";
import FeatureList from "../../organisms/featureList/featureList";
import { Feature } from "@/types/hero";

interface HeroLeftProps {
  title: string;
  subtitle: string;
  highlight: string;
  features: Feature[];
  heroTooltip: string;
}
const HeroLeft = ({
  title,
  subtitle,
  highlight,
  features,
  heroTooltip,
}: HeroLeftProps) => {
  return (
    <div className="flex flex-col">
      <Tooltip content={heroTooltip}>
        <Heading
          text={title}
          level={1}
          className="text-3xl leading-1 text-white pb-4 font-poppins font-extrabold lg:text-4xl lg:leading-[48px] text-left underline decoration-transparent animate-fadeIn delay-300"
        />
      </Tooltip>

      <Heading
        text={subtitle}
        level={2}
        className="text-lg font-lighter leading-1 text-white pb-4 font-poppins lg:font-extrabold lg:text-3xl lg:leading-[48px] text-left underline decoration-transparent animate-fadeIn delay-500"
      />

      <Heading
        text={highlight}
        level={3}
        className="hidden lg:flex text-white pb-4 font-poppins font-extrabold text-2xl leading-[48px] text-left underline animate-fadeIn delay-500"
      />

      <FeatureList features={features} />
    </div>
  );
};

export default HeroLeft;
