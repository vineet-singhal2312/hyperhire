"use client";

import ContactInfo from "../../molecules/contactInfo/contactInfo";
import FooterFeatures from "../../molecules/footerFeatures/footerFeatures";
import FooterLegal from "../../molecules/footerLegal/footerLegal";
import { Text } from "../../atoms/text/text";
import { FooterDataTypes } from "@/types/footer";

export default function Footer({ footer }: { footer: FooterDataTypes }) {
  return (
    <footer>
      {footer && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-6 lg:grid-cols-12 gap-8 py-8 md:py-12">
            <ContactInfo {...footer.companyInfo} />

            <FooterFeatures features={footer.features} />
            <FooterLegal legalInfo={footer.legalInfo} />
          </div>
          <div className="md:flex md:items-center md:justify-between py-6 md:py-8">
            <Text
              content={footer.footerNote}
              className="text-sm text-slate-900 font-bold mr-4"
            />
          </div>
        </div>
      )}
    </footer>
  );
}
