import Image from "../../atoms/image/image";
import Heading from "../../atoms/heading/heading";
import Carousel from "../carousel/carousel";
import CheckboxField from "../../atoms/input/input";
import { useState } from "react";
import { Category, HeroData } from "@/types/hero";
import HeroLeft from "../../molecules/heroLeft/heroLeft";
import { Text } from "../../atoms/text/text";

export default function HeroHome({
  title,
  subtitle,
  highlight,
  features,
  profiles,
  categories,
  tooltip,
  heroTooltip,
}: HeroData) {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <section>
      <div className="mx-auto max-w-7xl px-0 sm:px-6">
        <div className="pt-20">
          <div className="flex flex-col items-start justify-between md:flex-row md:gap-8 pb-8 lg:gap-16">
            <HeroLeft
              title={title}
              subtitle={subtitle}
              highlight={highlight}
              features={features}
              heroTooltip={heroTooltip}
            />

            <div className="flex justify-center w-full">
              <Carousel profiles={profiles} tooltipItems={tooltip} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full decoration-transparent animate-fadeIn delay-500">
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
          className="flex lg:hidden text-[#FBFF23] text-xl mt-8 pb-4 font-poppins font-extrabold text-left underline decoration-[#FBFF23] cursor-pointer animate-fadeIn delay-500"
        />

        <div className="flex gap-3 flex-nowrap overflow-hidden animate-slideLeft">
          {categories.map((category: Category, index: number) => (
            <div
              className="hidden lg:flex bg-gray-100/20 mb-4 backdrop-blur-sm rounded-xl p-3 w-[19%] animate-fadeIn"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-gray-100/20 p-2 rounded-lg">
                  <Image
                    src={category.icon}
                    alt={category.title}
                    className="w-5 h-5 text-cyan-800"
                  />
                </div>
                <Text
                  content={category.title}
                  className="text-white text-md font-bold"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
