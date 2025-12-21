import { DOMAIN_NAME } from "@/src/lib/seo";

// This is for Google Search Console / Rich Results
export default function manifest() {
  return {
    name: "Manoj Barhpagga | MERN Full-Stack Developer & Programming Instructor",
    short_name: "Manoj Barhpagga",
    description:
      "Official portfolio of Manoj Barhpagga (Mahi Singh) — MERN Stack Developer, Programmer, Instructor",
    start_url: DOMAIN_NAME,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    screenshots: [
      {
        src: "https://res.cloudinary.com/dyigmfiar/image/upload/v1759339653/staff-profiles/cyo6hxrgvyf5d1hdgdi5.png",
        type: "image/png",
        sizes: "1200x630",
      },
    ],
  };
}
