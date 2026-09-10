import type { MetadataRoute } from "next";

const BASE_URL = "https://www.struct.solutions";

export const dynamic = "force-static";

// Bump a route's lastModified when that page's content meaningfully changes.
const ROUTES: { path: string; lastModified: string; priority: number }[] = [
  { path: "", lastModified: "2026-09-10", priority: 1 },
  { path: "/services", lastModified: "2026-09-10", priority: 0.9 },
  { path: "/about", lastModified: "2026-09-09", priority: 0.7 },
  { path: "/contact", lastModified: "2026-09-09", priority: 0.8 },
  { path: "/projects", lastModified: "2026-09-09", priority: 0.6 },
  { path: "/work", lastModified: "2026-09-10", priority: 0.6 },
  { path: "/calculator", lastModified: "2026-09-09", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: route.lastModified,
    priority: route.priority,
  }));
}
