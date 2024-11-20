import React from "react";
import Image from "next/image";

interface TooltipProps {
  content: string;
  iconSrc?: string;
  children: React.ReactNode;
  textColor?: string;
  position?: "left" | "center" | "right";
  isTipLeft?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  iconSrc,
  children,
  position = "left",
  textColor = "#00C696",
  isTipLeft = false,
}) => {
  const positionClass =
    position === "center"
      ? "left-1/2 -translate-x-1/2"
      : position === "right"
      ? "right-0"
      : "left-0";

  return (
    <div className="relative group">
      {children}
      <div
        className={`absolute w-auto ${
          !isTipLeft && "px-4 py-2 -top-[5rem]"
        }  h-auto group-hover:block text-lg bg-white font-black px-3 py-1 ${positionClass} -top-16 w-max rounded-md shadow-lg before:content-[''] before:w-4 before:h-4 before:rotate-45 before:bg-white before:absolute before:z-10 before:left-1/2 ${
          isTipLeft &&
          "before:left-4 max-md:text-white max-md:bg-[#8BC4FF] max-md:before:bg-[#8BC4FF]"
        } before:-translate-x-1/4 before:-bottom-1`}
      >
        <div className={`flex text-[${textColor}] items-center`}>
          {iconSrc && (
            <Image
              className="w-7 h-7 p-1 mr-3 rounded-full bg-green-200"
              src={iconSrc}
              alt="icon"
            />
          )}{" "}
          {content}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
