import Image from "@/components/atoms/image/image";
import { Text } from "@/components/atoms/text/text";
import { Category } from "@/types/hero";
import Slider from "react-slick";

function SlickSlider({ categories }: { categories: Category[] }) {
  console.log(categories);
  //   let sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="slider-container w-full gap-4">
      <Slider {...settings}>
        {categories.map((category: Category, index: number) => (
          <div
            className="hidden lg:flex gap-4 bg-gray-100/20 mb-4 backdrop-blur-sm rounded-xl p-3 w-[30px] mx-4 animate-fadeIn"
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-gray-100/20 p-2 rounded-lg">
                <Image
                  src={category.icon}
                  alt={category.title}
                  className="w-[22px] h-[22px] text-cyan-800"
                />
              </div>
              <Text
                content={category.title}
                className="text-white text-md font-black text-2xl ml-2"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default SlickSlider;
