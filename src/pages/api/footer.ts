import type { NextApiRequest, NextApiResponse } from "next";
import logo from "@/assets/images/footerLogo.svg";
import featureIcon1 from "@/assets/images/codeblock.svg";
import featureIcon2 from "@/assets/images/person.svg";
import featureIcon3 from "@/assets/images/abc.svg";
import featureIcon4 from "@/assets/images/settingIcon.svg";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = {
      companyInfo: {
        logo: logo,
        tagline: "우리는 국가와 경계를 넘어 최고의 인재를 매칭해드립니다.",
        phone: "010-0000-0000",
        email: "aaaaa@naver.com",
      },
      features: [
        {
          title: "해외 개발자 원격 채용",
          text: "바로가기",
          icon: featureIcon1,
          link: "#",
          animationDelay: 200,
        },
        {
          title: "외국인 원격 채용 (개발)",
          text: "바로가기",
          icon: featureIcon2,
          link: "#",
          animationDelay: 400,
        },
        {
          title: "한국어 가능 외국인 채용",
          text: "바로가기",
          icon: featureIcon3,
          link: "#",
          animationDelay: 600,
        },
        {
          title: "해외 개발자 활용 서비스",
          text: "바로가기",
          icon: featureIcon4,
          link: "#",
          animationDelay: 800,
        },
      ],
      legalInfo: {
        companyName: {
          title: "상호명",
          korean: "하이퍼하이어",
          english: "Hyperriser India Private Limited",
        },
        ceo: {
          name: {
            korean: "김주현",
            english: "Juhyun Kim",
          },
          title: "대표 CEO",
        },
        registrationNumbers: {
          businessId: "427-85-01157",
          cin: "사업자등록번호 CIN",
          corporateId: "U74100DL2016FTC290812",
        },
        address: {
          korean: "주소 ADDRESS",
          english: "서울특별시 강남대로 479, 지하 1층 238호 ",
          postalCode:
            "D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India",
        },
      },
      footerNote: "ⓒ 2023 Hyperhire",
    };

    res.status(200).json(data);
  } catch (error) {
    console.error("Error in API route:", error);
    res.status(500).json({ error: "Failed to fetch data from the API" });
  }
}
