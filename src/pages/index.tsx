import localFont from "next/font/local";
import Header from "../components/templates/header/header";
import Footer from "../components/templates/footer/footer";
import { HeroData } from "@/types/hero";
import { FooterDataTypes } from "@/types/footer";
import { HeaderDataType } from "@/types/header";
import Hero from "../components/templates/hero/hero";

// Load the custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface Props {
  heroData: HeroData;
  footerData: FooterDataTypes;
  headerData: HeaderDataType;
}

export default function Home({ heroData, footerData, headerData }: Props) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <div className="bg-gradient-to-r from-teal-400 to-blue-500 flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
        <div className="px-4 w-full">
          {headerData && <Header header={headerData} />}
          {heroData && <Hero heroData={heroData} />}
        </div>
      </div>
      {footerData && <Footer footer={footerData} />}
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const [heroRes, footerRes, headerRes] = await Promise.all([
      fetch(`${API_URL}/api/hero`),
      fetch(`${API_URL}/api/footer`),
      fetch(`${API_URL}/api/header`),
    ]);

    const [heroData, footerData, headerData] = await Promise.all([
      heroRes.json(),
      footerRes.json(),
      headerRes.json(),
    ]);

    return { props: { heroData, footerData, headerData } };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      props: {
        heroData: { title: "Error", subtitle: "Failed to load hero data" },
        footerData: { title: "Error", subtitle: "Failed to load footer data" },
        headerData: { title: "Error", subtitle: "Failed to load header data" },
      },
    };
  }
};
