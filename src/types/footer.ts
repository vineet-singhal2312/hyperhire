export type FeatureTypes = {
  title: string;
  icon: {
    src: string;
    height: number;
    width: number;
    blurWidth: number;
    blurHeight: number;
  };
  link: string;
  animationDelay: number;
  text: string;
};

export type CompanyInfoTypes = {
  logo: string;
  tagline: string;
  phone: string;
  email: string;
};

export type LegalInfoTypes = {
  companyName: {
    title: string;
    korean: string;
    english: string;
  };
  ceo: {
    name: {
      korean: string;
      english: string;
    };
    title: string;
  };
  registrationNumbers: {
    cin: string;
    businessId: string;
    corporateId: string;
  };
  address: {
    korean: string;
    english: string;
    postalCode?: string;
  };
};

export type FooterDataTypes = {
  companyInfo: CompanyInfoTypes;
  features: FeatureTypes[];
  legalInfo: LegalInfoTypes;
  footerNote: string;
};
