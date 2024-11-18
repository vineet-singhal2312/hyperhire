"use client";

import Logo from "../../atoms/logo/logo";
import Button from "../../atoms/button/button";
import Navigation from "../../molecules/navigation/navigation";
import { HeaderDataType } from "@/types/header";

export default function Header({ header }: { header: HeaderDataType }) {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      {header && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl">
            <div className="flex flex-1 items-center">
              <Logo logo={header.logo} />
            </div>

            <nav className="hidden md:flex md:grow">
              <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
                <Navigation links={header.navLinks} />
              </ul>
            </nav>

            <ul className="hidden md:flex md:flex-1 items-center justify-end gap-3">
              <Button
                label={header.button}
                className="text-sm hover:text-blue-300"
              />
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
