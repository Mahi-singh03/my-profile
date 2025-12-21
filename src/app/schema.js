// schema.js - Structured Data for SEO

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Manoj Barhpagga",
  alternateName: "Mahi Singh",
  url: "https://www.themahi.in/",
  image:
    "https://res.cloudinary.com/dyigmfiar/image/upload/v1759339653/staff-profiles/cyo6hxrgvyf5d1hdgdi5.png",
  jobTitle:
    "Full-Stack Developer (MERN) | Programmer | Instructor",
  email: "Manojbarhpagga@gmail.com",
  location: {
    "@type": "Place",
    name: "Punjab, India",
  },
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
    "Teaching C C++ Python JavaScript",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Full-Stack Developer",
    skills: ["React", "Next.js", "Node.js", "MongoDB", "MERN Stack"],
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Manoj Barhpagga Portfolio",
  url: "https://www.themahi.in/",
  logo:
    "https://res.cloudinary.com/dyigmfiar/image/upload/v1759339653/staff-profiles/cyo6hxrgvyf5d1hdgdi5.png",
  description:
    "Official portfolio of MERN Full-Stack Developer & Programming Instructor",
  sameAs: [
    "https://github.com/Mahi-singh03",
    "https://www.skillupinstitute.co.in/",
    "https://onlineattendance-two.vercel.app/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    email: "Manojbarhpagga@gmail.com",
  },
};
