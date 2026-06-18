import type { MetadataRoute } from "next";

const BASE_URL = "https://www.struct.solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/work", "/about", "/contact"];
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
