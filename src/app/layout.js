import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahi Singh",
  description: "i am a coder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Manoj Barhpagga",
              alternateName: "Mahi Singh",
              url: "https://www.themahi.in/",
              image:
                "https://res.cloudinary.com/dyigmfiar/image/upload/v1759339653/staff-profiles/cyo6hxrgvyf5d1hdgdi5.png",
              jobTitle:
                "Full-Stack Developer (MERN) | Programmer | Instructor",
              sameAs: [
                "https://github.com/Mahi-singh03",
                "https://www.skillupinstitute.co.in/",
                "https://onlineattendance-two.vercel.app/",
              ],
              knowsAbout: [
                "React.js",
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Web development",
                "Automation systems",
                "Online exam systems",
                "Certificate generation",
                "Teaching C C++ Python JavaScript"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
