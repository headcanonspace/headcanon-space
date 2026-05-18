import BlogListing from "@/components/BlogListing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Writing Tips, Guides, & Tutorials",
  description:
    "Explore expert guides, tips, and tutorials about writing headcanons. Learn how to create deep character quirks, relationship dynamics, and exciting scenarios.",
  alternates: {
    canonical: "https://headcanonspace.com/blog/",
  },
  openGraph: {
    title: "Blog - Writing Tips, Guides, & Tutorials",
    description:
      "Explore expert guides, tips, and tutorials about writing headcanons. Learn how to create deep character quirks, relationship dynamics, and exciting scenarios.",
    url: "/blog/",
  },
};

export default function BlogIndexPage() {
  return <BlogListing />;
}
