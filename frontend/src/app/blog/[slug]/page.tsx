import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface BlogPostDetail {
  id: number;
  title: string;
  slug: string;
  category: Category;
  author_name: string;
  image: string;
  excerpt: string;
  content: string;
  reading_time_minutes: number;
  views_count: number;
  created_at: string;
}

interface BlogPostSummary {
  id: number;
  title: string;
  slug: string;
  category: Category;
  author_name: string;
  image: string;
  excerpt: string;
  reading_time_minutes: number;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.autofya.com";

// DYNAMIC SEO METADATA GENERATOR (SERVER SIDE)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  try {
    const res = await fetch(`${API_BASE_URL}/blogs/${slug}/`, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.post) {
        const post: BlogPostDetail = data.post;
        return {
          title: `${post.title} | Autofya Blog`,
          description: post.excerpt,
          openGraph: {
            title: `${post.title} | Autofya Blog`,
            description: post.excerpt,
            images: [post.image],
            url: `https://autofya.com/blog/${post.slug}`,
            type: "article",
            publishedTime: post.created_at,
            authors: [post.author_name],
          },
          twitter: {
            card: "summary_large_image",
            title: `${post.title} | Autofya Blog`,
            description: post.excerpt,
            images: [post.image],
          },
        };
      }
    }
  } catch (err) {
    console.error("Error generating SEO metadata:", err);
  }

  return {
    title: "Blog Article | Autofya",
    description: "Read the latest technology insights from Autofya.",
  };
}

// SERVER-SIDE RENDERED BLOG DETAIL PAGE (SSR)
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  let post: BlogPostDetail | null = null;
  let relatedPosts: BlogPostSummary[] = [];
  let errorMsg: string | null = null;

  try {
    const res = await fetch(`${API_BASE_URL}/blogs/${slug}/`, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        post = data.post;
        relatedPosts = data.related_posts || [];
      } else {
        errorMsg = data.message || "Failed to load article.";
      }
    } else {
      errorMsg = "Article not found.";
    }
  } catch (err: any) {
    errorMsg = err.message || "Network error loading article.";
  }

  if (errorMsg || !post) {
    return (
      <div className="min-h-screen bg-white text-slate-800 flex flex-col">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-24 text-center flex-1 flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-red-100 text-red-500 flex items-center justify-center mb-4 text-2xl font-bold">
            !
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Article Not Found</h1>
          <p className="text-slate-600 mb-6">{errorMsg || "The article you are looking for does not exist or was removed."}</p>
          <Link
            href="/blog"
            className="px-6 py-3 rounded-full bg-[#00a2ad] text-white font-bold text-sm hover:bg-[#008790] transition-colors"
          >
            ← Return to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formattedDate = new Date(post.created_at).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#00a2ad] selection:text-white">
      <Navbar />

      {/* ARTICLE HERO BANNER (SSR PRE-RENDERED) */}
      <section className="bg-[#0B1340] text-white pt-12 pb-16 border-b border-slate-800">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#00a2ad] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Articles
            </Link>
          </div>

          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="bg-[#00a2ad]/20 text-[#00a2ad] border border-[#00a2ad]/40 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                {post.category?.name}
              </span>
              <span className="text-slate-400">•</span>
              <time dateTime={post.created_at} className="text-slate-300 font-medium">
                {formattedDate}
              </time>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300 font-medium">{post.reading_time_minutes} min read</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300 font-medium">{post.views_count} views</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              {post.excerpt}
            </p>

            <div className="pt-4 flex items-center gap-3 border-t border-slate-800">
              <div className="w-10 h-10 rounded-full bg-[#00a2ad] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                {post.author_name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-white">{post.author_name}</div>
                <div className="text-xs text-slate-400">Autofya Contributor</div>
              </div>
            </div>
          </header>

        </div>
      </section>

      {/* ARTICLE BODY SECTION (SSR PRE-RENDERED FOR SEO) */}
      <main className="bg-white py-12 flex-1 w-full">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {post.image && (
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-12 border border-slate-200 shadow-sm bg-slate-100">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Full Rich HTML Body */}
          <article className="article-body text-slate-800 text-base leading-relaxed space-y-6 border-b border-slate-200 pb-12 mb-16">
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="prose prose-slate max-w-none 
                [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-[#0B1340] [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:border-b [&>h2]:border-slate-200 [&>h2]:pb-2
                [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-[#00a2ad] [&>h3]:mt-8 [&>h3]:mb-3
                [&>p]:text-slate-700 [&>p]:leading-relaxed [&>p]:mb-5 [&>p]:text-base
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:text-slate-700 [&>ul]:mb-6
                [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>ol]:text-slate-700 [&>ol]:mb-6
                [&>blockquote]:border-l-4 [&>blockquote]:border-[#00a2ad] [&>blockquote]:bg-slate-50 [&>blockquote]:p-4 [&>blockquote]:rounded-r-xl [&>blockquote]:italic [&>blockquote]:text-slate-800 [&>blockquote]:my-6
                [&>img]:rounded-xl [&>img]:my-6 [&>img]:border [&>img]:border-slate-200
                [&>a]:text-[#00a2ad] [&>a]:underline hover:[&>a]:text-slate-900"
            />
          </article>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[#0B1340] flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#00a2ad]" />
                Related Articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rel) => (
                  <div
                    key={rel.id}
                    className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-[#00a2ad] transition-all flex flex-col justify-between p-4 shadow-sm hover:shadow-md group"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-[#00a2ad] uppercase tracking-wider">
                        {rel.category?.name}
                      </span>
                      <Link href={`/blog/${rel.slug}`}>
                        <h3 className="text-sm font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors line-clamp-2">
                          {rel.title}
                        </h3>
                      </Link>
                      <p className="text-xs text-slate-600 line-clamp-2">
                        {rel.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                      <span>{rel.reading_time_minutes} min read</span>
                      <Link href={`/blog/${rel.slug}`} className="text-[#00a2ad] font-bold hover:underline">
                        Read →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
