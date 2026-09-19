import { Metadata } from "next";
import BlogListingClient from "./BlogListingClient";

export const metadata: Metadata = {
  title: "Insights & Updates | Autofya Official Blog",
  description: "Stay informed with the latest industry developments, engineering guides, product updates, and tech news from the Autofya team.",
  openGraph: {
    title: "Insights & Updates | Autofya Official Blog",
    description: "Discover tech perspectives, guides, and software updates from Autofya.",
    url: "https://autofya.com/blog",
    type: "website",
    siteName: "Autofya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Updates | Autofya Blog",
    description: "Tech perspectives, guides, and software updates from Autofya.",
  },
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.autofya.com";

interface SearchParams {
  category?: string;
  search?: string;
}

export default async function BlogListingPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolvedParams = await searchParams;
  const category = resolvedParams.category || "all";
  const search = resolvedParams.search || "";

  // Server-Side Fetching for SEO
  let initialCategories = [];
  let initialPosts = [];
  let initialTotalCount = 0;
  let initialTotalPages = 1;

  try {
    const catRes = await fetch(`${API_BASE_URL}/blogs/categories/`, {
      cache: "no-store",
    });
    if (catRes.ok) {
      const catData = await catRes.json();
      if (catData.success) {
        initialCategories = catData.categories;
      }
    }

    const params = new URLSearchParams();
    if (category && category !== "all") {
      params.append("category", category);
    }
    if (search) {
      params.append("search", search);
    }
    params.append("page", "1");
    params.append("page_size", "6");

    const postsRes = await fetch(`${API_BASE_URL}/blogs/?${params.toString()}`, {
      cache: "no-store",
    });
    if (postsRes.ok) {
      const postsData = await postsRes.json();
      if (postsData.success) {
        initialPosts = postsData.posts;
        initialTotalCount = postsData.count;
        initialTotalPages = postsData.total_pages;
      }
    }
  } catch (err) {
    console.error("Error performing SSR fetch for blogs:", err);
  }

  return (
    <BlogListingClient
      initialCategories={initialCategories}
      initialPosts={initialPosts}
      initialTotalCount={initialTotalCount}
      initialTotalPages={initialTotalPages}
      initialCategory={category}
      initialSearch={search}
    />
  );
}
