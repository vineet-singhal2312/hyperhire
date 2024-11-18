import type { NextApiRequest, NextApiResponse } from "next";
import avatar from "@/assets/images/avatar.svg";
import badge from "@/assets/images/flag.svg";
import camera from "@/assets/images/icon-marketing.svg";
import image from "@/assets/images/icon-image.svg";
import cube from "@/assets/images/cube.svg";
import target from "@/assets/images/icon-target.svg";
import tooltipIcon from "@/assets/images/Group 5095.svg";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = {
      title: "최고의 실력을 가진외국인 인재를 찾고 계신가요?",
      subtitle: "법률 및 인사관리 부담없이1주일 이내에 원격으로 채용해보세요.",
      highlight: "개발자가 필요하신가요?",
      heroTooltip: "풀타임, 파트타임",
      profiles: [
        {
          name: "Abhishek Gupta",
          role: "마케팅",
          experience: "2y+",
          country: "IN",
          skills: [
            "마케팅 콘텐츠 제작",
            "인스타그램 관리",
            "트위터 관리",
            "블로그 글 작성",
          ],
          avatar: avatar,
          badge: badge,
        },
        {
          name: "Shubham Nair",
          role: "마케팅",
          experience: "4y+",
          country: "IN",
          skills: [
            "마케팅 콘텐츠 제작",
            "인스타그램 관리",
            "트위터 관리",
            "블로그 글 작성",
          ],
          avatar: avatar,
          badge: badge,
        },
        {
          name: "Naman Jain",
          role: "마케팅",
          experience: "3y+",
          country: "IN",
          skills: [
            "마케팅 콘텐츠 제작",
            "인스타그램 관리",
            "트위터 관리",
            "블로그 글 작성",
          ],
          avatar: avatar,
          badge: badge,
        },
      ],
      features: [
        {
          title: "평균 월 120만원",
          description: "입금을 해당 국가를 기준으로 계산합니다.",
          animationDelay: 500,
        },
        {
          title: "최대 3회 인력교체",
          description: "막상 채용해보니 맞지 않아도 걱정하지 마세요.",
          animationDelay: 500,
        },
        {
          title: "평균 3일, 최대 10일",
          description: "급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.",
          animationDelay: 500,
        },
      ],
      categories: [
        { title: "해외 마케팅", icon: camera },
        { title: "퍼블리셔", icon: image },
        { title: "카드원(제도사)", icon: cube },
        { title: "해외 세일즈", icon: target },
      ],
      tooltip: {
        data: "월 100만원",
        icon: tooltipIcon,
      },
    };

    res.status(200).json(data);
  } catch (error) {
    console.error("Error in API route:", error);
    res.status(500).json({ error: "Failed to fetch data from the API" });
  }
}
