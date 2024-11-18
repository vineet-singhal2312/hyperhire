import React from "react";
import Image from "next/image";

interface TooltipProps {
  content: string;
  iconSrc?: string;
  children: React.ReactNode;
  position?: "left" | "center" | "right";
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  iconSrc,
  children,
  position = "left",
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
        className={`absolute group-hover:block bg-white text-[#00C696] font-semibold px-3 py-[6px] text-[13px] ${positionClass} -top-10 w-max rounded-md shadow-lg before:content-[''] before:w-4 before:h-4 before:rotate-45 before:bg-white before:absolute before:z-10 before:left-1/2 before:-translate-x-1/2 before:-bottom-1`}
      >
        <div className="flex items-center gap-2">
          {iconSrc && <Image src={iconSrc} alt="icon" />} {content}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
