import Image from "../../atoms/image/image";
import Heading from "../../atoms/heading/heading";
import Carousel from "../carousel/carousel";
import CheckboxField from "../../atoms/input/input";
import { useState } from "react";
import { Category, HeroData } from "@/types/hero";
import HeroLeft from "../../molecules/heroLeft/heroLeft";
import { Text } from "../../atoms/text/text";
import SlickSlider from "../slider/Slider";

export default function HeroHome({
  title,
  subtitle,
  highlight,
  features,
  profiles,
  categories = [],
  tooltip,
  heroTooltip,
}: HeroData) {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <section>
      <div className="mx-auto max-w-full mt-[164px] max-md:mt-[130px] px-0">
        <div className="">
          <div className="flex flex-col items-start justify-between md:flex-row pb-2 max-md:pb-0">
            <HeroLeft
              title={title}
              subtitle={subtitle}
              highlight={highlight}
              features={features}
              heroTooltip={heroTooltip}
            />

            <div className="flex justify-center w-[50%]  max-md:w-full">
              <Carousel profiles={profiles} tooltipItems={tooltip} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 max-md:gap-1 w-full decoration-transparent animate-fadeIn delay-500">
          {categories.map((category: Category, index: number) => (
            <CheckboxField
              key={index}
              id={category.title}
              label={category.title}
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="flex text-xl lg:hidden"
            />
          ))}
        </div>

        <Heading
          text={highlight}
          level={3}
          className="flex lg:hidden text-[#FBFF23] text-xl mt-8 pb-4 font-poppins font-extrabold text-left underline decoration-[#FBFF23] cursor-pointer animate-fadeIn delay-500 max-md:mb-8"
        />

        <div className="flex gap-3 flex-nowrap overflow-hidden max-md:hidden">
          <SlickSlider categories={categories} />
        </div>
      </div>
    </section>
  );
}
