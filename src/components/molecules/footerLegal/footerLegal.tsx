"use client";
import LegalItem from "../legalItem/legalItem";
import { LegalInfoTypes } from "@/types/footer";

export const FooterLegal = ({ legalInfo }: { legalInfo: LegalInfoTypes }) => (
  <>
    <LegalItem
      className="sm:col-span-6 md:col-span-3 lg:col-span-2"
      title={legalInfo.companyName.title}
      links={[legalInfo.companyName.korean, legalInfo.companyName.english]}
    />
    <LegalItem
      className="sm:col-span-6 md:col-span-3 lg:col-span-2"
      title={legalInfo.ceo.title}
      links={[legalInfo.ceo.name.korean, legalInfo.ceo.name.english]}
    />
    <LegalItem
      className="col-span-2 lg:col-span-2"
      title={legalInfo.registrationNumbers.cin}
      links={[
        legalInfo.registrationNumbers.businessId,
        legalInfo.registrationNumbers.corporateId,
      ]}
    />
    <LegalItem
      className="col-span-2 lg:col-span-3"
      title={legalInfo.address.korean}
      links={[legalInfo.address.english, legalInfo.address.postalCode || ""]}
    />
  </>
);

export default FooterLegal;
