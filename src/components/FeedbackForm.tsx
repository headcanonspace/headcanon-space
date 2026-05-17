"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, MessageSquare, AlertTriangle, Lightbulb, HelpCircle, Loader2 } from "lucide-react";

type FeedbackCategory = "bug" | "feature" | "general" | "other";

export default function FeedbackForm() {
  const [category, setCategory] = useState<FeedbackCategory>("general");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setSubmitting(true);

    // Simulate database write / api call
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");
    }, 1200);
  };

  const categories: { id: FeedbackCategory; label: string; icon: React.ReactNode; desc: string; emoji: string }[] = [
    {
      id: "general",
      label: "General",
      emoji: "💬",
      icon: <MessageSquare className="size-4" />,
      desc: "Love the site? Have general thoughts? Share them here.",
    },
    {
      id: "bug",
      label: "Bug Report",
      emoji: "🐞",
      icon: <AlertTriangle className="size-4" />,
      desc: "Found something broken? Let us know so we can fix it.",
    },
    {
      id: "feature",
      label: "Idea / Feature",
      emoji: "✨",
      icon: <Lightbulb className="size-4" />,
      desc: "Suggest new generators, tropes, or user features.",
    },
    {
      id: "other",
      label: "Other",
      emoji: "❓",
      icon: <HelpCircle className="size-4" />,
      desc: "Anything else that doesn't fit the above.",
    },
  ];

  if (success) {
    return (
      <div 
        className="p-8 md:p-10 rounded-2xl text-center shadow-md animate-fade-in"
        style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
      >
        <div className="flex justify-center mb-6">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center text-3xl animate-bounce"
            style={{ background: "var(--color-primary-lt)", color: "var(--color-primary)" }}
          >
            🎉
          </div>
        </div>
        
        <h2 
          className="text-2xl font-semibold mb-3" 
          style={{ color: "var(--color-text)" }}
        >
          Feedback Submitted!
        </h2>
        
        <p className="mb-8 max-w-[420px] mx-auto text-[14.5px] leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
          Thank you so much! We read every submission. Your input helps us make Headcanon Space even better for all writers and creators.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => setSuccess(false)}
            className="btn-primary sm:w-[200px]"
          >
            Send More Feedback
          </button>
          <Link
            href="/"
            className="flex items-center justify-center h-[52px] rounded-xl font-medium transition-all px-6 border hover:bg-neutral-50 active:bg-neutral-100 sm:w-[160px]"
            style={{ 
              borderColor: "var(--color-border)",
              color: "var(--color-ink-2)",
              fontSize: "15px"
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="p-6 md:p-8 rounded-2xl shadow-sm space-y-6"
      style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
    >
      {/* Category selector */}
      <div>
        <label 
          className="block text-[14px] font-semibold mb-3"
          style={{ color: "var(--color-ink-2)" }}
        >
          Select Feedback Category
        </label>
        
        <div className="grid grid-cols-2 gap-3">
          {categories.map((cat) => {
            const isSelected = category === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategory(cat.id)}
                className="p-4 rounded-xl text-left transition-all border flex flex-col justify-between min-h-[96px] cursor-pointer"
                style={{
                  background: isSelected ? "var(--color-primary-lt)" : "var(--color-white)",
                  borderColor: isSelected ? "var(--color-primary)" : "var(--color-border)",
                  boxShadow: isSelected ? "0 0 0 1px var(--color-primary)" : "none",
                }}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="text-[14px] font-medium" style={{ color: isSelected ? "var(--color-primary)" : "var(--color-text)" }}>
                    {cat.label}
                  </span>
                  <span className="text-lg">{cat.emoji}</span>
                </div>
                <p 
                  className="text-[11px] leading-snug" 
                  style={{ color: isSelected ? "var(--color-ink-2)" : "var(--color-ink-4)" }}
                >
                  {cat.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Name and Email inputs */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label 
            htmlFor="name"
            className="block text-[13.5px] font-medium mb-1.5"
            style={{ color: "var(--color-ink-3)" }}
          >
            Your Name <span className="text-xs" style={{ color: "var(--color-ink-4)" }}>(Optional)</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Alex"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-11 px-3.5 rounded-xl border outline-none transition-all placeholder:text-neutral-300"
            style={{ 
              borderColor: "var(--color-border)",
              background: "var(--color-white)",
              fontSize: "14px",
              color: "var(--color-text)",
            }}
          />
        </div>
        
        <div>
          <label 
            htmlFor="email"
            className="block text-[13.5px] font-medium mb-1.5"
            style={{ color: "var(--color-ink-3)" }}
          >
            Your Email <span className="text-xs" style={{ color: "var(--color-ink-4)" }}>(Optional)</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="e.g. alex@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-11 px-3.5 rounded-xl border outline-none transition-all placeholder:text-neutral-300"
            style={{ 
              borderColor: "var(--color-border)",
              background: "var(--color-white)",
              fontSize: "14px",
              color: "var(--color-text)",
            }}
          />
        </div>
      </div>

      {/* Message Textarea */}
      <div>
        <label 
          htmlFor="message"
          className="block text-[13.5px] font-medium mb-1.5"
          style={{ color: "var(--color-ink-3)" }}
        >
          Feedback Details <span className="text-[11px]" style={{ color: "var(--color-primary)" }}>*Required</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="Tell us what you think..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3.5 rounded-xl border outline-none transition-all placeholder:text-neutral-300 resize-y min-h-[120px]"
          style={{ 
            borderColor: "var(--color-border)",
            background: "var(--color-white)",
            fontSize: "14px",
            color: "var(--color-text)",
            lineHeight: 1.6
          }}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitting || !message.trim()}
        className="btn-primary cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            <Loader2 className="animate-spin size-5 mr-1" />
            Submitting...
          </>
        ) : (
          "Submit Feedback"
        )}
      </button>
    </form>
  );
}
