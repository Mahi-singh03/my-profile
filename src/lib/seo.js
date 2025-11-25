// lib/seo.js

const DOMAIN = "https://www.themahi.in";

const portfolioSEO = {
  title:
    "Manoj Barhpagga (Mahi Singh) | MERN Full-Stack Developer & Programming Instructor",
  description:
    "Official portfolio of Manoj Barhpagga (Mahi Singh) — MERN Stack Developer, Programmer, Instructor specializing in React, Next.js, Node.js, MongoDB, automation systems, institute platforms, exams & certificate generation.",
  keywords: [
    "Manoj Barhpagga",
    "Mahi Singh",
    "Full-Stack Developer Punjab",
    "MERN Developer India",
    "React Developer India",
    "Next.js Portfolio",
    "Node.js Developer",
    "MongoDB Developer",
    "Freelance web developer Punjab",
    "Programming Instructor Punjab",
    "C C++ Python JavaScript Trainer",
    "Exam automation developer",
    "Institute management software",
    "Admin dashboard developer",
    "Online attendance system",
    "SkillUp Institute",
    "Best web developer Punjab",
  ],
  metadataBase: new URL(DOMAIN),

  openGraph: {
    title:
      "Manoj Barhpagga | Full-Stack Developer (MERN) & Programming Instructor",
    description:
      "MERN Developer, Instructor, Automation specialist — explore projects, teaching, dashboards, exam systems & institute software.",
    type: "website",
    locale: "en_IN",
    url: DOMAIN,
    siteName: "Manoj Barhpagga Portfolio",
    images: [
      {
        url:
          "https://res.cloudinary.com/dyigmfiar/image/upload/v1759339653/staff-profiles/cyo6hxrgvyf5d1hdgdi5.png",
        width: 1200,
        height: 630,
        alt: "Manoj Barhpagga | MERN Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Manoj Barhpagga | MERN Developer & Instructor",
    description:
      "Full-Stack Developer & Instructor from Punjab specializing in React, Next.js, Node.js, MongoDB, automation tools and institute systems.",
    images: [
      "https://res.cloudinary.com/dyigmfiar/image/upload/v1759339653/staff-profiles/cyo6hxrgvyf5d1hdgdi5.png",
    ],
  },
};

export default portfolioSEO;
export const DOMAIN_NAME = DOMAIN;
