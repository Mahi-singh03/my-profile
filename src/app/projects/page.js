import Image from "next/image";
import portfolioSEO from "@/src/lib/seo";



export const metadata = {
    title: "Projects | Manoj Barhpagga | MERN Full-Stack Developer",
    description:
      "Explore full-stack MERN projects including SkillUp Institute Website, Online Attendance System, Staff Management System, dashboards and automation modules.",
    alternates: {
      canonical: `${DOMAIN_NAME}/projects`
    },
    openGraph: {
      url: `${DOMAIN_NAME}/projects`
    }
  };

export default function Home() {
  return (
 <>
 <h1>Projects</h1>
 </>
  );
}
