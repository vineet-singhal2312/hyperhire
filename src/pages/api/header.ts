import logo from "@/assets/images/logo.svg";
import caret from "@/assets/images/caret.svg";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = {
      logo: logo,
      navLinks: [
        { text: "채용", href: "/", icon: caret },
        { text: "해외 개발자 활용 서비스", href: "/" },
      ],
      button: "문의하기",
    };

    res.status(200).json(data);
  } catch (error) {
    console.error("Error in API route:", error);
    res.status(500).json({ error: "Failed to fetch data from the API" });
  }
}
