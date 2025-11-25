import { DOMAIN_NAME } from "@/src/lib/seo";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin",
    },
    sitemap: `${DOMAIN_NAME}/sitemap.xml`,
  };
}
