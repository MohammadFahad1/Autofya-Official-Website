import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://autofya.com";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.autofya.com";

interface BlogPost {
  id: number;
  slug: string;
  updated_at?: string;
  created_at?: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/schedule`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Service and solution pages
  const serviceRoutes = [
    "/3d-modeling-services",
    "/adobe-experience-manager",
    "/ai-dlc",
    "/banking-solutions",
    "/blockchain-development",
    "/business-intelligence",
    "/cloud-solutions",
    "/cyber-security",
    "/fintech",
    "/data-engineering",
    "/data-migration",
    "/data-science-business-intelligence",
    "/ecommerce-development",
    "/erp-development",
    "/field-force-automation",
    "/game-studio",
    "/insurtech",
    "/lms-development",
    "/ml-ai-development",
    "/qa-testing-automation",
    "/sharepoint-services",
    "/shopify-services",
    "/web-mobile-app-development",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic Blog Post routes
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(`${API_BASE_URL}/blogs/`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      const posts: BlogPost[] = data.posts || data.results || (Array.isArray(data) ? data : []);
      blogRoutes = posts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: post.updated_at || post.created_at || currentDate,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
    }
  } catch (err) {
    console.error("Sitemap generation: Could not fetch dynamic blog posts", err);
  }

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
