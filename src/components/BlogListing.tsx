"use client";

import { useState } from "react";
import Link from "next/link";

interface BlogPost {
  title: string;
  description: string;
  href: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  emoji: string;
  gradient: string;
  glowColor: string;
  image: string;
}

export default function BlogListing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const posts: BlogPost[] = [
    {
      title: "How to Write Headcanons: A Step-by-Step Guide",
      description:
        "Learn how to write headcanons that feel real and specific. This step-by-step guide covers behavior, emotion, and scenario, with examples for fanfiction and roleplay.",
      href: "/blog/how-to-write-headcanons/",
      date: "May 25, 2026",
      author: "Headcanon Space Team",
      readTime: "4 min read",
      category: "Writing Guides",
      emoji: "✍️",
      gradient: "bg-indigo-50/50",
      glowColor: "",
      image: "/blog-how-to-write-headcanons.png",
    },
    {
      title: "What Is a Headcanon? Meaning, Examples, and How to Write One",
      description:
        "Learn what a headcanon is, see clear examples, and discover how to write better character and story headcanons for fanfiction and roleplay.",
      href: "/blog/what-is-a-headcanon/",
      date: "April 23, 2026",
      author: "Headcanon Space Team",
      readTime: "5 min read",
      category: "Fandom Culture",
      emoji: "💡",
      gradient: "bg-purple-50/50",
      glowColor: "",
      image: "/blog-what-is-a-headcanon.png",
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-[1120px] px-6 py-12 md:py-20 relative">
      {/* Decorative background spacing */}

      {/* Hero Header */}
      <header className="max-w-[720px] mb-12 md:mb-16">
        <h1
          className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-[var(--color-text)] mb-5 animate-fade-up animate-delay-1"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Blog
        </h1>
        <p className="text-lg leading-relaxed text-[var(--color-text-muted)] animate-fade-up animate-delay-2">
          Explore our expert tutorials, articles, and step-by-step guides to write deeply specific and believable character habits, ship dynamics, and creative scenarios.
        </p>
      </header>

      {/* Interactive Controls Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 p-4 bg-white/70 border border-[var(--color-border)] rounded-2xl shadow-sm backdrop-blur animate-fade-up animate-delay-3">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
          {["All", "Writing Guides", "Fandom Culture"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`chip ${activeCategory === cat ? "selected" : ""}`}
              style={{ margin: 0 }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className="relative flex-1 max-w-md">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-ink-4)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="tool-input"
            style={{ height: "40px", paddingLeft: "38px" }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[var(--color-ink-4)] hover:text-[var(--color-text)] font-semibold"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-scale-in">
        {/* Blog Post Cards */}
        {filteredPosts.map((post) => (
          <article
            key={post.href}
            className="glow-card flex flex-col h-full bg-white group"
          >
            {/* Visual Decorative Solid Header with illustration */}
            <div className="aspect-video w-full relative overflow-hidden flex items-center justify-center border-b border-[var(--color-border)] bg-slate-50">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[var(--color-primary)]">
                    {post.category}
                  </span>
                  <span className="text-[12px] text-[var(--color-text-muted)] font-medium">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[var(--color-text)] mb-3 leading-snug hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                  <Link href={post.href}>{post.title}</Link>
                </h2>

                <p className="text-[var(--color-text-muted)] leading-relaxed text-sm mb-6 line-clamp-3">
                  {post.description}
                </p>
              </div>

              {/* Card Footer */}
              <div
                className="pt-5 flex items-center justify-between border-t border-[var(--color-border)]"
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                <div>
                  <p className="text-xs font-semibold text-[var(--color-text)]">
                    {post.author}
                  </p>
                  <p className="text-[11px] text-[var(--color-text-muted)]">
                    {post.date}
                  </p>
                </div>

                <Link
                  href={post.href}
                  className="text-xs font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] flex items-center gap-1 group/btn"
                >
                  Read Guide
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
                  >
                    <path
                      d="M6 12l4-4-4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}

        {/* Dynamic Empty State when no posts match */}
        {filteredPosts.length === 0 && (
          <div className="col-span-1 md:col-span-2 lg:col-span-2 p-12 text-center bg-white border border-[var(--color-border)] rounded-2xl shadow-xs">
            <span className="text-4xl block mb-4">🔍</span>
            <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
              No Guides Found
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] max-w-sm mx-auto mb-6">
              We couldn't find any guides matching "{searchQuery}". Try selecting another category or refining your search.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="btn-secondary"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
