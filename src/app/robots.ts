import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: ["/api", "/dashboard"],
      allow: "/",
    },
    sitemap: "https://meusite.com/sitemap.xml",
  };
}
