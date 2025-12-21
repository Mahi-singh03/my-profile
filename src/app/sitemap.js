import { DOMAIN_NAME } from "@/src/lib/seo";

export default async function sitemap() {
  return [
    {
      url: `${DOMAIN_NAME}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
      images: [
        {
          url: "https://res.cloudinary.com/dyigmfiar/image/upload/v1759339653/staff-profiles/cyo6hxrgvyf5d1hdgdi5.png",
          title: "Manoj Barhpagga - MERN Developer",
        },
      ],
    },
    {
      url: `${DOMAIN_NAME}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        {
          url: "https://res.cloudinary.com/dyigmfiar/image/upload/v1759339653/staff-profiles/cyo6hxrgvyf5d1hdgdi5.png",
          title: "Manoj Barhpagga - Projects Portfolio",
        },
      ],
    },
    {
      url: `${DOMAIN_NAME}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
      images: [
        {
          url: "https://res.cloudinary.com/dyigmfiar/image/upload/v1759339653/staff-profiles/cyo6hxrgvyf5d1hdgdi5.png",
          title: "Contact Manoj Barhpagga",
        },
      ],
    },
  ];
}
