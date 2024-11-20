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
    <div className="flex flex-col md:w-[50%]">
      <Tooltip textColor="#40E2E8" isTipLeft={true} content={heroTooltip}>
        <Heading
          text={title}
          level={1}
          className="text-5xl max-md:text-4xl mb-1 leading-1 text-white pb-4 leading-[62px] underline decoration-transparent animate-fadeIn delay-300"
        />
      </Tooltip>

      <Heading
        text={subtitle}
        level={2}
        className="max-md:text-lg text-2xl mb-2.5 font-lighter leading-[34px] text-white pb-4 underline decoration-transparent animate-fadeIn delay-500"
      />

      <Heading
        text={highlight}
        level={3}
        className="hidden mb-12 lg:flex text-white pb-4 text-lg leading-[27px] text-left underline animate-fadeIn delay-500"
      />

      <FeatureList features={features} />
    </div>
  );
};

export default HeroLeft;
