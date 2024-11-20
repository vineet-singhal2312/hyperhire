"use client";
import FooterLogo from "../../atoms/footerLogo/footerLogo";
import { Text } from "../../atoms/text/text";
import { CompanyInfoTypes } from "@/types/footer";

const ContactInfo = ({ logo, tagline, phone, email }: CompanyInfoTypes) => (
  <div className="col-span-2 lg:col-span-4 lg:max-w-xs">
    <div className="mb-2">
      <FooterLogo src={logo} />
    </div>
    <Text content={tagline} className="text-sm text-slate-800" />

    <Text content={phone} className="text-xs mt-2 text-slate-800" />
    <Text content={email} className="text-xs mt-2 text-slate-800" />
  </div>
);

export default ContactInfo;
