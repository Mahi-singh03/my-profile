import Image from "next/image";
import portfolioSEO from "@/src/lib/seo";


export const metadata = {
  title: "Contact | Hire Manoj Barhpagga | MERN Developer & Instructor",
  description:
    "Get in touch with Manoj Barhpagga for freelance projects, teaching, MERN development, dashboards, automation systems, institute software & web applications.",
  alternates: { canonical: `${DOMAIN_NAME}/contact` },
  openGraph: { url: `${DOMAIN_NAME}/contact` }
};

export default function Home() {
  return (
 <>
 <h1>Contect</h1>
 </>
  );
}
