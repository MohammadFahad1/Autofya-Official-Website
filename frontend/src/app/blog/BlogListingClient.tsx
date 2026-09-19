"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  posts_count: number;
}

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: Category;
  author_name: string;
  image: string;
  excerpt: string;
  reading_time_minutes: number;
  views_count: number;
  created_at: string;
}

interface BlogListingClientProps {
  initialCategories: Category[];
  initialPosts: BlogPost[];
  initialTotalCount: number;
  initialTotalPages: number;
  initialCategory: string;
  initialSearch: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.autofya.com";

export default function BlogListingClient({
  initialCategories,
  initialPosts,
  initialTotalCount,
  initialTotalPages,
  initialCategory,
  initialSearch,
}: BlogListingClientProps) {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [searchInput, setSearchInput] = useState<string>(initialSearch);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(initialTotalPages);
  const [totalCount, setTotalCount] = useState<number>(initialTotalCount);
  const [loading, setLoading] = useState<boolean>(false);
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

  // Re-fetch client side when filters change
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    setLoading(true);
    const params = new URLSearchParams();
    if (selectedCategory && selectedCategory !== "all") {
      params.append("category", selectedCategory);
    }
    if (searchQuery) {
      params.append("search", searchQuery);
    }
    params.append("page", currentPage.toString());
    params.append("page_size", "6");

    fetch(`${API_BASE_URL}/blogs/?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPosts(data.posts);
          setTotalPages(data.total_pages);
          setTotalCount(data.count);
        }
      })
      .catch((err) => console.error("Error fetching blogs:", err))
      .finally(() => setLoading(false));
  }, [selectedCategory, searchQuery, currentPage]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    setCurrentPage(1);
  };

  const handleCategorySelect = (slug: string) => {
    setSelectedCategory(slug);
    setCurrentPage(1);
  };

  const totalAllPosts = categories.reduce((sum, c) => sum + c.posts_count, 0);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#00a2ad] selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-[#0B1340] text-white border-b border-slate-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00a2ad]/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00a2ad]/20 border border-[#00a2ad]/40 text-[#00a2ad] text-xs font-bold tracking-wide uppercase mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00a2ad] animate-pulse" />
            Blog
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            Insights &amp; Updates
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Stay informed with the latest industry developments, product updates, and company news all in one place.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="max-w-xl mx-auto flex items-center gap-2">
            <div className="relative flex-1">
              <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-[#161F48] border border-slate-700/80 rounded-full pl-12 pr-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00a2ad] focus:ring-1 focus:ring-[#00a2ad] transition-all shadow-inner"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white text-sm font-bold shadow-md transition-all active:scale-95 shrink-0"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="bg-white py-14 flex-1 w-full">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT SIDEBAR: BLOG CATEGORIES */}
            <aside className="lg:col-span-3 bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm sticky top-28">
              <div className="mb-6 pb-4 border-b border-slate-100">
                <h2 className="text-lg font-bold text-[#00a2ad]">
                  Blog Categories
                </h2>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => handleCategorySelect("all")}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between group cursor-pointer ${
                    selectedCategory === "all"
                      ? "bg-[#00a2ad] text-white shadow-sm"
                      : "bg-[#F1F5F9] text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <span>All</span>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold transition-all ${
                    selectedCategory === "all"
                      ? "bg-white/20 text-white"
                      : "bg-slate-200 text-slate-600 group-hover:bg-slate-300"
                  }`}>
                    {totalAllPosts || totalCount}
                  </span>
                </button>

                {categories.map((cat) => {
                  const isActive = selectedCategory === cat.slug;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.slug)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between group cursor-pointer ${
                        isActive
                          ? "bg-[#00a2ad] text-white shadow-sm"
                          : "bg-[#F1F5F9] text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      <span className="truncate pr-2">{cat.name}</span>
                      <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold transition-all ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-200 text-slate-600 group-hover:bg-slate-300"
                      }`}>
                        {cat.posts_count}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* RIGHT MAIN GRID: ARTICLES */}
            <section className="lg:col-span-9 space-y-8">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 border border-slate-200/80 rounded-xl px-5 py-3.5 text-xs text-slate-600">
                <div>
                  Showing <span className="font-bold text-slate-900">{posts.length}</span> of{" "}
                  <span className="font-bold text-[#00a2ad]">{totalCount}</span> articles
                  {selectedCategory !== "all" && (
                    <span> in category &ldquo;<span className="text-slate-900 font-bold">{categories.find(c => c.slug === selectedCategory)?.name || selectedCategory}</span>&rdquo;</span>
                  )}
                  {searchQuery && (
                    <span> matching &ldquo;<span className="text-[#FF9000] font-bold">{searchQuery}</span>&rdquo;</span>
                  )}
                </div>

                {(selectedCategory !== "all" || searchQuery) && (
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSearchQuery("");
                      setSearchInput("");
                      setCurrentPage(1);
                    }}
                    className="text-[#00a2ad] hover:underline font-bold cursor-pointer"
                  >
                    Clear Filter
                  </button>
                )}
              </div>

              {/* Articles Grid */}
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 animate-pulse h-96 flex flex-col justify-between">
                      <div className="w-full h-48 bg-slate-200 rounded-xl mb-4" />
                      <div className="h-4 bg-slate-200 rounded w-1/3 mb-2" />
                      <div className="h-6 bg-slate-200 rounded w-5/6 mb-4" />
                      <div className="h-4 bg-slate-200 rounded w-full mb-2" />
                      <div className="h-4 bg-slate-200 rounded w-2/3" />
                    </div>
                  ))}
                </div>
              ) : posts.length === 0 ? (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center my-8">
                  <div className="w-16 h-16 bg-[#00a2ad]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#00a2ad]">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">No Articles Found</h3>
                  <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
                    We couldn&apos;t find any blog posts matching your search or filter.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSearchQuery("");
                      setSearchInput("");
                      setCurrentPage(1);
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#00a2ad] text-white font-bold text-sm hover:bg-[#008790] transition-colors"
                  >
                    View All Articles
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {posts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden hover:border-[#00a2ad] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col group"
                    >
                      <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/9] overflow-hidden bg-slate-100">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80";
                          }}
                        />
                      </Link>

                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2.5">
                          <span className="text-[#00a2ad] text-xs font-bold uppercase tracking-wider block">
                            {post.category?.name || "Software"}
                          </span>
                          <Link href={`/blog/${post.slug}`}>
                            <h3 className="text-lg sm:text-xl font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors leading-snug line-clamp-2">
                              {post.title}
                            </h3>
                          </Link>
                          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 font-normal">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[#00a2ad]/10 text-[#00a2ad] flex items-center justify-center font-bold text-[10px]">
                              {post.author_name.charAt(0)}
                            </div>
                            <span className="font-semibold text-slate-700">{post.author_name}</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <span>{post.reading_time_minutes} min read</span>
                            <Link
                              href={`/blog/${post.slug}`}
                              className="text-[#00a2ad] hover:underline font-bold transition-colors"
                            >
                              Read →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 pt-6">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:border-[#00a2ad] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                  >
                    ‹ Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-9 h-9 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        currentPage === pageNum
                          ? "bg-[#00a2ad] text-white shadow-sm"
                          : "bg-white border border-slate-200 text-slate-700 hover:border-[#00a2ad]"
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:border-[#00a2ad] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                  >
                    Next ›
                  </button>
                </div>
              )}

            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
